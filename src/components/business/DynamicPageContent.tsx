'use client';

import React, { Suspense } from 'react';
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
    <Suspense fallback={<div>Loading...</div>}>
      <MainLayout>
        <Result
          status={pageId ? 'info' : 'warning'}
          title={config.title}
          subTitle={config.description}
        />
      </MainLayout>
    </Suspense>
  );
}
