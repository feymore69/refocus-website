<script setup lang="ts">
import FaqSection from '~/components/site/FaqSection.vue'
import FeatureGridSection from '~/components/site/FeatureGridSection.vue'
import HeroSection from '~/components/site/HeroSection.vue'
import PresetSection from '~/components/site/PresetSection.vue'
import SiteFooter from '~/components/site/SiteFooter.vue'
import SiteHeader from '~/components/site/SiteHeader.vue'
import TrustSection from '~/components/site/TrustSection.vue'
import WorkflowSection from '~/components/site/WorkflowSection.vue'

useSeoMeta({
  title: 'Refocus',
  ogTitle: 'Refocus',
  description:
    'Free desktop break reminders that protect your eyes, posture, and focus without breaking flow.',
  ogDescription:
    'Smart screen breaks that respect your flow, with real presets, local stats, Smart Pause timing, and adjustable break overlays.',
  ogImage: '/refocus-desktop.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Refocus',
  twitterDescription:
    'A free desktop app for smart screen-break reminders, built around real tray behavior, local stats, and honest product scope.',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <div class="min-h-screen">
    <SiteHeader />
    <main>
      <HeroSection />
      <FeatureGridSection />
      <PresetSection />
      <WorkflowSection />
      <TrustSection />
      <FaqSection />
    </main>
    <SiteFooter />
  </div>
</template>
