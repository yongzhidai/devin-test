import { create } from 'zustand';
import { User } from '../types';
import { authService } from '../services';
import { ERROR_MESSAGES } from '../services';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  login: async (username: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const user = await authService.login(username, password);
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message, isLoading: false });
      } else {
        set({ error: ERROR_MESSAGES.SERVER, isLoading: false });
      }
    }
  },
  logout: () => set({ user: null, isAuthenticated: false, error: null }),
  clearError: () => set({ error: null }),
}));
