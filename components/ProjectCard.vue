<script setup lang="ts">
import { motion } from "motion-v";

const props = defineProps({
  badges: { type: Array<string>, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  projectUrl: { type: String, required: false },
});
</script>

<template>
  <motion.div
    :initial="{ opacity: 0, y: -20 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.5, ease: 'easeOut' }"
  >
    <UCard variant="subtle" class="h-full">
      <template #header>
        <h1 class="text-xl font-bold md:text-2xl">
          {{ props.title }}
        </h1>
      </template>

      <div class="flex flex-col gap-2">
        <img :src="props.img" :alt="props.title" />
        <h2 class="text-lg font-semibold md:text-xl">
          {{ props.subtitle }}
        </h2>
        <p>
          {{ props.description }}
        </p>
        <UButton
          v-if="props.projectUrl"
          :href="props.projectUrl"
          target="_blank"
          class="w-fit"
          variant="subtle"
          icon="i-lucide-github"
        >
          GitHub Repo
        </UButton>
        <UButton
          v-else-if="!props.projectUrl"
          class="w-fit"
          variant="subtle"
          color="neutral"
          icon="i-lucide-x"
        >
          {{ $t("projects.private") }}
        </UButton>
      </div>

      <template #footer>
        <div class="flex gap-2">
          <UBadge
            class="text-nowrap"
            color="neutral"
            variant="outline"
            v-for="badge in badges"
            :key="badge"
          >
            {{ badge }}
          </UBadge>
        </div>
      </template>
    </UCard>
  </motion.div>
</template>
