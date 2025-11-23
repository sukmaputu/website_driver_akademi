<script setup>
import NavbarApp from '../components/NavbarApp.vue';
import FooterApp from '../components/FooterApp.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavbarApp />

    <main class="flex-grow">
      <slot /> 
    </main>

    <FooterApp />
  </div>
</template>

<style scoped>
/* Optional: styling khusus layout di sini */
</style>