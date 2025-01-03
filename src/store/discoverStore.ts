import { create } from 'zustand';
import { AIApplication } from '../types';
import { discoverService, ERROR_MESSAGES } from '../services';

interface DiscoverStore {
  recommendedApplications: AIApplication[];
  filteredApplications: AIApplication[];
  selectedType: string | null;
  isLoading: boolean;
  error: string | null;
  fetchRecommendedApplications: () => Promise<void>;
  filterByType: (type: string | null) => void;
}

export const useDiscoverStore = create<DiscoverStore>((set, get) => ({
  recommendedApplications: [],
  filteredApplications: [],
  selectedType: '智能体',
  isLoading: false,
  error: null,

  fetchRecommendedApplications: async () => {
    set({ isLoading: true, error: null });
    try {
      const apps = await discoverService.getRecommendedApplications();
      set({ 
        recommendedApplications: apps,
        filteredApplications: apps,
        isLoading: false 
      });
    } catch (error) {
      set({ 
        error: '获取推荐应用失败',
        isLoading: false 
      });
    }
  },

  filterByType: (type: string | null) => {
    const { recommendedApplications } = get();
    if (!recommendedApplications || recommendedApplications.length === 0) {
      return;
    }

    if (type === '智能体') {
      set({
        selectedType: '智能体',
        filteredApplications: recommendedApplications.filter(app => app.type === '智能体')
      });
      return;
    }

    const filteredApps = type 
      ? recommendedApplications.filter(app => app.type === type)
      : recommendedApplications;
    
    set({
      selectedType: type,
      filteredApplications: filteredApps
    });
  },
}));
