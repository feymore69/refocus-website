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
      <div class="relative z-10 rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-3 shadow-[0_40px_120px_rgba(3,8,24,0.6)] backdrop-blur-2xl">
        <img
          src="/refocus-desktop.png"
          alt="Refocus desktop dashboard showing the next break timer, daily stats, status cards, and weekly adherence trend"
          class="rounded-[1.6rem] border border-white/[0.08] shadow-[0_26px_70px_rgba(5,10,25,0.42)]"
        >

        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <div class="glass-panel flex items-center gap-3 rounded-full px-4 py-3 text-sm text-slate-200">
            <HardDriveDownload class="h-4 w-4 text-cyan-300" />
            Local-only settings and history
          </div>
          <div class="glass-panel flex items-center gap-3 rounded-full px-4 py-3 text-sm text-slate-200">
            <ShieldCheck class="h-4 w-4 text-emerald-300" />
            Real desktop UI from the running app
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
