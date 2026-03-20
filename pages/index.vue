<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
import { motion } from "motion-v";
const toast = useToast();

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
    class: "rounded-full px-5 py-2.5 cursor-pointer",
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

  <div id="projects" class="mx-auto mb-12 max-w-md scroll-mt-24 md:max-w-3xl">
    <h1
      class="text-primary my-14 text-center text-3xl font-bold underline underline-offset-8 md:my-12 md:text-5xl"
    >
      {{ $t("navbar.projects") }}
    </h1>

    <div
      class="mx-auto grid max-w-xl grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2 md:gap-6 lg:grid-cols-2"
    >
      <ProjectCard
        :title="$t('projects.sentiment.title')"
        :subtitle="$t('projects.sentiment.subtitle')"
        :description="$t('projects.sentiment.description')"
        :badges="['React', 'Electron', 'Selenium', 'Firebase']"
        img="/projects/sentiment.png"
        project-url="https://github.com/Talkird/sentiment-client"
      />

      <ProjectCard
        :title="$t('projects.recipedia.title')"
        :subtitle="$t('projects.recipedia.subtitle')"
        :description="$t('projects.recipedia.description')"
        :badges="['Expo', 'React Native', 'Spring Boot', 'PostgreSQL']"
        img="/projects/recipedia.png"
        project-url="https://github.com/Talkird/recipeapp-frontend"
      />
    </div>
  </div>

  <USeparator />

  <div id="contact" class="mx-auto mb-12 max-w-md scroll-mt-24 md:max-w-3xl">
    <h1
      class="text-primary my-14 text-center text-3xl font-bold underline underline-offset-8 md:my-12 md:text-5xl"
    >
      {{ $t("navbar.contact") }}
    </h1>
  </div>
</template>
