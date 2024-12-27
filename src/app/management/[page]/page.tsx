import React from 'react';
import { DynamicPageContent } from '@/components/business/DynamicPageContent';
import { generateStaticParams } from './static-params';

export { generateStaticParams };

export default function DynamicPage({
  params,
}: {
  params: { page: string };
}) {
  return <DynamicPageContent page={params.page} />;
}
