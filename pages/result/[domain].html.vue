<script setup lang="ts">
import {ParseWhois} from "~/utils/whoisToJson";
import {AdjustTimeToUTCOffset} from "~/utils/utc";
import {useTimeStore} from "~/stores/time";

definePageMeta({
  layout: 'result',
})
const route = useRoute();
const {domain} = route.params;

const {t} = useI18n()

const domainData = domain.replace(/_/g, '.')

const {data, pending, error, refresh} = await useAsyncData(
    'mountains',
    () => $fetch('/api/whois', {
      method: 'POST',
      body: JSON.stringify({domain: domainData})
    })
)

const parsedInfo = ParseWhois(data.value);
const showRawData = ref(false);
const timeStore = useTimeStore()

useHead({
  title: `${domainData} - ${t('result.title')}`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: t('result.description', {domain: domainData})
    }
  ]
})
</script>

<template>
  <table
      v-if="parsedInfo.registrar"
      class="w-full bg-[#fffffe] p-4 shadow-lg rounded-lg mt-5 dark:bg-gray-800 dark:text-gray-200 text-white hover:bg-none">
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
    <tr class="hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-700 text-gray-200">
      <th class="p-4 text-left font-semibold text-gray-900 dark:text-gray-200">
        {{ t('result.domain') }}
      </th>
      <td class="p-4 text-gray-900 dark:text-gray-200">
        <p>
          <NuxtLink :to="`//${parsedInfo.domainName}`" target="_blank" rel="nofollow"
                    class="text-blue-600 hover:text-blue-800">
            {{ parsedInfo.domainName }}
          </NuxtLink>
        </p>
      </td>
    </tr>
    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-200">
      <th class="p-4 text-left font-semibold text-gray-900 dark:text-gray-200">{{ t('result.registrar') }}</th>
      <td class="p-4 text-gray-900 dark:text-gray-200">{{ parsedInfo.registrar }}</td>
    </tr>
    <tr class="hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-700 text-gray-200">
      <th class="p-4 text-left font-semibold text-gray-900 dark:text-gray-200">{{ t('result.updateDate') }}</th>
      <td class="p-4 text-gray-900 dark:text-gray-200">
        {{ AdjustTimeToUTCOffset(parsedInfo.updatedDate, timeStore.timeZones) }}
      </td>
    </tr>
    <tr class="hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-700 text-gray-200">
      <th class="p-4 text-left font-semibold text-gray-900 dark:text-gray-200">{{ t('result.createDate') }}</th>
      <td class="p-4 text-gray-900 dark:text-gray-200">
        {{ AdjustTimeToUTCOffset(parsedInfo.creationDate, timeStore.timeZones) }}
      </td>
    </tr>
    <tr class="hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-700 text-gray-200">
      <th class="p-4 text-left font-semibold text-gray-900 dark:text-gray-200">{{ t('result.expirationDate') }}</th>
      <td class="p-4 text-gray-900 dark:text-gray-200">
        {{ AdjustTimeToUTCOffset(parsedInfo.registryExpiryDate, timeStore.timeZones) }}
      </td>
    </tr>
    <tr class="hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-700 text-gray-200">
      <th class="p-4 text-left font-semibold text-gray-900 dark:text-gray-200">{{ t('result.ianaId') }}</th>
      <td class="p-4 text-gray-900 dark:text-gray-200">{{ parsedInfo.registrarIANAID }}</td>
    </tr>
    <tr class="hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-700 text-gray-200">
      <th class="p-4 text-left font-semibold text-gray-900 dark:text-gray-200">{{ t('result.status') }}</th>
      <td class="p-4 text-gray-900 dark:text-gray-200">{{ parsedInfo.domainStatus?.join(', ') }}</td>
    </tr>
    <tr class="hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-700 text-gray-200">
      <th class="p-4 text-left font-semibold text-gray-900 dark:text-gray-200">{{ t('result.dns') }}</th>
      <td class="p-4 text-gray-900 dark:text-gray-200">
        <p v-for="item in parsedInfo.nameServers">{{ item }}</p>
      </td>
    </tr>
    <tr class="hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-700 text-gray-200">
      <th class="p-4 text-left font-semibold text-gray-900 dark:text-gray-200">{{ t('result.dnssec') }}</th>
      <td class="p-4 text-gray-900 dark:text-gray-200">{{ parsedInfo.dnssec }}</td>
    </tr>
    <tr class="hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-700 text-gray-200">
      <th class="p-4 text-left font-semibold text-gray-900 dark:text-gray-200">{{ t('result.rawData') }}</th>
      <td class="p-4 text-gray-900 dark:text-gray-200">
        <UToggle color="sky" v-model="showRawData"/>
      </td>
    </tr>
    </tbody>
  </table>

  <!-- 公告部分 -->
  <CommonBulletin v-else class="mt-5"  >
    <template #text>
      <Icon name="bx:error" size="16px" color="red" />
      {{ t('error.notFound') }}
    </template>
  </CommonBulletin>

  <div
      class="w-full  bg-[#fffffe] mt-5 p-4 shadow-lg rounded-lg whitespace-pre-wrap dark:text-gray-200 dark:bg-gray-800"
      v-if="showRawData">
    {{ data }}
  </div>
</template>

<style scoped>

</style>
