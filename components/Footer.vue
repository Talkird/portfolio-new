<script setup lang="ts">
const year = new Date().getFullYear();

const scrollToTop = () => window.scrollTo({ top: 0 });
</script>

<template>
  <footer
    id="contact"
    class="flex w-full flex-col items-center justify-around gap-4 border-t border-neutral-200 p-4 md:flex-row dark:border-neutral-800"
  >
    <p class="text-muted text-sm">© {{ year }} Juan Andrés Losauro</p>

    <UButton
      variant="link"
      icon="i-lucide-arrow-up"
      class="cursor-pointer"
      @click="scrollToTop"
    >
      {{ $t("footer.back") }}
    </UButton>

    <div class="flex items-center gap-1">
      <UButton
        color="neutral"
        variant="ghost"
        to="mailto:losaurojuan@gmail.com"
        icon="i-lucide-mail"
        aria-label="Email"
      />
      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/Talkird"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
      />
      <UButton
        color="neutral"
        variant="ghost"
        to="https://www.linkedin.com/in/juanlosauro/"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="LinkedIn"
      />
    </div>
  </footer>
</template>
