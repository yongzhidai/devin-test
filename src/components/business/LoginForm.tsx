'use client';

import React, { useState } from 'react';
import { Form, Input, Button, message, Card, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import { authService } from '@/services/auth';

interface LoginFormData {
  username: string;
  password: string;
}

export function LoginForm() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: LoginFormData) => {
    setLoading(true);
    try {
      const response = await authService.login(values);
      if (response.success) {
        await login(values.username, values.password);
        message.success('登录成功');
        router.push('/management');
      } else {
        message.error(response.error || '登录失败');
      }
    } catch (error) {
      message.error('登录过程中发生错误');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <Space direction="vertical" size="large" className="w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">管理系统</h1>
          <p className="text-gray-500">请登录您的账号</p>
        </div>
        
        <Form
          name="login"
          onFinish={onFinish}
          className="w-full"
          size="large"
          layout="vertical"
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: '请输入用户名' },
              { min: 3, message: '用户名至少3个字符' }
            ]}
          >
            <Input 
              prefix={<UserOutlined className="text-gray-400" />}
              placeholder="用户名"
            />
          </Form.Item>
          
          <Form.Item
            name="password"
            rules={[
              { required: true, message: '请输入密码' },
              { min: 6, message: '密码至少6个字符' }
            ]}
          >
            <Input.Password 
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item className="mb-0">
            <Button 
              type="primary" 
              htmlType="submit" 
              block
              loading={loading}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Card>
  );
}
