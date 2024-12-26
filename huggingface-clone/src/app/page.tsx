import { ModelList } from '../components/business/ModelList';
import { Model } from '../types/model';

// Mock data - will be replaced with real API data in the service layer
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

export default function Home() {
  const handleLike = (modelId: string) => {
    console.log('Like model:', modelId);
    // Will be implemented in service layer
  };

  const handleDownload = (modelId: string) => {
    console.log('Download model:', modelId);
    // Will be implemented in service layer
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Model Hub</h1>
          <p className="text-gray-600">Discover, download, and use machine learning models</p>
        </header>

        <ModelList
          models={mockModels}
          onLike={handleLike}
          onDownload={handleDownload}
        />
      </div>
    </div>
  );
}
