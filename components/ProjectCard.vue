<script setup lang="ts">
import { motion } from "motion-v";

const props = defineProps<{
  badges: string[];
  title: string;
  subtitle: string;
  description: string;
  img: string;
  liveUrl?: string;
}>();
</script>

<template>
  <motion.div
    :initial="{ opacity: 0, y: 20 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true }"
    :transition="{ duration: 0.5, ease: 'easeOut' }"
  >
    <UCard variant="subtle" class="h-full">
      <template #header>
        <h3 class="text-xl font-bold md:text-2xl">
          {{ props.title }}
        </h3>
      </template>

      <div class="flex flex-col gap-2">
        <NuxtImg
          :src="props.img"
          :alt="props.title"
          format="webp"
          loading="lazy"
          sizes="100vw md:384px"
          width="768"
          height="432"
          class="aspect-video w-full rounded-md object-cover object-top"
        />
        <h4 class="text-lg font-semibold md:text-xl">
          {{ props.subtitle }}
        </h4>
        <p>
          {{ props.description }}
        </p>
        <UButton
          v-if="props.liveUrl"
          :to="props.liveUrl"
          target="_blank"
          class="w-fit"
          variant="subtle"
          trailing-icon="i-lucide-external-link"
        >
          {{ $t("projects.live") }}
        </UButton>
        <UBadge
          v-else
          class="w-fit"
          color="neutral"
          variant="subtle"
          icon="i-lucide-lock"
        >
          {{ $t("projects.private") }}
        </UBadge>
      </div>

      <template #footer>
        <div class="flex flex-wrap gap-2">
          <UBadge
            class="font-mono text-nowrap"
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
