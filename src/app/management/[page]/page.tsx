import React from 'react';
import { DynamicPageWrapper } from '@/components/business/DynamicPageWrapper';
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
  return <DynamicPageWrapper pageId={params.page} />;
}
