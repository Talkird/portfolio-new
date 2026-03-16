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
    target: "_blank",
    trailingIcon: "i-lucide-github",
  },
  {
    label: "losaurojuan@gmail.com",
    class: "rounded-full px-5 py-2.5",
    color: "neutral",
    variant: "subtle",
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
  <div class="mx-auto max-w-xl md:max-w-3xl">
    <h1
      class="text-primary my-6 text-center text-3xl font-bold underline underline-offset-8 md:my-12 md:text-5xl"
    >
      {{ $t("navbar.aboutme") }}
    </h1>
    <motion.div
      id="about"
      :initial="{ opacity: 0.5, y: -50 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5, ease: 'easeInOut' }"
      class=""
    >
      <UPageHero
        :title="$t('about.headline')"
        :description="$t('about.description')"
        :links="links"
        :ui="{
          container: 'max-w-xl md:max-w-3xl mx-auto',
          title: 'text-3xl md:text-5xl',
          description: 'text-md md:text-lg text-center',
        }"
      />
    </motion.div>
  </div>

  <USeparator />

  <div class="mx-auto max-w-xl md:max-w-3xl">
    <h1
      class="text-primary my-6 text-center text-3xl font-bold underline underline-offset-8 md:my-12 md:text-5xl"
    >
      {{ $t("navbar.projects") }}
    </h1>
    <motion.div
      id="about"
      :initial="{ opacity: 0.5 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 0.5, ease: 'easeInOut' }"
      class="h-screen"
    >
      <p class="text-muted text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga magni
        consequuntur ad tempore molestiae, tenetur beatae error minus tempora
        esse repellendus quia, voluptate facere impedit dolorem ducimus sint.
        Tempore, eveniet. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nulla ea at consequatur commodi. Quasi fuga laudantium sit ex
        tenetur, quis iusto omnis error esse! Accusantium atque magnam labore
        possimus veritatis? Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Voluptates ad magni laborum vel possimus quo, blanditiis
        asperiores, dignissimos odio eligendi aliquid iste sequi illum qui
        tenetur labore quaerat repellendus repellat.
      </p>
    </motion.div>
  </div>
</template>
