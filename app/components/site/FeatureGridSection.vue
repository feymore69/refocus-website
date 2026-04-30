<script setup lang="ts">
import { featureGroups } from '~/data/refocus'
import SectionHeading from '~/components/site/SectionHeading.vue'
</script>

<template>
  <section id="features" class="section-shell section-gap">
    <SectionHeading
      eyebrow="What Ships Today"
      title="Built from the actual desktop product, not imaginary marketing feature lists."
      description="These sections map directly to the Refocus Windows app's real countdowns, screen break overlays, desktop controls, working hours, settings model, and local analytics."
    />

    <div class="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="group in featureGroups"
        :key="group.title"
        class="glass-panel flex h-full flex-col gap-5 rounded-[2rem] p-6"
      >
        <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-300/[0.18] bg-sky-300/10 text-sky-200">
          <component :is="group.icon" class="h-5 w-5" />
        </div>

        <div class="space-y-3">
          <h3 class="font-display text-2xl font-semibold text-white">
            {{ group.title }}
          </h3>
          <p class="text-sm leading-7 text-slate-300">
            {{ group.body }}
          </p>
        </div>

        <ul class="space-y-3 text-sm leading-7 text-slate-200">
          <li
            v-for="point in group.points"
            :key="point"
            class="flex items-start gap-3"
          >
            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{{ point }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
