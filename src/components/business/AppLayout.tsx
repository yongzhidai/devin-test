'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { MainLayout } from './MainLayout';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  if (isLoginPage) {
    return children;
  }

  return <MainLayout>{children}</MainLayout>;
}
