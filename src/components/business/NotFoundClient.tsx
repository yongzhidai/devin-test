'use client';

import React from 'react';
import { Result, Button } from 'antd';
import Link from 'next/link';

export default function NotFoundClient() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在。"
      extra={
        <Link href="/management">
          <Button type="primary">返回首页</Button>
        </Link>
      }
    />
  );
}
