<template>
  <div
    class="flex w-full items-center justify-around gap-4 border-t border-neutral-200 p-4 dark:border-neutral-800"
  >
    <ULink
      to="#about"
      class="text-primary hover:text-primary-600 hover:underline"
      >{{ $t("footer.back") }}
    </ULink>
    <p class="text-muted">{{ $t("footer.text") }}</p>
  </div>
</template>
