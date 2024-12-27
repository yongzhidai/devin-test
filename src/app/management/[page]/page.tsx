import React from 'react';
import dynamic from 'next/dynamic';

const DynamicPageContent = dynamic(
  () => import('./page.client').then(mod => mod.DynamicPageContent),
  { ssr: false }
);

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
