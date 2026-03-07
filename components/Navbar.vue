<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { en, es } from "@nuxt/ui/locale";
const { locale, setLocale } = useI18n();
const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: $t("about_me"),
    to: "/docs/getting-started",
    active: route.path.startsWith("/docs/getting-started"),
  },
  {
    label: $t("projects"),
    to: "/docs/components",
    active: route.path.startsWith("/docs/components"),
  },
  {
    label: $t("contact"),
    to: "https://github.com/nuxt/ui/releases",
  },
  {
    label: "CV",
    to: "/cv.pdf",
    target: "_blank",
  },
]);
</script>

<template>
  <UHeader>
    <template #left>
      <h1 class="font-bold">Juan Losauro</h1>
    </template>

    <UNavigationMenu :items="items" orientation="horizontal" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Check my projects out on GitHub">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>

      <UTooltip text="Follow me on LinkedIn">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://www.linkedin.com/in/juanlosauro/"
          target="_blank"
          icon="i-simple-icons-linkedin"
          aria-label="LinkedIn"
        />
      </UTooltip>

      <ULocaleSelect
        :model-value="locale"
        :locales="[en, es]"
        @update:model-value="setLocale($event)"
      />
    </template>
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
