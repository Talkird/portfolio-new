<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
import { motion } from "motion-v";
const { t } = useI18n();

// OG meta is only emitted during SSR; calling it on the client (e.g. after HMR) throws in dev
if (import.meta.server) {
  defineOgImageComponent("NuxtSeo", {
    title: "Juan Andrés Losauro",
    description: t("about.headline"),
    theme: "#615fff",
    colorMode: "dark",
  });
}

const links = computed<ButtonProps[]>(() => [
  {
    label: t("about.cv"),
    to: "/losaurojuan_cv.pdf",
    download: "Juan_Losauro_CV.pdf",
    external: true,
    class: "rounded-full px-5 py-2.5",
    color: "primary",
    variant: "subtle",
    trailingIcon: "i-lucide-download",
  },
  {
    label: "losaurojuan@gmail.com",
    class: "rounded-full px-5 py-2.5 cursor-pointer",
    color: "neutral",
    variant: "soft",
    target: "_blank",
    to: "mailto:losaurojuan@gmail.com",
    trailingIcon: "i-lucide-mail",
  },
]);

const education = computed(() => [
  {
    date: t("education.engineering.date"),
    title: t("education.engineering.title"),
    description: t("education.engineering.description"),
    icon: "i-lucide-graduation-cap",
  },
  {
    date: t("education.analyst.date"),
    title: t("education.analyst.title"),
    description: t("education.analyst.description"),
    icon: "i-lucide-award",
  },
]);

const skillGroups = computed(() => [
  {
    title: t("skills.technologies"),
    icon: "i-lucide-code",
    items: [
      "Java (Spring Boot)",
      "Python",
      "JavaScript/TypeScript",
      "React",
      "React Native",
      "Vue",
      "NuxtJS",
      "HTML",
      "CSS",
      "TailwindCSS",
    ],
  },
  {
    title: t("skills.databases"),
    icon: "i-lucide-database",
    items: ["PostgreSQL", "SQL Server", "MongoDB"],
  },
  {
    title: t("skills.tools"),
    icon: "i-lucide-wrench",
    items: ["Git", "GitHub", "Terraform", "Linux", t("skills.agile")],
  },
  {
    title: t("skills.languages"),
    icon: "i-lucide-languages",
    items: [t("skills.english"), t("skills.spanish")],
    plain: true,
  },
]);
</script>

<template>
  <div id="about" class="mx-auto max-w-xl scroll-mt-24 md:max-w-5xl">
    <motion.div
      :initial="{ y: 10 }"
      :animate="{ y: 0 }"
      :transition="{ duration: 0.5, ease: 'easeOut' }"
    >
      <UPageHero
        title="Juan Andrés Losauro"
        :links="links"
        :ui="{ container: 'py-16 sm:py-20 lg:py-24' }"
      >
        <template #description>
          <p class="text-highlighted text-xl font-semibold sm:text-2xl">
            {{ $t("about.headline") }}
          </p>
          <p class="mt-4">
            {{ $t("about.description") }}
          </p>
        </template>
      </UPageHero>
    </motion.div>
  </div>

  <USeparator />

  <div id="projects" class="mx-auto mb-12 max-w-md scroll-mt-24 md:max-w-3xl">
    <h2
      class="text-primary my-14 text-center text-3xl font-bold underline underline-offset-8 md:my-12 md:text-5xl"
    >
      {{ $t("navbar.projects") }}
    </h2>

    <div
      class="grid max-w-xl grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2 md:gap-6 lg:grid-cols-2"
    >
      <ProjectCard
        :title="$t('projects.alertafuego.title')"
        :subtitle="$t('projects.alertafuego.subtitle')"
        :description="$t('projects.alertafuego.description')"
        :badges="['NuxtJS', 'FastAPI', 'PostGIS']"
        img="/projects/alertafuego.png"
        live-url="https://d16r41ufew6h3m.cloudfront.net/"
      />

      <ProjectCard
        :title="$t('projects.sentiment.title')"
        :subtitle="$t('projects.sentiment.subtitle')"
        :description="$t('projects.sentiment.description')"
        :badges="['React', 'Electron', 'Selenium', 'Firebase']"
        img="/projects/sentiment.png"
      />
    </div>
  </div>

  <USeparator />

  <div id="skills" class="mx-auto mb-12 max-w-md scroll-mt-24 md:max-w-3xl">
    <h2
      class="text-primary my-14 text-center text-3xl font-bold underline underline-offset-8 md:my-12 md:text-5xl"
    >
      {{ $t("navbar.skills") }}
    </h2>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <UCard v-for="group in skillGroups" :key="group.icon" variant="subtle">
        <h3 class="mb-3 flex items-center gap-2 text-lg font-semibold">
          <UIcon :name="group.icon" class="text-primary" />
          {{ group.title }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="item in group.items"
            :key="item"
            :class="{ 'font-mono': !group.plain }"
            color="neutral"
            variant="outline"
          >
            {{ item }}
          </UBadge>
        </div>
      </UCard>
    </div>
  </div>

  <USeparator />

  <div id="education" class="mx-auto mb-12 max-w-md scroll-mt-24 md:max-w-3xl">
    <h2
      class="text-primary my-14 text-center text-3xl font-bold underline underline-offset-8 md:my-12 md:text-5xl"
    >
      {{ $t("navbar.education") }}
    </h2>

    <UCard variant="subtle">
      <UTimeline
        :items="education"
        :default-value="education.length - 1"
        :ui="{ date: 'text-muted' }"
      />
    </UCard>
  </div>
</template>
