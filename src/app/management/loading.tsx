'use client';

import React from 'react';
import { Spin } from 'antd';

export default function Loading() {
  return (
    <div className="min-h-[280px] flex items-center justify-center">
      <Spin size="large" tip="加载中..." />
    </div>
  );
}
