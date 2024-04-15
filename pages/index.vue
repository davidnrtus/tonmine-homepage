<script setup lang="ts">
import { useStorage } from '@vueuse/core';

// demo usage of cookie. Already in README
const cookieName = useCookie("key")
// Update cookie value
cookieName.value = "HAHA"
// Delete cookie
// cookieName.value = null
// demo usage of localstorage. Already in README
let storageName = useStorage("key", "")
// Update localstorage value
storageName.value = "HIHI"
// Delete localstorage
// storageName.value = null
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
  </div>
</template>