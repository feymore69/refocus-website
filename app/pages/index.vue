<script setup lang="ts">
import FaqSection from '~/components/site/FaqSection.vue'
import FeatureGridSection from '~/components/site/FeatureGridSection.vue'
import HeroSection from '~/components/site/HeroSection.vue'
import PresetSection from '~/components/site/PresetSection.vue'
import SiteFooter from '~/components/site/SiteFooter.vue'
import SiteHeader from '~/components/site/SiteHeader.vue'
import TrustSection from '~/components/site/TrustSection.vue'
import WorkflowSection from '~/components/site/WorkflowSection.vue'
import { currentVersion, faqItems, heroHighlights, productChips, seoKeywords, siteConfig } from '~/data/refocus'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || siteConfig.siteUrl
const canonicalUrl =
  siteUrl.length > 1 && siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl
const seoTitle = siteConfig.seoTitle
const seoDescription = siteConfig.seoDescription
const socialImageUrl = `${siteUrl}${siteConfig.socialImage}`
const heroImageAlt =
  'Refocus desktop dashboard showing the next break timer, daily stats, status cards, and weekly adherence trend'
const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${canonicalUrl}#organization`,
      name: siteConfig.name,
      url: canonicalUrl,
      logo: `${siteUrl}/icon-128.png`,
      sameAs: [
        'https://github.com/feymore69/refocus',
        'https://github.com/feymore69/refocus-website',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${canonicalUrl}#website`,
      url: canonicalUrl,
      name: siteConfig.name,
      description: seoDescription,
      inLanguage: 'en',
      publisher: {
        '@id': `${canonicalUrl}#organization`,
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${canonicalUrl}#software`,
      name: siteConfig.name,
      url: canonicalUrl,
      description: seoDescription,
      applicationCategory: 'ProductivityApplication',
      applicationSubCategory: 'Screen Break Reminder',
      operatingSystem: 'Windows',
      softwareVersion: currentVersion,
      inLanguage: 'en',
      isAccessibleForFree: true,
      downloadUrl: siteConfig.primaryCta.href,
      screenshot: socialImageUrl,
      image: socialImageUrl,
      featureList: [...heroHighlights, ...productChips],
      publisher: {
        '@id': `${canonicalUrl}#organization`,
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: faqItems.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
}

useServerSeoMeta({
  title: seoTitle,
  ogTitle: seoTitle,
  description: seoDescription,
  ogDescription: seoDescription,
  ogImage: socialImageUrl,
  ogImageAlt: heroImageAlt,
  ogImageWidth: '1169',
  ogImageHeight: '799',
  ogUrl: canonicalUrl,
  ogType: 'website',
  ogSiteName: siteConfig.name,
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: seoTitle,
  twitterDescription: seoDescription,
  twitterImage: socialImageUrl,
  twitterImageAlt: heroImageAlt,
  author: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: 'Productivity Software',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  keywords: seoKeywords.join(', '),
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl,
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: canonicalUrl,
    },
    {
      rel: 'alternate',
      hreflang: 'en-US',
      href: canonicalUrl,
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: canonicalUrl,
    },
    {
      rel: 'preload',
      as: 'image',
      href: '/refocus-app-960.webp',
      type: 'image/webp',
      imagesrcset:
        '/refocus-app-640.webp 640w, /refocus-app-960.webp 960w, /refocus-app.png 1169w',
      imagesizes: '(min-width: 1024px) 50vw, 100vw',
    },
  ],
  script: [
    {
      id: 'ld-schema',
      type: 'application/ld+json',
      textContent: JSON.stringify(schemaGraph),
    },
  ],
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
