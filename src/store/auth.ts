import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
  isLoading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      username: null,
      isLoading: true,
      error: null,
      login: async (username: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          // In a real app, validate credentials with backend
          if (username && password) {
            set({ isAuthenticated: true, username, isLoading: false });
            return true;
          }
          set({ error: '无效的用户名或密码', isLoading: false });
          return false;
        } catch (error) {
          console.error('Login failed:', error);
          set({ error: '登录失败，请重试', isLoading: false });
          return false;
        }
      },
      logout: () => set({ 
        isAuthenticated: false, 
        username: null, 
        error: null 
      }),
      setLoading: (loading: boolean) => set({ isLoading: loading }),
      setError: (error: string | null) => set({ error }),
    }),
    {
      name: 'auth-storage',
      skipHydration: true,
    }
  )
);
