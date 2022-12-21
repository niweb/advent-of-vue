<template>
  <main class="flex flex-col justify-center h-full mx-auto max-w-600px">
    <section class="flex flex-col items-center leading-loose text-center">
      <div class="text-3xl mb-4">
        <span class="i-twemoji-christmas-tree"></span>
        {{ $t('happyHolidays') }}
        <span class="i-twemoji-world-map"></span>
      </div>
      <div class="text-xl mb-4">
        <i18n-t keypath="christmasIsComing">
    <template #date>
      <span>{{ $d(christmasDate) }}</span>
    </template>
    <template #time>
      <span class="text-green">{{ $t('day', { count: daysUntilChristmas }) }}</span>
    </template>
  </i18n-t>
      </div>
      <div class="flex space-x-16">
        <button class="icon-button" @click="onLocaleChange">
          <span class="i-twemoji-globe-with-meridians" />
        </button>
        <div class="space-x-2">
          <span :class="flags[locale]" />
          <span>{{ $t('language') }}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import { useNow } from '@vueuse/core'

const { locale } = useI18n()

const now = useNow()
const christmasDate = new Date('2022/12/25')
const daysUntilChristmas = computed(() => Math.ceil((christmasDate - now.value) / (1000 * 60 * 60 * 24)))

const locales = ['en', 'de', 'ja-JP']
const curentLocale = ref(0)
const onLocaleChange = () => {
  const currentIndex = locales.findIndex(i => i === locale.value)
  const nextIndex = currentIndex + 1 % locales.length;
  locale.value = locales[nextIndex]
}

const flags = {
  'en': 'i-twemoji-flag-united-states',
  'de': 'i-twemoji-flag-germany',
  'ja-JP': 'i-twemoji-flag-japan',
}
</script>

<style scoped>
.icon-button {
  @apply text-xl w-32px h-32px rounded-full border-1 border-transparent bg-transparent cursor-pointer duration-300 hover: ring-2 hover:border-green-500 hover:ring-green-500 hover:ring-opacity-40 hover:text-green-600;
}
</style>
