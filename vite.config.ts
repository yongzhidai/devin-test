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
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    },
    extensions: ['.web.tsx', '.tsx', '.web.ts', '.ts', '.web.js', '.js']
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-native-web']
  }
});

export default config;
