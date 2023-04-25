<template>
  <header>
    <NavBar />
  </header>
  <main>
    <div class="container is-max-desktop px-2 py-4">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import NavBar from "@/components/layout/Navbar.vue";
</script>