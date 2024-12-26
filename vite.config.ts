import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const config = defineConfig({
  plugins: [react()],
  root: '.',
  base: '',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,
    sourcemap: true,
    rollupOptions: {
      input: './index.html'
    }
  },
  define: {
    global: 'window',
    __DEV__: true,
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'react-native-gesture-handler': 'react-native-web/dist/modules/GestureResponder',
      'react-native-reanimated': 'react-native-reanimated/lib/reanimated2/core',
      '@react-native-community/async-storage': '@react-native-async-storage/async-storage/lib/web',
      'react-native-screens': 'react-native-web',
      'react-native-safe-area-context': 'react-native-safe-area-context/lib/module/web'
    },
    extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.tsx', '.ts', '.jsx', '.js']
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-native-web',
      '@react-navigation/native',
      '@react-navigation/drawer',
      '@react-navigation/bottom-tabs',
      'react-native-safe-area-context'
    ],
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      },
      resolveExtensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.tsx', '.ts', '.jsx', '.js']
    }
  }
});

export default config;
