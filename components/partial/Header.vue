<script setup lang="ts">
import type { Select } from '~/types'

const menu = ref<Select[]>([
  { label: 'About', value: 'index' },
  { label: 'Contact', value: 'index' },
])
</script>

<template>
  <header class="h-20 fixed top-6 left-1/2 -translate-x-1/2 container bg-white/5 backdrop-blur-[140px] rounded-[36px]">
    <div class="px-4 md:px-6 h-full flex items-center">
      <img src="/logo.png" class="w-auto h-14">
      <ul class="flex-1 flex items-center justify-end gap-6">
        <li
          v-for="(nav, i) in menu"
          :key="i" class="px-3 hover:text-white"
        >
          <NuxtLink :to="{ name: nav.value }">
            {{ nav.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header {
  border: inset 2px rgba(248, 248, 248, 0.25);
}
</style>
