'use client';

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
  return <DynamicPageContent pageId={params.page} />;
}
