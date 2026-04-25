<script setup lang="ts">
import { ref } from 'vue'
import { faqItems } from '~/data/refocus'
import SectionHeading from '~/components/site/SectionHeading.vue'

const openQuestions = ref<string[]>([])

const toggleQuestion = (question: string) => {
  if (openQuestions.value.includes(question)) {
    openQuestions.value = openQuestions.value.filter(item => item !== question)
    return
  }

  openQuestions.value = [...openQuestions.value, question]
}

const isOpen = (question: string) => openQuestions.value.includes(question)
</script>

<template>
  <section id="faq" class="section-shell section-gap">
    <SectionHeading
      eyebrow="FAQ"
      title="The questions a careful desktop user will ask."
      description="Because Refocus is free and runs locally, the site should answer scope, privacy, and strictness questions directly instead of trying to smooth them over."
    />

    <div class="mt-10 grid gap-4">
      <article
        v-for="item in faqItems"
        :key="item.question"
        class="glass-panel cursor-pointer rounded-[1.7rem] transition hover:border-white/16 hover:bg-white/[0.05]"
      >
        <button
          type="button"
          class="flex w-full cursor-pointer flex-col items-start rounded-[1.7rem] px-5 py-5 text-left"
          @click="toggleQuestion(item.question)"
        >
          <span
            class="font-display text-xl font-semibold text-white transition"
            :class="isOpen(item.question) ? 'text-cyan-100' : ''"
          >
            {{ item.question }}
          </span>
          <p
            v-if="isOpen(item.question)"
            class="mt-4 max-w-3xl text-sm leading-7 text-slate-300"
          >
            {{ item.answer }}
          </p>
        </button>
      </article>
    </div>
  </section>
</template>
