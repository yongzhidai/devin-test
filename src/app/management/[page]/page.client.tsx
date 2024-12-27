'use client';

import React from 'react';
import { Result } from 'antd';
import { pageConfigs } from '@/store/pages';

export function DynamicPageContent({ page }: { page: string }) {
  const config = pageConfigs[page] || {
    title: '未找到页面',
    description: '请从左侧菜单选择正确的页面',
  };

  return (
    <Result
      status="info"
      title={config.title}
      subTitle={config.description}
    />
  );
}
