'use client';

import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/reset.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';

const { Header, Sider, Content } = Layout;

interface MenuItem {
  key: string;
  icon?: React.ReactNode;
  label: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: '仪表盘',
    children: [
      {
        key: 'analysis',
        label: '分析页',
      },
      {
        key: 'monitor',
        label: '监控页',
      },
    ],
  },
  {
    key: 'user',
    icon: <UserOutlined />,
    label: '用户管理',
    children: [
      {
        key: 'user-list',
        label: '用户列表',
      },
      {
        key: 'user-groups',
        label: '用户组',
      },
    ],
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: '系统设置',
    children: [
      {
        key: 'general',
        label: '基本设置',
      },
      {
        key: 'security',
        label: '安全设置',
      },
    ],
  },
];

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const { username, logout } = useAuthStore();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === 'dashboard') {
      router.push('/management');
    } else {
      router.push(`/management/${key}`);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="p-4 h-16 flex items-center justify-center bg-white/10">
          <h1 className="text-white text-lg font-bold truncate">
            {collapsed ? '管理' : '管理系统'}
          </h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header className="bg-white px-4 flex justify-between items-center">
          <button
            onClick={toggleCollapsed}
            className="text-lg hover:text-blue-500 transition-colors"
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
          <div className="flex items-center gap-4">
            <span>欢迎, {username}</span>
            <button
              onClick={() => {
                logout();
                router.push('/login');
              }}
              className="text-red-500 hover:text-red-600 transition-colors"
            >
              退出
            </button>
          </div>
        </Header>
        <Content className="m-6 p-6 bg-white rounded-lg min-h-[280px]">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
