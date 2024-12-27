import { create } from 'zustand';
import { AIApplication } from '../types';
import { applicationService, ERROR_MESSAGES } from '../services';

interface ApplicationStore {
  applications: AIApplication[];
  filteredApplications: AIApplication[];
  selectedType: string | null;
  isLoading: boolean;
  error: string | null;
  fetchApplications: () => Promise<void>;
  filterByType: (type: string | null) => void;
}

export const useApplicationStore = create<ApplicationStore>((set, get) => ({
  applications: [],
  filteredApplications: [],
  selectedType: '智能体',
  isLoading: false,
  error: null,

  fetchApplications: async () => {
    set({ isLoading: true, error: null });
    try {
      const apps = await applicationService.getApplications();
      set({ 
        applications: apps,
        filteredApplications: apps,
        isLoading: false 
      });
    } catch (error) {
      set({ 
        error: 'Failed to fetch applications',
        isLoading: false 
      });
    }
  },

  filterByType: (type: string | null) => {
    const { applications } = get();
    if (!applications || applications.length === 0) {
      return;
    }
    
    const filteredApps = type 
      ? applications.filter(app => app.type === type)
      : applications;
    
    set({
      selectedType: type,
      filteredApplications: filteredApps.length > 0 ? filteredApps : applications
    });
  },
}));
