'use client';

import React from 'react';
import { MainLayout } from './MainLayout';
import { Result } from 'antd';
import { pageConfigs } from '@/store/pages';

interface DynamicPageContentProps {
  pageId: string;
}

export function DynamicPageContent({ pageId }: DynamicPageContentProps) {
  const config = pageConfigs[pageId] || {
    title: '未找到页面',
    description: '请从左侧菜单选择正确的页面',
  };

  return (
    <MainLayout>
      <Result
        status={pageId ? 'info' : 'warning'}
        title={config.title}
        subTitle={config.description}
      />
    </MainLayout>
  );
}
