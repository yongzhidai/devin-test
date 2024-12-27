import React from 'react';
import { DynamicPageContent } from '@/components/business/DynamicPageContent';
import { pageConfigs } from '@/store/pages';

export function generateStaticParams() {
  return Object.keys(pageConfigs).map((page) => ({
    page,
  }));
}

export default function DynamicPage({
  params,
}: {
  params: { page: string };
}) {
  const config = pageConfigs[params.page] || {
    title: '未找到页面',
    description: '请从左侧菜单选择正确的页面',
  };

  return <DynamicPageContent pageId={params.page} config={config} />;
}
