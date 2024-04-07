<script setup lang="ts">
import {AdjustTimeToUTCOffset} from "~/utils/utc";

definePageMeta({
  stylePage: true,
})

const {t} = useI18n()
const localePath = useLocalePath()

const route = useRoute();
const {domain}: any = route.params;
const domainData = typeof domain === "string" ? domain?.replace(/_/g, '.') : "";


const styleStore = useStyleStore()
const settingsStore = useSettingsStore()
const configStore = useConfigStore()
const {currentServer} = storeToRefs(configStore)

const {data, pending, error, refresh} = await useAsyncData(
    'dns',
    () => $fetch('/api/dns', {
      method: 'POST',
      body: {
        domain: domainData,
        serverName: currentServer.value.dns,
      }
    })
)

if (!error.value && settingsStore.getIsHistory) {
  styleStore.addOrUpdateHistory(
      {
        id: domainData,
        type: 'dns',
        domain: domainData,
        path: localePath(`/dns/${domain}.html`),
        date: AdjustTimeToUTCOffset(new Date().toString(), settingsStore.timeZones)
      }
  )
}


useHead({
  title: `${domainData} - ${t('dns.title')}`,
  meta: [
    {
      name: 'description',
      content: t('dns.description', {domain: domainData})
    }, {
      name: 'keywords',
      content: t('dns.keywords', {domain: domainData})
    }
  ]
})
</script>

<template>
  <div class="mt-5">
    <div class=" shadow-lg rounded-lg overflow-hidden">
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-800"> {{ t('dns.dnsResult') }}
            <span
                class="text-gray-300 text-sm font-normal ml-2">

            </span>
          </h2>
          <NTooltip
              placement="top">
            <template #trigger>
              <DnsApiChanges/>
            </template>
            {{ t('popper.dnsChange') }}
          </NTooltip>
        </div>

        <div
            class=" "> <!-- 使用 min-h-screen 确保占满至少一个屏幕高度 -->
          <div
              class="p-8  ">
            <!-- 增加内边距、使用更大的最大宽度、更大的圆角和阴影 -->
            <h2 class="mb-6 text-xl font-bold text-gray-900 dark:text-white w-full">提示</h2> <!-- 增大标题文字和下边距 -->
            <p class="text-center my-2 text-lg text-gray-700 dark:text-gray-400 w-full">当前没有可用的 DNS 服务器。</p>
            <!-- 增大正文文字尺寸，并添加更多说明 -->
            <p class="text-center my-2 text-lg text-gray-700 dark:text-gray-400 w-full">请检查您的Dns设置或稍后再试。</p>
            <!-- 增大正文文字尺寸，并添加更多说明 -->
          </div>
        </div>

        <DnsInfoList
            :data="data"
        />

        <!--        <DnsCloudflareList-->
        <!--           v-if="timeStore.getDnsServer == 'cloudflare'"-->
        <!--            :data="data"-->
        <!--        />-->
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>
