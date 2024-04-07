<script setup lang="ts">
const settingsStore = useSettingsStore()

const {t} = useI18n()

useHead({
  title: `${t('index.title')} - ${t('app.title')}`,
  meta: [
    {
      name: 'description',
      content: t('index.description')
    }, {
      name: 'keywords',
      content: t('index.keywords')
    }
  ]
})
</script>

<template>

</template>

<style scoped>

</style>
