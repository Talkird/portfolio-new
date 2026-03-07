<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
  <motion.div
    :initial="{ y: -50, opacity: 0 }"
    :animate="{ y: 0, opacity: 1 }"
    :transition="{ duration: 0.5 }"
    class="flex h-screen items-center justify-center"
  >
    <h1 class="max-w-3xl text-center text-3xl font-bold opacity-80 md:text-5xl">
      {{ $t("greeting1") }}
      <span class="text-primary-500">Juan Losauro</span>, {{ $t("greeting2") }}
    </h1>
  </motion.div>
</template>
