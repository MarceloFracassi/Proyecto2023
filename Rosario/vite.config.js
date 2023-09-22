import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: true, // Opcional, si deseas usar módulos CSS
  },
});
