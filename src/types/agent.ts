export interface Agent {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  status: 'active' | 'inactive' | 'archived';
}

export interface CreateAgentPayload {
  name: string;
  description: string;
  model?: string;
  temperature?: number;
  systemPrompt?: string;
}
