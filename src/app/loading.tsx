'use client';

import React from 'react';
import { Spin } from 'antd';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Spin size="large" tip="加载中..." />
    </div>
  );
}
