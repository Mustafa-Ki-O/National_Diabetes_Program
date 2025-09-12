import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, 
      },

      manifest: {
        name: 'National Diabetes Program',
        short_name: 'Diabetes Program',
        description: 'A Progressive Web App for Diabetes Management',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        start_url: '/National_Diabetes_Program/',
        display: 'standalone',
        icons: [
          {
            src: './icons/ndblogo2.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './icons/ndblogo2.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      devOptions:{
        enabled:true,
        suppressWarnings:true,
        // type:module
      },
    }),
  ],
  base: '/National_Diabetes_Program/',
})
