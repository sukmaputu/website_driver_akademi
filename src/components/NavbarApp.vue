<!-- src/components/NavbarApp.vue -->
<template>
  <nav class="bg-gray-800 p-4 shadow-lg sticky top-0 z-10">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Bagian Kiri: Nama Website/Logo -->
      <router-link to="/" class="text-white text-2xl font-bold tracking-wider hover:text-yellow-400 transition duration-300">
        Anargya
      </router-link>

      <!-- Bagian Kanan: Menu Navigasi -->
      <div>
        <router-link 
          to="/" 
          class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
        >
          Home
        </router-link>
        <router-link 
          to="/about" 
          class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
        >
          About
        </router-link>
        <a 
          href="#" 
          class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
        >
          Help
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Tidak perlu script jika hanya template statis
</script>