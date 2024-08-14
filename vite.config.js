import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react', // Ensure this is correct if using emotion
    }),
  ],
  esbuild: {
    loader: {
      '.js': 'jsx',
      '.ts': 'tsx', // Add this if using TypeScript
    },
  },
});
