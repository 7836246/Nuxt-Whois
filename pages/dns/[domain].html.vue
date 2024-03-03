<script setup lang="ts">
import {useStyleStore} from "~/stores/style";
import {AdjustTimeToUTCOffset} from "~/utils/utc";
import {useTimeStore} from "~/stores/time";
import DnsInfo from "~/components/dns/InfoList.vue";

const {t} = useI18n()

const route = useRoute();
const {domain} = route.params;

const domainData = domain.replace(/_/g, '.')

const timeStore = useTimeStore()
const styleStore = useStyleStore()
const localePath = useLocalePath()

styleStore.setIsPage(true)

const {data, pending, error, refresh} = await useAsyncData(
    'dns',
    () => $fetch('/api/dns', {
      method: 'POST',
      body: {
            domain: domainData,
            dnsServer:timeStore.getDnsServer
      }
    })
)

if (!error.value) {
  styleStore.addOrUpdateHistory(
      {
        id: domainData,
        type: 'dns',
        domain: domainData,
        path: localePath(`/dns/${domain}.html`),
        date: AdjustTimeToUTCOffset(new Date().toString(), timeStore.timeZones)
      }
  )
}

useHead({
  title: `${domainData} - ${t('dns.title')}`,
  meta: [
    {
      name: 'description',
      content: t('dns.description', { domain: domainData })
    },{
      name: 'keywords',
      content: t('dns.keywords', { domain: domainData })
    }
  ]
})
</script>

<template>
  <div class="mt-5">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-800"> {{ t('dns.dnsResult') }}
            <span class="text-gray-300 text-sm font-normal ml-2">{{ timeStore.getDnsServer }}</span>
          </h2>
          <ClientOnly>
          <DnsApiChanges />
          </ClientOnly>
        </div>

        <DnsDefaultList v-if="timeStore.getDnsServer == ''"
                        :data="data" />

        <DnsInfoList
            v-if="timeStore.getDnsServer != 'cloudflare' && timeStore.getDnsServer != ''"
            :data="data"
        />


        <DnsCloudflareList
           v-if="timeStore.getDnsServer == 'cloudflare'"
            :data="data"
        />


      </div>
    </div>
  </div>

  <!-- 公告部分 -->
  <CommonBulletin v-if="error" class="mt-5"  >
    <template #text>
      <Icon name="bx:error" size="16px" color="red" />
      {{ t('error.notFound') }}
    </template>
  </CommonBulletin>

</template>

<style scoped>

</style>
