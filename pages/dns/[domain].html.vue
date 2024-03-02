<script setup lang="ts">
import {useStyleStore} from "~/stores/style";
import {AdjustTimeToUTCOffset} from "~/utils/utc";
import {useTimeStore} from "~/stores/time";

const {t} = useI18n()

const route = useRoute();
const {domain} = route.params;

const domainData = domain.replace(/_/g, '.')
const {data, pending, error, refresh} = await useAsyncData(
    'dns',
    () => $fetch('/api/dns', {
      method: 'POST',
      body: JSON.stringify({domain: 'xukangr.com'})
    })
)

const timeStore = useTimeStore()
const styleStore = useStyleStore()

styleStore.setIsPage(true)

const localePath = useLocalePath()

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
        <h2 class="text-2xl font-bold text-gray-800 mb-6">{{ t('dns.dnsResult') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold text-lg text-blue-600 mb-2">{{ t('dns.aRecord') }}</h3>
            <div class="border rounded-lg p-4 bg-blue-50">
              <ul class="list-none space-y-2">
                <li v-for="(record, index) in data.A" :key="'a-record-' + index" class="flex justify-between items-center">
                  <span class="font-medium text-gray-700">IP:</span>
                  <span class="font-normal text-gray-600">{{ record.Record }}</span>
                  <span class="text-sm text-gray-500">TTL: {{ record.TTL }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 class="font-semibold text-lg text-green-600 mb-2">{{ t('dns.nsRecord') }}</h3>
            <div class="border rounded-lg p-4 bg-green-50">
              <ul class="list-none space-y-2">
                <li v-for="(record, index) in data.NS" :key="'ns-record-' + index" class="flex justify-between items-center">
                  <span class="font-normal text-gray-600">{{ record.Record }}</span>
                  <span class="text-sm text-gray-500">TTL: {{ record.TTL }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:col-span-2">
            <h3 class="font-semibold text-lg text-purple-600 mb-2">{{ t('dns.soaRecord') }}</h3>
            <div class="border rounded-lg p-4 bg-purple-50">
              <ul class="list-none space-y-2">
                <li><span class="font-medium text-gray-700">MName:</span> <span class="font-normal text-gray-600">{{ data.SOA.MName }}</span></li>
                <li><span class="font-medium text-gray-700">Email:</span> <span class="font-normal text-gray-600">{{ data.SOA.Email }}</span></li>
                <li><span class="font-medium text-gray-700">Serial:</span> <span class="font-normal text-gray-600">{{ data.SOA.Serial }}</span></li>
                <li><span class="font-medium text-gray-700">Refresh:</span> <span class="font-normal text-gray-600">{{ data.SOA.Refresh }}</span></li>
                <li><span class="font-medium text-gray-700">Retry:</span> <span class="font-normal text-gray-600">{{ data.SOA.Retry }}</span></li>
                <li><span class="font-medium text-gray-700">Expire:</span> <span class="font-normal text-gray-600">{{ data.SOA.Expire }}</span></li>
                <li><span class="font-medium text-gray-700">Minimum TTL:</span> <span class="font-normal text-gray-600">{{ data.SOA.MinimumTTL }}</span></li>
              </ul>
            </div>
          </div>
        </div>
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
