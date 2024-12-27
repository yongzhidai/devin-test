'use client';

import { Result } from 'antd';

export default function Error() {
  return (
    <Result
      status="error"
      title="页面加载失败"
      subTitle="请稍后重试或联系管理员"
    />
  );
}
