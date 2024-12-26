import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#0969da',
    colorSuccess: '#1a7f37',
    colorWarning: '#d4a72c',
    colorError: '#cf222e',
    colorInfo: '#0969da',
    borderRadius: 8,
    wireframe: false,
  },
  components: {
    Card: {
      paddingLG: 24,
      boxShadowTertiary: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    },
    Button: {
      paddingContentHorizontal: 16,
      controlHeight: 36,
    },
    Input: {
      controlHeight: 36,
      paddingLG: 12,
    },
    Select: {
      controlHeight: 36,
      paddingLG: 12,
    },
  },
};

export default theme;
