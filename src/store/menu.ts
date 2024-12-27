import { create } from 'zustand';

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
