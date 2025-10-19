<script setup lang="ts">
import { IconMoon } from "@tabler/icons-vue";
import { useTheme } from "../composables/useTheme";
const { toggleTheme } = useTheme();
</script>

<template>
  <button @click="toggleTheme" class="flex items-center gap-1">
    <IconMoon />
    Dark Mode
  </button>
</template>
