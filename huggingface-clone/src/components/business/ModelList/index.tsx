import React, { useState, useEffect } from 'react';
import { Model, ModelFilter } from '../../../types/model';
import { Space } from 'antd';
import { List, Select, Search } from '../../presentation';
import { ModelCard } from '../ModelCard';

// Search component is imported from presentation layer

interface ModelListProps {
  models: Model[];
  onLike?: (modelId: string) => void;
  onDownload?: (modelId: string) => void;
}

export const ModelList: React.FC<ModelListProps> = ({ models, onLike, onDownload }) => {
  const [filteredModels, setFilteredModels] = useState<Model[]>(models);
  const [filter, setFilter] = useState<ModelFilter>({});
  const [searchQuery, setSearchQuery] = useState('');

  const tasks = Array.from(new Set(models.map(m => m.task)));
  const frameworks = Array.from(new Set(models.map(m => m.framework)));
  const licenses = Array.from(new Set(models.map(m => m.license)));

  useEffect(() => {
    let result = models;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(model => 
        model.name.toLowerCase().includes(query) ||
        model.description.toLowerCase().includes(query) ||
        model.author.toLowerCase().includes(query) ||
        model.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply filters
    if (filter.task) {
      result = result.filter(model => model.task === filter.task);
    }
    if (filter.framework) {
      result = result.filter(model => model.framework === filter.framework);
    }
    if (filter.license) {
      result = result.filter(model => model.license === filter.license);
    }

    // Apply sorting
    if (filter.sortBy) {
      result = [...result].sort((a, b) => {
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

    setFilteredModels(result);
  }, [models, filter, searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Space direction="vertical" className="w-full mb-8">
        <Search
          placeholder="Search models..."
          allowClear
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          className="max-w-xl"
        />
        <Space wrap>
          <Select
            placeholder="Task"
            allowClear
            onChange={(value: string | null) => setFilter(prev => ({ ...prev, task: value }))}
            options={tasks.map(task => ({ label: task, value: task }))}
          />
          <Select
            placeholder="Framework"
            allowClear
            onChange={(value: string | null) => setFilter(prev => ({ ...prev, framework: value }))}
            options={frameworks.map(framework => ({ label: framework, value: framework }))}
          />
          <Select
            placeholder="License"
            allowClear
            onChange={(value: string | null) => setFilter(prev => ({ ...prev, license: value }))}
            options={licenses.map(license => ({ label: license, value: license }))}
          />
          <Select
            placeholder="Sort by"
            allowClear
            onChange={(value: 'downloads' | 'likes' | 'updated' | null) => setFilter(prev => ({ ...prev, sortBy: value }))}
            options={[
              { label: 'Downloads', value: 'downloads' },
              { label: 'Likes', value: 'likes' },
              { label: 'Last Updated', value: 'updated' }
            ]}
          />
        </Space>
      </Space>

      <List
        grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
        dataSource={filteredModels}
        renderItem={(model: Model) => (
          <List.Item>
            <ModelCard
              model={model}
              onLike={onLike}
              onDownload={onDownload}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
