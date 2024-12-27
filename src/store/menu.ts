import { create } from 'zustand';

export const menuItems = [
  {
    key: 'dashboard',
    label: '仪表盘',
    icon: 'DashboardOutlined',
  },
  {
    key: 'data',
    label: '数据管理',
    icon: 'DatabaseOutlined',
    children: [
      {
        key: 'analysis',
        label: '数据分析',
      },
      {
        key: 'monitor',
        label: '数据监控',
      },
    ],
  },
  {
    key: 'user',
    label: '用户管理',
    icon: 'UserOutlined',
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
    label: '系统设置',
    icon: 'SettingOutlined',
    children: [
      {
        key: 'general',
        label: '常规设置',
      },
      {
        key: 'security',
        label: '安全设置',
      },
    ],
  },
];

interface MenuState {
  selectedKeys: string[];
  openKeys: string[];
  setSelectedKeys: (keys: string[]) => void;
  setOpenKeys: (keys: string[]) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  selectedKeys: ['dashboard'],
  openKeys: ['dashboard'],
  setSelectedKeys: (keys: string[]) => set({ selectedKeys: keys }),
  setOpenKeys: (keys: string[]) => set({ openKeys: keys }),
}));
