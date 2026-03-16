<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
import { motion } from "motion-v";
const toast = useToast();

const sentimentBadges = [
  "Electron",
  "React",
  "Selenium",
  "Tailwind",
  "Firebase",
];
const recipediaBadges = [
  "Expo",
  "React Native",
  "Spring Boot",
  "tailwindcss",
  "PostgreSQL",
];

const links = ref<ButtonProps[]>([
  {
    label: "GitHub",
    to: "https://github.com/Talkird",
    class: "rounded-full px-5 py-2.5",
    color: "primary",
    variant: "subtle",
    target: "_blank",
    trailingIcon: "i-lucide-github",
  },
  {
    label: "losaurojuan@gmail.com",
    class: "rounded-full px-5 py-2.5",
    color: "neutral",
    variant: "soft",
    target: "_blank",
    trailingIcon: "i-lucide-mail",

    onClick: () => {
      toast.add({
        title: $t("toast.clipboard"),
        icon: "i-lucide-clipboard-copy",
        duration: 2000,
      });
      navigator.clipboard.writeText("losaurojuan@gmail.com");
    },
  },
]);
</script>

<template>
  <div
    id="about"
    class="mx-auto min-h-screen max-w-xl scroll-mt-24 md:max-w-5xl"
  >
    <h1
      class="text-primary my-6 text-center text-3xl font-bold underline underline-offset-8 md:my-12 md:text-5xl"
    >
      {{ $t("navbar.aboutme") }}
    </h1>
    <motion.div
      :initial="{ opacity: 0.5, y: -10 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5, ease: 'easeOut' }"
    >
      <UPageHero
        :title="$t('about.headline')"
        :description="$t('about.description')"
        :links="links"
      />
    </motion.div>
  </div>

  <USeparator />

  <div
    id="projects"
    class="mx-auto min-h-screen max-w-md scroll-mt-24 md:max-w-3xl"
  >
    <h1
      class="text-primary my-6 text-center text-3xl font-bold underline underline-offset-8 md:my-12 md:text-5xl"
    >
      {{ $t("navbar.projects") }}
    </h1>
    <motion.div
      :initial="{ opacity: 0.5, y: -10 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5, ease: 'easeOut' }"
      class="mx-auto grid max-w-xl grid-cols-1 gap-6 md:max-w-3xl md:grid-cols-2"
    >
      <motion.div
        :while-hover="{ scale: 1.02 }"
        :transition="{ duration: 0.15 }"
      >
        <UCard variant="subtle">
          <template #header>
            <h1 class="text-primary text-xl font-bold md:text-2xl">
              {{ $t("projects.sentiment.title") }}
            </h1>
          </template>

          <div class="flex flex-col gap-2">
            <img
              src="https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
              alt=""
            />
            <h2 class="text-lg font-bold">
              {{ $t("projects.sentiment.subtitle") }}
            </h2>
            <p>{{ $t("projects.sentiment.description") }}</p>
            <UButton class="w-fit" variant="subtle" icon="i-lucide-github">
              GitHub
            </UButton>
          </div>

          <template #footer>
            <div class="flex gap-2">
              <UBadge
                variant="soft"
                v-for="badge in sentimentBadges"
                :key="badge"
              >
                {{ badge }}
              </UBadge>
            </div>
          </template>
        </UCard>
      </motion.div>
    </motion.div>
  </div>
</template>
