'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const DynamicPageContentClient = dynamic(
  () => import('./DynamicPageContentClient'),
  { ssr: false }
);

interface DynamicPageContentProps {
  page: string;
}

export function DynamicPageContent({ page }: DynamicPageContentProps) {
  return <DynamicPageContentClient page={page} />;
}
