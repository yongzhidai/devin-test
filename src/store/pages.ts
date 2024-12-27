import { create } from 'zustand';

export interface PageConfig {
  title: string;
  description: string;
}

export const pageConfigs: Record<string, PageConfig> = {
  analysis: {
    title: '分析页',
    description: '这里是数据分析页面',
  },
  monitor: {
    title: '监控页',
    description: '这里是系统监控页面',
  },
  'user-list': {
    title: '用户列表',
    description: '这里是用户管理列表页面',
  },
  'user-groups': {
    title: '用户组',
    description: '这里是用户组管理页面',
  },
  general: {
    title: '基本设置',
    description: '这里是系统基本设置页面',
  },
  security: {
    title: '安全设置',
    description: '这里是系统安全设置页面',
  },
};

interface PageStore {
  currentPage: string | null;
  pageConfig: PageConfig | null;
  setCurrentPage: (page: string) => void;
}

export const usePageStore = create<PageStore>((set) => ({
  currentPage: null,
  pageConfig: null,
  setCurrentPage: (page) => {
    set({
      currentPage: page,
      pageConfig: pageConfigs[page] || {
        title: '未找到页面',
        description: '请从左侧菜单选择正确的页面',
      },
    });
  },
}));
