<template>
  <div
    class="flex w-full items-center justify-around gap-4 border-t border-neutral-200 p-4 dark:border-neutral-800"
  >
    <ULink
      to="#about"
      class="text-primary hover:text-primary-600 hover:underline"
      >{{ $t("footer.back") }}
    </ULink>
    <div class="inline-flex items-center gap-2">
      <p class="text-muted">{{ $t("footer.text") }}</p>
      <Icon class="text-primary" name="material-icon-theme:vue" />
    </div>
  </div>
</template>
