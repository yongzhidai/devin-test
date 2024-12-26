export interface Model {
  id: string;
  name: string;
  description: string;
  author: string;
  tags: string[];
  likes: number;
  downloads: number;
  lastUpdated: string;
  framework: string;
  task: string;
  license: string;
}

export interface ModelFilter {
  task?: string | null;
  framework?: string | null;
  license?: string | null;
  sortBy?: 'downloads' | 'likes' | 'updated' | null;
}

export interface ModelStats {
  totalDownloads: number;
  totalLikes: number;
  averageRating: number;
}
