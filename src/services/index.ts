// Utility functions for services
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simulate random errors for testing
export const simulateError = (probability: number = 0.1): boolean => {
  return Math.random() < probability;
};

// Common error messages
export const ERROR_MESSAGES = {
  NETWORK: '网络连接错误',
  SERVER: '服务器错误',
  UNAUTHORIZED: '未授权访问',
  NOT_FOUND: '资源不存在',
  VALIDATION: '输入验证失败'
};

// Service layer for handling API calls (mocked)
export * from './authService';
export * from './chatService';
export * from './applicationService';
export * from './discoverService';
export * from './userService';
