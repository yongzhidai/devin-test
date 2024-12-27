'use client';

import React from 'react';
import { MainLayout } from '@/components/business/MainLayout';
import { Result } from 'antd';

export default function ManagementPage() {
  return (
    <MainLayout>
      <Result
        status="success"
        title="欢迎使用管理系统"
        subTitle="请从左侧菜单选择要访问的功能"
      />
    </MainLayout>
  );
}
