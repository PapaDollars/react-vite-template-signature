import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { signaturePlugin } from './vite-plugin-signature';

export default defineConfig({
  plugins: [
    react(),
    signaturePlugin()
  ],
  define: {
    __DEVELOPER__: JSON.stringify('24PapaDollar'),
    __CONTACT__: JSON.stringify('groupemergents@gmail.com'),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          // Signature CSS
          /*
            🚀 Styled by 24PapaDollar
            📧 groupemergents@gmail.com
            🌐 https://groupemergent.vercel.app
          */
        `
      }
    }
  }
});