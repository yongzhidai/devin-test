import React, { useEffect } from 'react';
import { Model, ModelFilter } from '../../../types/model';
import { Space, Spin } from 'antd';
import { List, Select, Search } from '../../presentation';
import { ModelCard } from '../ModelCard';
import { useModelsStore } from '../../../store/models';

// Search component is imported from presentation layer

interface ModelListProps {
  onLike?: (modelId: string) => void;
  onDownload?: (modelId: string) => void;
}

export const ModelList: React.FC<ModelListProps> = ({ onLike, onDownload }) => {
  const {
    models,
    filteredModels,
    loading,
    filter,
    searchQuery,
    setFilter,
    setSearchQuery,
    fetchModels,
    likeModel,
    downloadModel
  } = useModelsStore();

  const tasks = Array.from(new Set(models.map(m => m.task)));
  const frameworks = Array.from(new Set(models.map(m => m.framework)));
  const licenses = Array.from(new Set(models.map(m => m.license)));

  useEffect(() => {
    fetchModels();
  }, [fetchModels]);

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
            onChange={(value: string | null) => setFilter((prev: ModelFilter) => ({ ...prev, task: value }))}
            options={tasks.map(task => ({ label: task, value: task }))}
          />
          <Select
            placeholder="Framework"
            allowClear
            onChange={(value: string | null) => setFilter((prev: ModelFilter) => ({ ...prev, framework: value }))}
            options={frameworks.map(framework => ({ label: framework, value: framework }))}
          />
          <Select
            placeholder="License"
            allowClear
            onChange={(value: string | null) => setFilter((prev: ModelFilter) => ({ ...prev, license: value }))}
            options={licenses.map(license => ({ label: license, value: license }))}
          />
          <Select
            placeholder="Sort by"
            allowClear
            onChange={(value: 'downloads' | 'likes' | 'updated' | null) => setFilter((prev: ModelFilter) => ({ ...prev, sortBy: value }))}
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
