<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { en, es } from "@nuxt/ui/locale";
const { locale, setLocale } = useI18n();

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
    label: $t("navbar.skills"),
    to: "#skills",
  },
  {
    label: $t("navbar.education"),
    to: "#education",
  },
  {
    label: "CV",
    to: "/losaurojuan_cv.pdf",
    target: "_blank",
  },
]);
</script>

<template>
  <UHeader>
    <template #left>
      <span class="hidden font-bold text-nowrap md:block">
        Juan Andrés Losauro
      </span>
    </template>

    <UNavigationMenu :items="items" orientation="horizontal" />

    <template #right>
      <UColorModeButton />

      <UTooltip :text="$t('tooltip.github')">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/Talkird"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>

      <UTooltip :text="$t('tooltip.linkedin')">
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
