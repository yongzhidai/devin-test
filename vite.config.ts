import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
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
    process: {
      env: {}
    }
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@react-navigation/native': path.resolve(__dirname, 'node_modules/@react-navigation/native'),
      '@react-navigation/native-stack': path.resolve(__dirname, 'node_modules/@react-navigation/native-stack'),
      '@react-navigation/bottom-tabs': path.resolve(__dirname, 'node_modules/@react-navigation/bottom-tabs'),
      'react-native-safe-area-context': path.resolve(__dirname, 'node_modules/react-native-safe-area-context'),
      'react-native-screens': path.resolve(__dirname, 'node_modules/react-native-screens'),
      'react-native-reanimated': path.resolve(__dirname, 'node_modules/react-native-reanimated')
    },
    extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.tsx', '.ts', '.jsx', '.js']
  },
  optimizeDeps: {
    include: [
      'react-native-web',
      '@react-navigation/native',
      '@react-navigation/native-stack',
      '@react-navigation/bottom-tabs',
      'react-native-safe-area-context',
      'react-native-screens',
      'react-native-reanimated'
    ],
    esbuildOptions: {
      jsx: 'automatic',
      target: 'es2020'
    }
  }
});
