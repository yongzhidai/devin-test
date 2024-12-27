import React from 'react';
import { DynamicPageContent } from '@/components/business/DynamicPageContent';

export default function ManagementPage() {
  return <DynamicPageContent params={{ page: 'dashboard' }} />;
}
