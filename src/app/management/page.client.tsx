'use client';

import React from 'react';
import { Result } from 'antd';

export function DashboardContent() {
  return (
    <Result
      status="success"
      title="欢迎使用管理系统"
      subTitle="请从左侧菜单选择要访问的功能"
    />
  );
}
