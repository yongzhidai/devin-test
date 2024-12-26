import { ModelList } from '../components/business/ModelList';
import { useModelsStore } from '../store/models';

export default function Home() {
  const { likeModel, downloadModel } = useModelsStore();

  const handleLike = (modelId: string) => {
    likeModel(modelId);
  };

  const handleDownload = (modelId: string) => {
    downloadModel(modelId);
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
