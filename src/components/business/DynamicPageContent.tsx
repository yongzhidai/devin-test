'use client';

import React from 'react';
import { MainLayout } from './MainLayout';
import { Result } from 'antd';

interface DynamicPageContentProps {
  pageId: string;
  config: {
    title: string;
    description: string;
  };
}

export function DynamicPageContent({ pageId, config }: DynamicPageContentProps) {
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
