import React from 'react';
import { Model } from '../../../types/model';
import { Space, Tooltip } from 'antd';
import { Card, Tag, Button } from '../../presentation';
import { DownloadOutlined, LikeOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { formatNumber, formatRelativeTime } from '../../../utils/format';

interface ModelCardProps {
  model: Model;
  onLike?: (modelId: string) => void;
  onDownload?: (modelId: string) => void;
}

export const ModelCard: React.FC<ModelCardProps> = ({ model, onLike, onDownload }) => {
  const handleLike = () => {
    onLike?.(model.id);
  };

  const handleDownload = () => {
    onDownload?.(model.id);
  };

  return (
    <Card
      className="w-full max-w-2xl hover:shadow-lg transition-shadow"
      title={model.name}
      extra={
        <Space>
          <Tag color="blue">{model.framework}</Tag>
          <Tag color="green">{model.task}</Tag>
        </Space>
      }
    >
      <div className="flex flex-col gap-4">
        <p className="text-gray-600">{model.description}</p>
        
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>By {model.author}</span>
          <span>•</span>
          <Tooltip title={new Date(model.lastUpdated).toLocaleString()}>
            <span className="flex items-center gap-1">
              <ClockCircleOutlined /> {formatRelativeTime(model.lastUpdated)}
            </span>
          </Tooltip>
        </div>

        <div className="flex flex-wrap gap-2">
          {model.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <Space>
            <Button 
              icon={<LikeOutlined />} 
              onClick={handleLike}
            >
              {formatNumber(model.likes)}
            </Button>
            <Button 
              icon={<DownloadOutlined />} 
              onClick={handleDownload}
            >
              {formatNumber(model.downloads)}
            </Button>
          </Space>
          <Tag color="orange">{model.license}</Tag>
        </div>
      </div>
    </Card>
  );
};
