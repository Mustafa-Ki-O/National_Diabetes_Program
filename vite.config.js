import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB بدلاً من 2MB
      },
      manifest: {
        name: 'National Diabetes Program',
        short_name: 'Diabetes Program',
        description: 'A Progressive Web App for Diabetes Management',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        start_url: '/',
        display: 'standalone',
        icons: [
          {
            src: '/public/icons/ndblogo2.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/public/icons/ndblogo2.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  base: '/National_Diabetes_Program/',
})
