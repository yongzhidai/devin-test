import React, { useState, useEffect } from 'react';
import { Model, ModelFilter } from '../../../types/model';
import { Space, message, Spin } from 'antd';
import { List, Select, Search } from '../../presentation';
import { ModelCard } from '../ModelCard';
import { fetchModels } from '../../../services/api';

// Search component is imported from presentation layer

interface ModelListProps {
  onLike?: (modelId: string) => void;
  onDownload?: (modelId: string) => void;
}

export const ModelList: React.FC<ModelListProps> = ({ onLike, onDownload }) => {
  const [models, setModels] = useState<Model[]>([]);
  const [filteredModels, setFilteredModels] = useState<Model[]>([]);
  const [filter, setFilter] = useState<ModelFilter>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const tasks = Array.from(new Set(models.map(m => m.task)));
  const frameworks = Array.from(new Set(models.map(m => m.framework)));
  const licenses = Array.from(new Set(models.map(m => m.license)));

  useEffect(() => {
    const loadModels = async () => {
      setLoading(true);
      try {
        const response = await fetchModels(filter);
        if (response.error) {
          message.error(response.error);
          return;
        }
        setModels(response.data);
        
        // Apply search filter client-side
        let result = response.data;
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          result = result.filter(model =>
            model.name.toLowerCase().includes(query) ||
            model.description.toLowerCase().includes(query) ||
            model.author.toLowerCase().includes(query) ||
            model.tags.some(tag => tag.toLowerCase().includes(query))
          );
        }
        
        setFilteredModels(result);
      } catch (error) {
        message.error('Failed to load models');
      } finally {
        setLoading(false);
      }
    };

    loadModels();
  }, [filter, searchQuery]);

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

      <Spin spinning={loading}>
        <List
          grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
          dataSource={filteredModels}
          renderItem={(model: Model) => (
            <List.Item key={model.id}>
              <ModelCard
                model={model}
                onLike={onLike}
                onDownload={onDownload}
              />
            </List.Item>
          )}
        />
      </Spin>
    </div>
  );
};
