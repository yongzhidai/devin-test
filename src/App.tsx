import { Search, Download, Heart, Star, Brain } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const models = [
  {
    id: 1,
    name: "BERT-large",
    description: "A powerful transformer model for natural language understanding tasks.",
    downloads: "2.3M",
    likes: "15.2K",
    tasks: ["Text Classification", "NLP"],
    author: "Google Research"
  },
  {
    id: 2,
    name: "Stable Diffusion XL",
    description: "State-of-the-art text-to-image generation model with exceptional quality.",
    downloads: "1.8M",
    likes: "12.5K",
    tasks: ["Image Generation", "Computer Vision"],
    author: "Stability AI"
  },
  {
    id: 3,
    name: "GPT-J-6B",
    description: "Open-source large language model for text generation and completion.",
    downloads: "985K",
    likes: "8.7K",
    tasks: ["Text Generation", "NLP"],
    author: "EleutherAI"
  }
]

const datasets = [
  {
    id: 1,
    name: "Common Crawl",
    description: "Web-scale dataset containing petabytes of raw web page data.",
    downloads: "520K",
    likes: "3.2K",
    tasks: ["Language Modeling", "Web Mining"],
    author: "Common Crawl Foundation"
  },
  {
    id: 2,
    name: "ImageNet-1K",
    description: "Large-scale dataset for object recognition with 1000 classes.",
    downloads: "890K",
    likes: "5.1K",
    tasks: ["Image Classification", "Computer Vision"],
    author: "Stanford Vision Lab"
  },
  {
    id: 3,
    name: "SQUAD 2.0",
    description: "Question answering dataset with 100,000+ questions.",
    downloads: "450K",
    likes: "2.8K",
    tasks: ["Question Answering", "NLP"],
    author: "Stanford NLP"
  }
]

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation Bar */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Hugging Face
            </a>
            <div className="relative w-96">
              <Input 
                type="search"
                placeholder="Search models, datasets, users..."
                className="pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <nav>
            <ul className="flex items-center space-x-6">
              <li><a href="/models" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Models</a></li>
              <li><a href="/datasets" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Datasets</a></li>
              <li><a href="/spaces" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Spaces</a></li>
              <li><Button variant="outline">Sign In</Button></li>
              <li><Button>Sign Up</Button></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The AI community building the future.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            The platform where the machine learning community collaborates on models, datasets, and applications.
          </p>
        </div>

        {/* Trending Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Trending Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <div key={model.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {model.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      by {model.author}
                    </p>
                  </div>
                  <Brain className="h-6 w-6 text-blue-500" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {model.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {model.tasks.map((task) => (
                    <Badge key={task} variant="secondary">
                      {task}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {model.downloads}
                  </span>
                  <span className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {model.likes}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Datasets Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Popular Datasets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {datasets.map((dataset) => (
              <div key={dataset.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {dataset.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      by {dataset.author}
                    </p>
                  </div>
                  <Star className="h-6 w-6 text-yellow-500" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {dataset.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {dataset.tasks.map((task) => (
                    <Badge key={task} variant="secondary">
                      {task}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {dataset.downloads}
                  </span>
                  <span className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {dataset.likes}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
