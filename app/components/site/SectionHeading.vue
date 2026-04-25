<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="max-w-3xl space-y-3">
    <p class="text-xs font-semibold tracking-[0.32em] text-sky-200/[0.78] uppercase">
      {{ eyebrow }}
    </p>
    <h2 class="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
      {{ title }}
    </h2>
    <p class="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
      {{ description }}
    </p>
  </div>
</template>
