import { ModelList } from '../components/business/ModelList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Model Hub</h1>
          <p className="text-gray-600">Discover, download, and use machine learning models</p>
        </header>

        <ModelList />
      </div>
    </div>
  );
}
