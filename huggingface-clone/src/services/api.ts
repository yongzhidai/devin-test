import { Model, ModelFilter } from '../types/model';

// Mock data
const mockModels: Model[] = [
  {
    id: '1',
    name: 'BERT-base-uncased',
    description: 'Pre-trained BERT model uncased on English language using a masked language modeling (MLM) objective.',
    author: 'Google Research',
    tags: ['transformer', 'bert', 'nlp', 'english'],
    likes: 15000,
    downloads: 1000000,
    lastUpdated: '2023-12-25T10:00:00Z',
    framework: 'PyTorch',
    task: 'Text Classification',
    license: 'Apache 2.0'
  },
  {
    id: '2',
    name: 'GPT-2 Small',
    description: 'OpenAI GPT-2 Small model for text generation and language modeling.',
    author: 'OpenAI',
    tags: ['transformer', 'gpt', 'nlp', 'text-generation'],
    likes: 12000,
    downloads: 800000,
    lastUpdated: '2023-12-24T15:30:00Z',
    framework: 'TensorFlow',
    task: 'Text Generation',
    license: 'MIT'
  },
  {
    id: '3',
    name: 'ResNet-50',
    description: 'Deep residual learning model for image classification.',
    author: 'Microsoft Research',
    tags: ['computer-vision', 'classification', 'resnet'],
    likes: 10000,
    downloads: 500000,
    lastUpdated: '2023-12-23T09:15:00Z',
    framework: 'PyTorch',
    task: 'Image Classification',
    license: 'BSD'
  }
];

export interface ApiResponse<T> {
  data: T;
  error?: string;
  loading?: boolean;
}

export async function fetchModels(filter?: ModelFilter): Promise<ApiResponse<Model[]>> {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    let filteredModels = [...mockModels];
    
    if (filter) {
      if (filter.task) {
        filteredModels = filteredModels.filter(model => model.task === filter.task);
      }
      if (filter.framework) {
        filteredModels = filteredModels.filter(model => model.framework === filter.framework);
      }
      if (filter.license) {
        filteredModels = filteredModels.filter(model => model.license === filter.license);
      }
      if (filter.sortBy) {
        filteredModels.sort((a, b) => {
          switch (filter.sortBy) {
            case 'downloads':
              return b.downloads - a.downloads;
            case 'likes':
              return b.likes - a.likes;
            case 'updated':
              return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
            default:
              return 0;
          }
        });
      }
    }

    return { data: filteredModels };
  } catch (error) {
    return { 
      data: [], 
      error: error instanceof Error ? error.message : 'Failed to fetch models' 
    };
  }
}

export async function likeModel(modelId: string): Promise<ApiResponse<boolean>> {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: true };
  } catch (error) {
    return { 
      data: false, 
      error: error instanceof Error ? error.message : 'Failed to like model' 
    };
  }
}

export async function downloadModel(modelId: string): Promise<ApiResponse<boolean>> {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: true };
  } catch (error) {
    return { 
      data: false, 
      error: error instanceof Error ? error.message : 'Failed to download model' 
    };
  }
}
