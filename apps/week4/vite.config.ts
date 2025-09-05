import { defineConfig, TerserOptions } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react(), isProduction && viteCompression()].filter(Boolean),

    build: {
      outDir: 'dist',
      sourcemap: !isProduction,
      minify: isProduction ? 'terser' : false,
      terserOptions: (isProduction
        ? {
            compress: {
              drop_console: true,
              drop_debugger: true,
            },
            format: {
              comments: false,
            },
          }
        : {}) as TerserOptions,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: isProduction
            ? {
                vendor: ['react', 'react-dom'],
              }
            : {},
        },
      },
    },

    resolve: {
      alias: {
        '@': '/src',
      },
    },

    server: {
      port: 3000,
    },
  };
});
