import { LoginCredentials, ApiResponse } from './types';

export const authService = {
  login: async (credentials: LoginCredentials): Promise<ApiResponse<void>> => {
    // TODO: Implement actual API call
    const { username, password } = credentials;
    if (username === 'admin' && password === 'admin') {
      return { success: true };
    }
    return { success: false, error: '用户名或密码错误' };
  },
};
