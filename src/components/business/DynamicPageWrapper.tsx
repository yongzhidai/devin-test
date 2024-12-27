'use client';

import React from 'react';
import { DynamicPageContent } from './DynamicPageContent';

interface DynamicPageWrapperProps {
  pageId: string;
}

export function DynamicPageWrapper({ pageId }: DynamicPageWrapperProps) {
  return <DynamicPageContent pageId={pageId} />;
}
