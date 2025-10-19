<script setup lang="ts">
import ToggleTheme from "@/features/theme/components/ToggleTheme.vue";
</script>

<template>
  <header class="bg-white shadow-sm">
    <div class="flex items-center justify-between py-6 px-4 w-full container">
      <h1>Where in the world?</h1>
      <ToggleTheme />
    </div>
  </header>
  <main class="container my-8 px-4">
    <RouterView />
  </main>
</template>
