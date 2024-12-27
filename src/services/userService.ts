import { User } from '../types';

import { delay, simulateError, ERROR_MESSAGES } from './index';

// Mock user profile data
const MOCK_USER_PROFILE: User = {
  id: '1',
  username: '张三',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  email: 'zhangsan@example.com',
  joinDate: '2023-12-01',
  applications: 5,
  favorites: 3
};

export const userService = {
  getUserProfile: async (): Promise<User> => {
    await delay(1000);
    
    if (simulateError()) {
      throw new Error(ERROR_MESSAGES.SERVER);
    }
    
    return MOCK_USER_PROFILE;
  },

  updateUserProfile: async (updates: Partial<User>): Promise<User> => {
    await delay(500);
    
    if (simulateError()) {
      throw new Error(ERROR_MESSAGES.SERVER);
    }

    // Simulate validation error for invalid updates
    if (updates.username === '') {
      throw new Error(ERROR_MESSAGES.VALIDATION);
    }
    
    return {
      ...MOCK_USER_PROFILE,
      ...updates
    };
  }
};
