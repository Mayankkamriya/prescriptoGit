import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  css: {
    postcss: './postcss.config.js',
  },

  server:{port:5174},

  build: {
    rollupOptions: {
      external: ['axios'], // Explicitly mark axios as external
    },
  },

})



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
