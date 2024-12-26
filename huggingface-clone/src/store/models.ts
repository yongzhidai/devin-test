import { create } from 'zustand';
import { Model, ModelFilter } from '../types/model';
import { fetchModels, likeModel, downloadModel } from '../services/api';
import { message } from 'antd';

interface ModelsState {
  models: Model[];
  filteredModels: Model[];
  loading: boolean;
  error: string | null;
  filter: ModelFilter;
  searchQuery: string;
  
  // Actions
  setFilter: (filter: ModelFilter | ((prev: ModelFilter) => ModelFilter)) => void;
  setSearchQuery: (query: string) => void;
  fetchModels: () => Promise<void>;
  likeModel: (modelId: string) => Promise<void>;
  downloadModel: (modelId: string) => Promise<void>;
}

export const useModelsStore = create<ModelsState>((set, get) => ({
  models: [],
  filteredModels: [],
  loading: false,
  error: null,
  filter: {},
  searchQuery: '',

  setFilter: (filter: ModelFilter | ((prev: ModelFilter) => ModelFilter)) => {
    set((state) => ({
      filter: typeof filter === 'function' ? filter(state.filter) : filter
    }));
    get().fetchModels();
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    const { models } = get();
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      const filtered = models.filter(model =>
        model.name.toLowerCase().includes(lowercaseQuery) ||
        model.description.toLowerCase().includes(lowercaseQuery) ||
        model.author.toLowerCase().includes(lowercaseQuery) ||
        model.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      );
      set({ filteredModels: filtered });
    } else {
      set({ filteredModels: models });
    }
  },

  fetchModels: async () => {
    set({ loading: true, error: null });
    try {
      const { filter } = get();
      const response = await fetchModels(filter);
      if (response.error) {
        set({ error: response.error, loading: false });
        message.error(response.error);
        return;
      }
      set({ models: response.data, filteredModels: response.data });
      get().setSearchQuery(get().searchQuery); // Re-apply search filter
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch models';
      set({ error: errorMessage, loading: false });
      message.error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  likeModel: async (modelId: string) => {
    try {
      const response = await likeModel(modelId);
      if (response.error) {
        message.error(response.error);
        return;
      }
      message.success('Model liked successfully');
    } catch (error) {
      message.error('Failed to like model');
    }
  },

  downloadModel: async (modelId: string) => {
    try {
      const response = await downloadModel(modelId);
      if (response.error) {
        message.error(response.error);
        return;
      }
      message.success('Model downloaded successfully');
    } catch (error) {
      message.error('Failed to download model');
    }
  },
}));
