import React from 'react';
import { DynamicPageContent } from '@/components/business/DynamicPageContent';
import { pageConfigs } from '@/store/pages';

export function generateStaticParams() {
  return Object.keys(pageConfigs).map((page) => ({
    page,
  }));
}

type Props = {
  params: { page: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

function DynamicPage({ params }: Props) {
  return <DynamicPageContent pageId={params.page} />;
}

export default DynamicPage;
