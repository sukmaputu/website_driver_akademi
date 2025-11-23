// vite.config.js

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Pastikan NAMA REPOSITORI SANGAT JELAS dan MENGGUNAKAN GARIS MIRING DI DEPAN dan DI BELAKANG
export default defineConfig({
  base: '/website_driver_akademi/', // Ganti jika nama repo berbeda
  
  plugins: [vue()],
});