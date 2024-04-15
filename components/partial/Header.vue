<script setup lang="ts">
import type { Select } from '~/types'

const route = useRoute()

const currentRouteName = computed(() => route.name)

const menu = ref<Select[]>([
  { label: 'About', value: 'index' },
  { label: 'Contact', value: 'index' },
])
</script>

<template>
  <header class="h-16 flex items-center border-b border-gray-400">
    <div class="container flex items-center text-gray-200">
      <NuxtLink to="/">
        <h2>Logo</h2>
      </NuxtLink>
      <ul class="flex-1 flex items-center justify-end gap-6">
        <li
          v-for="(nav, i) in menu"
          :key="i" class="px-3 hover:text-white"
          :class="currentRouteName === nav.value ? 'underline' : ''"
        >
          <NuxtLink :to="{ name: nav.value }">
            {{ nav.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
