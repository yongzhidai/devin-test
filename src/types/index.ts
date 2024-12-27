// Common types used across the application
export interface User {
  id: string;
  username: string;
  avatar?: string;
  email?: string;
  joinDate?: string;
  applications?: number;
  favorites?: number;
}

export interface AIApplication {
  id: string;
  name: string;
  type: string;
  description: string;
  icon?: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: number;
  appId?: string;
}
