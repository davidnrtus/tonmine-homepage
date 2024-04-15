<script setup lang="ts">
import { META_DATA } from './constants'

useHead({
  title: META_DATA.default.title,
})

useSeoMeta(generateMetaTags('default'))
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
