import React from 'react';
import { DynamicPageContentClient } from './DynamicPageContent.client';

interface DynamicPageContentProps {
  params: {
    page: string;
  };
}

export function DynamicPageContent({ params }: DynamicPageContentProps) {
  return <DynamicPageContentClient params={params} />;
}
