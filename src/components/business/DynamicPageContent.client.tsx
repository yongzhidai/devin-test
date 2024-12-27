'use client';

import React from 'react';
import { Result } from 'antd';
import { pageConfigs } from '@/store/pages';

interface DynamicPageContentProps {
  params: {
    page: string;
  };
}

export function DynamicPageContentClient({ params }: DynamicPageContentProps) {
  const config = pageConfigs[params.page] || {
    title: '未找到页面',
    description: '请从左侧菜单选择正确的页面',
  };

  return (
    <Result
      status={params.page in pageConfigs ? 'info' : 'warning'}
      title={config.title}
      subTitle={config.description}
    />
  );
}
