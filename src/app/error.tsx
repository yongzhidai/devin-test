'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const ErrorClient = dynamic(
  () => import('@/components/business/ErrorClient'),
  { ssr: false }
);

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorClient error={error} reset={reset} />;
}
