'use client';

import React from 'react';
import { Result, Button } from 'antd';

interface ErrorClientProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorClient({ error, reset }: ErrorClientProps) {
  return (
    <Result
      status="error"
      title="发生错误"
      subTitle={error.message || '抱歉，系统出现了一些问题。'}
      extra={
        <Button type="primary" onClick={reset}>
          重试
        </Button>
      }
    />
  );
}
