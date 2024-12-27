import { create } from 'zustand';
import { User } from '../types';
import { userService, ERROR_MESSAGES } from '../services';

interface UserStore {
  profile: User | null;
  isLoading: boolean;
  error: string | null;
  fetchUserProfile: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  profile: null,
  isLoading: false,
  error: null,

  fetchUserProfile: async () => {
    set({ isLoading: true, error: null });
    try {
      const profile = await userService.getUserProfile();
      set({ profile, isLoading: false });
    } catch (error) {
      set({ 
        error: '获取用户信息失败',
        isLoading: false 
      });
    }
  },

  updateProfile: async (updates: Partial<User>) => {
    set({ isLoading: true, error: null });
    try {
      const updatedProfile = await userService.updateUserProfile(updates);
      set({ profile: updatedProfile, isLoading: false });
    } catch (error) {
      set({ 
        error: '更新用户信息失败',
        isLoading: false 
      });
    }
  }
}));
