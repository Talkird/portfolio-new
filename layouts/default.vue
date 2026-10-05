<script setup lang="ts">
// hreflang alternates for /, /es
useHead(useLocaleHead());
</script>

<template>
  <UApp class="flex min-h-screen flex-col">
    <Navbar />

    <UMain class="flex flex-1 flex-col">
      <NuxtPage />
    </UMain>

    <Footer />
  </UApp>
</template>
