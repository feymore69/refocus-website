<script setup lang="ts">
import { schedulePresets } from '~/data/refocus'
import SectionHeading from '~/components/site/SectionHeading.vue'
</script>

<template>
  <section id="desktop" class="section-shell section-gap">
    <div class="grid gap-10 xl:grid-cols-[0.94fr_1.06fr] xl:items-start">
      <SectionHeading
        eyebrow="Starting Rhythms"
        title="Start with a preset that fits how you work, then shape the rest around it."
        description="Refocus already ships named schedule presets in the desktop app, so the website can lead with real options instead of generic productivity filler."
      />

      <div class="grid gap-4">
        <article
          v-for="preset in schedulePresets"
          :key="preset.label"
          class="glass-panel rounded-[1.8rem] p-5"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="font-display text-2xl font-semibold text-white">
                {{ preset.label }}
              </p>
              <p class="mt-2 max-w-xl text-sm leading-7 text-slate-300">
                {{ preset.description }}
              </p>
            </div>
            <span class="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] tracking-[0.2em] text-slate-300 uppercase">
              Preset
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
