import React from 'react';
import { DynamicPageContent } from '@/components/business/DynamicPageContent';

export function generateStaticParams() {
  return [
    { page: 'analysis' },
    { page: 'monitor' },
    { page: 'user-list' },
    { page: 'user-groups' },
    { page: 'general' },
    { page: 'security' },
  ];
}

export default function DynamicPage({
  params,
}: {
  params: { page: string };
}) {
  return <DynamicPageContent page={params.page} />;
}
