import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages( hwan0309.github.io/profile/ ) 배포 기준 base path
export default defineConfig({
  base: '/profile/',
  plugins: [react()],
});
