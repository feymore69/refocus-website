<script setup lang="ts">
import { ArrowRight, CheckCircle2, HardDriveDownload, ShieldCheck } from 'lucide-vue-next'
import { heroHighlights, productChips, siteConfig, socialProofLine } from '~/data/refocus'
</script>

<template>
  <section id="top" class="section-shell relative grid gap-14 pt-16 pb-20 lg:grid-cols-[1.02fr_1fr] lg:items-center lg:pt-24">
    <div class="relative z-10 space-y-8">
      <div class="inline-flex items-center gap-2 rounded-full border border-sky-300/[0.18] bg-sky-300/[0.08] px-4 py-2 text-xs font-semibold tracking-[0.24em] text-sky-100 uppercase shadow-[0_0_35px_rgba(82,179,255,0.14)]">
        <span class="inline-flex h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
        {{ siteConfig.badge }}
      </div>

      <div class="space-y-5">
        <p class="text-sm font-semibold tracking-[0.32em] text-slate-400 uppercase">
          Refocus
        </p>
        <h1 class="font-display max-w-2xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {{ siteConfig.headline }}
        </h1>
        <p class="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          {{ siteConfig.description }}
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a
          :href="siteConfig.primaryCta.href"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_50px_rgba(79,183,255,0.24)] transition hover:scale-[1.01]"
        >
          {{ siteConfig.primaryCta.label }}
          <ArrowRight class="h-4 w-4" />
        </a>
        <a
          :href="siteConfig.secondaryCta.href"
          class="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
        >
          Explore the interface
        </a>
      </div>

      <ul class="grid gap-3 sm:grid-cols-2">
        <li v-for="item in heroHighlights" :key="item" class="flex items-start gap-3 rounded-3xl border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-sm leading-6 text-slate-200">
          <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
          <span>{{ item }}</span>
        </li>
      </ul>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="chip in productChips"
          :key="chip"
          class="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs tracking-[0.18em] text-slate-300 uppercase"
        >
          {{ chip }}
        </span>
      </div>

      <p class="max-w-2xl text-sm leading-7 text-slate-400">
        {{ socialProofLine }}
      </p>
    </div>

    <div class="relative">
      <div class="hero-orb hero-orb-left" />
      <div class="hero-orb hero-orb-right" />
      <div class="relative z-10 space-y-4">
        <div class="rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-3 shadow-[0_40px_120px_rgba(3,8,24,0.6)] backdrop-blur-2xl">
          <picture>
            <source
              type="image/webp"
              srcset="/refocus-app-640.webp 640w, /refocus-app-960.webp 960w, /refocus-app.png 1169w"
              sizes="(min-width: 1280px) 54vw, (min-width: 1024px) 50vw, 100vw"
            >
            <img
              src="/refocus-app-960.png"
              srcset="/refocus-app-640.png 640w, /refocus-app-960.png 960w, /refocus-app.png 1169w"
              sizes="(min-width: 1280px) 54vw, (min-width: 1024px) 50vw, 100vw"
              width="1169"
              height="799"
              alt="Refocus desktop dashboard showing the next break timer, daily stats, status cards, and weekly adherence trend"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              class="h-auto w-full rounded-[1.6rem] border border-white/[0.08] shadow-[0_26px_70px_rgba(5,10,25,0.42)]"
            >
          </picture>
        </div>

        <div class="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div class="glass-panel flex items-center gap-3 rounded-full px-4 py-3 text-sm text-slate-200">
            <HardDriveDownload class="h-4 w-4 text-cyan-300" />
            Local-only settings and history
          </div>
          <div class="glass-panel flex items-center gap-3 rounded-full px-4 py-3 text-sm text-slate-200">
            <ShieldCheck class="h-4 w-4 text-emerald-300" />
            Real desktop UI from the running app
          </div>
        </div>

        <div class="ml-auto max-w-sm rounded-[1.7rem] border border-white/[0.08] bg-slate-950/70 p-3 shadow-[0_30px_90px_rgba(5,10,25,0.48)] backdrop-blur-2xl">
          <picture>
            <source
              type="image/webp"
              srcset="/refocus-break-popup-420.webp 420w, /refocus-break-popup-720.webp 720w, /refocus-break-popup.png 1170w"
              sizes="(min-width: 1024px) 18rem, 80vw"
            >
            <img
              src="/refocus-break-popup-720.png"
              srcset="/refocus-break-popup-420.png 420w, /refocus-break-popup-720.png 720w, /refocus-break-popup.png 1170w"
              sizes="(min-width: 1024px) 18rem, 80vw"
              width="1170"
              height="798"
              alt="Refocus break popup showing the active break reminder overlay with remaining time, snooze, and skip actions"
              loading="lazy"
              decoding="async"
              class="h-auto w-full rounded-[1.3rem] border border-white/[0.08] shadow-[0_20px_60px_rgba(5,10,25,0.4)]"
            >
          </picture>
          <p class="mt-3 px-1 text-sm leading-6 text-slate-300">
            The actual break popup users see when Refocus pauses the screen and guides a short reset.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
