<script setup lang="ts">
import { ArrowUpRight, Download } from 'lucide-vue-next'
import { headerLinks, siteConfig } from '~/data/refocus'
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-white/[0.08] bg-slate-950/[0.72] backdrop-blur-xl backdrop-saturate-150"
  >
    <div class="section-shell flex items-center justify-between gap-4 py-5">
      <a href="#top" class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_0_32px_rgba(69,181,255,0.18)]">
          <img
            src="/icon-128.png"
            alt="Refocus icon"
            width="32"
            height="32"
            decoding="async"
            class="h-8 w-8 drop-shadow-[0_0_18px_rgba(106,248,223,0.35)]"
          >
        </div>
        <div>
          <p class="font-display text-lg font-semibold tracking-tight text-white">
            Refocus
          </p>
          <p class="text-xs tracking-[0.24em] text-slate-400 uppercase">
            Desktop break reminders
          </p>
        </div>
      </a>

      <nav class="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
        <a
          v-for="link in headerLinks"
          :key="link.href"
          :href="link.href"
          class="transition hover:text-white"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <a
          :href="siteConfig.secondaryCta.href"
          class="hidden rounded-full border border-white/[0.12] px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/[0.06] sm:inline-flex"
        >
          Product tour
        </a>
        <a
          :href="siteConfig.primaryCta.href"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(79,183,255,0.25)] transition hover:scale-[1.01]"
        >
          <Download class="h-4 w-4" />
          {{ siteConfig.primaryCta.label }}
          <ArrowUpRight class="h-4 w-4" />
        </a>
      </div>
    </div>
  </header>
</template>
