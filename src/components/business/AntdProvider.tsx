'use client';

import React from 'react';
import { ConfigProvider, theme, App } from 'antd';
import zhCN from 'antd/locale/zh_CN';

export function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1677ff',
        },
        components: {
          Layout: {
            bodyBg: '#ffffff',
          },
        },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
}
