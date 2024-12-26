import { ModelList } from '../components/business/ModelList';
import { likeModel, downloadModel } from '../services/api';

export default function Home() {
  const handleLike = async (modelId: string) => {
    const response = await likeModel(modelId);
    if (response.error) {
      console.error('Failed to like model:', response.error);
    }
  };

  const handleDownload = async (modelId: string) => {
    const response = await downloadModel(modelId);
    if (response.error) {
      console.error('Failed to download model:', response.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Model Hub</h1>
          <p className="text-gray-600">Discover, download, and use machine learning models</p>
        </header>

        <ModelList
          onLike={handleLike}
          onDownload={handleDownload}
        />
      </div>
    </div>
  );
}
