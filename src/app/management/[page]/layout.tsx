import React from 'react';
import { MainLayout } from '@/components/business/MainLayout';

export default function ManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
