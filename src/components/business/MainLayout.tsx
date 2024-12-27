import React from 'react';
import dynamic from 'next/dynamic';

const MainLayoutClient = dynamic(
  () => import('./MainLayout.client').then(mod => mod.MainLayoutClient),
  { ssr: false }
);

export function MainLayout({ children }: { children: React.ReactNode }) {
  return <MainLayoutClient>{children}</MainLayoutClient>;
}
