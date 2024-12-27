import { LoginCredentials, ApiResponse } from './types';

export const authService = {
  login: async (credentials: LoginCredentials): Promise<ApiResponse<{ username: string; token: string }>> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const { username, password } = credentials;
    if (username === 'admin' && password === 'admin123') {
      return {
        success: true,
        data: {
          username,
          token: 'mock-jwt-token'
        }
      };
    }
    return { success: false, error: '用户名或密码错误' };
  },
};
