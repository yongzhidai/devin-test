'use client';

import React from 'react';
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { usePathname } from 'next/navigation';
import { MainLayout } from './MainLayout';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <ConfigProvider locale={zhCN}>
      {isLoginPage ? children : <MainLayout>{children}</MainLayout>}
    </ConfigProvider>
  );
}
