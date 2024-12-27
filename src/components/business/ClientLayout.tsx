'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { MainLayout } from './MainLayout';
import { useAuthStore } from '@/store/auth';
import { Spin } from 'antd';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/login';
  const { isAuthenticated, isLoading } = useAuthStore();
  const [isHydrated, setIsHydrated] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
    setIsHydrated(true);
  }, []);

  // Handle authentication routing
  useEffect(() => {
    if (!isClient) return; // Don't run on server

    if (isHydrated && !isLoading) {
      if (!isAuthenticated && !isLoginPage) {
        router.replace('/login');
      } else if (isAuthenticated && isLoginPage) {
        router.replace('/management');
      }
    }
  }, [isLoginPage, isAuthenticated, isLoading, router, isHydrated, isClient]);

  // Show loading state during hydration
  if (!isClient || !isHydrated || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Spin size="large" />
      </div>
    );
  }

  // Render appropriate content based on authentication state
  if (isLoginPage) {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }

  if (isAuthenticated) {
    return <MainLayout>{children}</MainLayout>;
  }

  return null;
}

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
