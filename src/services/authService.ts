import { User } from '../types';
import { delay, simulateError, ERROR_MESSAGES } from './index';

// Mock authentication service
export const authService = {
  login: async (username: string, password: string): Promise<User> => {
    await delay(1000);

    // Simulate validation error for empty credentials
    if (!username || !password) {
      throw new Error(ERROR_MESSAGES.VALIDATION);
    }

    // Simulate random server errors
    if (simulateError()) {
      throw new Error(ERROR_MESSAGES.SERVER);
    }

    // Simulate unauthorized error for specific test case
    if (password === 'error') {
      throw new Error(ERROR_MESSAGES.UNAUTHORIZED);
    }

    return {
      id: '1',
      username,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + username,
    };
  },
};
