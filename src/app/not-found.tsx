'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const NotFoundClient = dynamic(
  () => import('@/components/business/NotFoundClient'),
  { ssr: false }
);

export default function NotFound() {
  return <NotFoundClient />;
}
