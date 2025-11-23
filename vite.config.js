// vite.config.js

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  // Ubah base: dari '/nama-repo/' menjadi './' 
  // './' memastikan semua path asset relatif dari index.html
  base: './', 
  
  plugins: [vue()],
});