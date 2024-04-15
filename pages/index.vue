<script setup lang="ts">
import { useStorage } from '@vueuse/core'

// demo usage of cookie. Already in README
const cookieName = useCookie('key')
// Update cookie value
cookieName.value = 'HAHA'

// demo usage of localstorage. Already in README
const storageName = useStorage('key', '')
storageName.value = 'HIHI'
</script>

<template>
  <div>
    Home page
    <div>
      Cookie value: {{ cookieName }}
    </div>
    <div>
      localstorage value: {{ storageName }}
    </div>

    <div class="flex items-center gap-3">
      icon usage:
      <NuxtIcon name="close" class="text-red-600" />
    </div>
  </div>
</template>
