<script setup lang="ts">

definePageMeta({
  stylePage: true,
})

const {t} = useI18n()
const route = useRoute();
const {domain}: any = route.params;
const domainData = typeof domain === "string" ? domain?.replace(/_/g, '.') : "";
const settingsStore = useSettingsStore()
const localePath = useLocalePath()
const configStore = useConfigStore()
const {currentServer} = storeToRefs(configStore)

const {data, pending, error, refresh} = await useAsyncData(
    'whois',
    () => $fetch('/api/server/whois', {
      method: 'POST',
      body: {
        domain: domainData,
        serverName: currentServer.value.whois,
      },
    })
)

if (!error.value && settingsStore.getIsHistory) {
  settingsStore.addOrUpdateHistory(
      {
        id: domainData,
        type: 'whois',
        domain: domainData,
        path: localePath(`/whois/${domain}.html`),
        date: AdjustTimeToUTCOffset(new Date().toString(), settingsStore.timeZones)
      }
  )
}

useHead({
  title: `${domainData} - ${t('whois.title')}`,
  meta: [
    {
      name: 'description',
      content: t('whois.description', {domain: domainData})
    }, {
      name: 'keywords',
      content: t('whois.keywords', {domain: domainData})
    }
  ]
})
</script>
<template>
  <div
      class="w-full  bg-[#fffffe] mt-5 p-4 shadow-lg rounded-lg whitespace-pre-wrap dark:text-gray-200 dark:bg-gray-800"
  >
    <WhoisNuxt
        v-if="currentServer.whois == 'nuxt'"
        :data="data"
    />
    <WhoisTianHu
        v-if="currentServer.whois == 'tianhu'"
        :data="data"
    />
  </div>
</template>

<style scoped>

</style>
