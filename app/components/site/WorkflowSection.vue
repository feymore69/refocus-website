<script setup lang="ts">
import { workflowSteps } from '~/data/refocus'
import SectionHeading from '~/components/site/SectionHeading.vue'
</script>

<template>
  <section id="workflow" class="section-shell section-gap">
    <SectionHeading
      eyebrow="How It Works"
      title="A calmer desktop routine in three steps."
      description="Refocus is designed to protect long sessions without making every reminder feel dramatic. The flow below mirrors the real app behavior already present in the repository."
    />

    <div class="mt-10 grid gap-5 lg:grid-cols-3">
      <article
        v-for="item in workflowSteps"
        :key="item.step"
        class="glass-panel rounded-[1.8rem] p-6"
      >
        <p class="text-xs font-semibold tracking-[0.3em] text-cyan-200 uppercase">
          Step {{ item.step }}
        </p>
        <h3 class="mt-4 font-display text-2xl font-semibold text-white">
          {{ item.title }}
        </h3>
        <p class="mt-4 text-sm leading-7 text-slate-300">
          {{ item.body }}
        </p>
      </article>
    </div>
  </section>
</template>
