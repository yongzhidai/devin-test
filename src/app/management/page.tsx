import React from 'react';
import dynamic from 'next/dynamic';

const DashboardContent = dynamic(
  () => import('./page.client').then(mod => mod.DashboardContent),
  { ssr: false }
);

export default function ManagementPage() {
  return <DashboardContent />;
}
