<script setup lang="ts">
import { ArrowUpRight, ShieldCheck } from 'lucide-vue-next'
import { callout, featureTruthLine, siteConfig, trustCards } from '~/data/refocus'
import SectionHeading from '~/components/site/SectionHeading.vue'
</script>

<template>
  <section id="privacy" class="section-shell section-gap">
    <div class="grid gap-10 xl:grid-cols-[1.06fr_0.94fr]">
      <div>
        <SectionHeading
          eyebrow="Privacy And Product Truth"
          title="Local-first, honest, and careful about what the app really does."
          description="Refocus already contains strong privacy language in the desktop app, and it is one of the best trust signals this product has. The website leans into that instead of hiding it."
        />

        <div class="mt-10 grid gap-4 md:grid-cols-3 xl:grid-cols-1">
          <article
            v-for="card in trustCards"
            :key="card.title"
            class="glass-panel rounded-[1.7rem] p-5"
          >
            <div class="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan-200">
              <component :is="card.icon" class="h-5 w-5" />
            </div>
            <h3 class="mt-4 font-display text-2xl font-semibold text-white">
              {{ card.title }}
            </h3>
            <p class="mt-3 text-sm leading-7 text-slate-300">
              {{ card.body }}
            </p>
          </article>
        </div>
      </div>

      <aside class="glass-panel rounded-[2rem] p-7">
        <div class="inline-flex items-center gap-2 rounded-full border border-emerald-300/[0.18] bg-emerald-300/[0.08] px-4 py-2 text-xs font-semibold tracking-[0.22em] text-emerald-100 uppercase">
          <ShieldCheck class="h-4 w-4" />
          {{ callout.eyebrow }}
        </div>
        <h3 class="mt-6 font-display text-3xl font-semibold leading-tight text-white">
          {{ callout.title }}
        </h3>
        <p class="mt-4 text-sm leading-7 text-slate-300">
          {{ callout.body }}
        </p>

        <div class="mt-6 rounded-[1.6rem] border border-white/10 bg-black/[0.18] p-5">
          <p class="text-xs font-semibold tracking-[0.24em] text-slate-400 uppercase">
            Product honesty
          </p>
          <p class="mt-3 text-sm leading-7 text-slate-200">
            {{ featureTruthLine }}
          </p>
        </div>

        <div class="mt-6 flex flex-wrap gap-3">
          <a
            :href="siteConfig.primaryCta.href"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(79,183,255,0.22)] transition hover:scale-[1.01]"
          >
            Download Refocus
            <ArrowUpRight class="h-4 w-4" />
          </a>
          <a
            href="#faq"
            class="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
          >
            Read the FAQ
          </a>
        </div>
      </aside>
    </div>
  </section>
</template>
