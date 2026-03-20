<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { en, es } from "@nuxt/ui/locale";
const { locale, setLocale } = useI18n();
const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: $t("navbar.aboutme"),
    to: "#about",
  },
  {
    label: $t("navbar.projects"),
    to: "#projects",
  },
  {
    label: $t("navbar.contact"),
    to: "#contact",
  },
  {
    label: "CV",
    to: "/losaurojuan_cv.pdf",
    target: "_blank",
  },
]);
</script>

<template>
  <UHeader class="opacity-95">
    <template #left>
      <h1 class="font-bold">Juan Andrés Losauro</h1>
    </template>

    <UNavigationMenu :items="items" orientation="horizontal" />

    <template #right>
      <UColorModeButton />

      <UTooltip :text="$t('tooltip.github')">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>

      <UTooltip :text="$t('tooltip.linkedin')">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://www.linkedin.com/in/losauro-juan-6a2745299/"
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
