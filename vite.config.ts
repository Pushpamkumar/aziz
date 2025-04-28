import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/aziz/', // Replace <your-repository-name> with 'aziz'
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
