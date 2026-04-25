<script setup lang="ts">
import { footerLinks } from '~/data/refocus'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="section-shell border-t border-white/[0.08] py-10">
    <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="font-display text-xl font-semibold text-white">
          Refocus
        </p>
        <p class="mt-2 text-sm text-slate-400">
          Free desktop break reminders that stay calm, local, and honest.
        </p>
      </div>

      <div class="flex flex-wrap gap-4 text-sm text-slate-300">
        <a
          v-for="link in footerLinks"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
          class="transition hover:text-white"
        >
          {{ link.label }}
        </a>
      </div>
    </div>

    <p class="mt-8 text-xs tracking-[0.22em] text-slate-500 uppercase">
      {{ `© ${year} Refocus` }}
    </p>
  </footer>
</template>
