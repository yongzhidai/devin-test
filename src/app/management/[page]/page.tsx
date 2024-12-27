import React from 'react';
import { DynamicPageContent } from '@/components/business/DynamicPageContent';
import { pageConfigs } from '@/store/pages';

export function generateStaticParams() {
  return Object.keys(pageConfigs).map((page) => ({
    page,
  }));
}

interface Props {
  params: {
    page: string;
  };
}

export default function DynamicPage({ params }: Props) {
  return <DynamicPageContent pageId={params.page} />;
}
