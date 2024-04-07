<script setup lang="ts">

import {AdjustTimeToUTCOffset} from "~/utils/utc";

const {t} = useI18n()
const localePath = useLocalePath()

const settingsStore = useSettingsStore()

const route = useRoute();
const {domain} = route.params;
const domainData = typeof domain === "string" ? domain?.replace(/_/g, '.') : "";

const {data: domainInfo, pending, error, refresh} = await useAsyncData(
    'domain',
    () => $fetch('/api/domain', {
      method: 'POST',
      body: {
        domain: domainData,
      }
    })
)

if (!error.value && settingsStore.getIsHistory) {
  settingsStore.addOrUpdateHistory(
      {
        id: domainData,
        type: 'domain',
        domain: domainData,
        path: localePath(`/domain/${domain}.html`),
        date: AdjustTimeToUTCOffset(new Date().toString(), settingsStore.timeZones)
      }
  )
}
</script>

<template>
  <div class="mt-5 mx-auto mb-5">
    <div
        v-if="domainStore.getHasDomainShown"
        class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
      <div class="p-6 space-y-4">
        <div
            class="flex justify-between items-center">
          <n-tag type="info" size="medium">域名信息</n-tag>
          <n-tag v-if="domainStore.getHasDomainShown" type="success" size="medium">
            Api来源：{{ domainStore.getFirstNewDomainShown?.name }}
          </n-tag>
        </div>
        <div class="grid grid-cols-2 gap-4 text-sm">
          <p class="text-gray-800 dark:text-gray-200">域名: <span class="font-medium">{{ domainInfo.domain }}</span></p>
          <p class="text-gray-800 dark:text-gray-200">货币: <span class="font-medium">{{
              domainInfo.currency
            }} ({{ domainInfo.currency_symbol }})</span></p>
          <p class="text-gray-800 dark:text-gray-200">新注册价格: <span
              class="font-medium">{{ domainInfo.currency_symbol }}{{ domainInfo.new }}</span>
          </p>
          <p class="text-gray-800 dark:text-gray-200">续费价格: <span class="font-medium">{{
              domainInfo.currency_symbol
            }}{{ domainInfo.renew }}</span></p>
          <p v-if="domainInfo.premium" class="text-gray-800 dark:text-gray-200">溢价：<span
              class="font-medium">{{ domainInfo.premium ? '支持' : '不支持' }}</span></p>
          <p v-else class="text-gray-800 dark:text-gray-200">溢价功能：<span
              class="font-medium">{{ domainInfo.premium ? '支持' : '不支持' }}</span></p>
        </div>
      </div>
    </div>
    <div
        v-else
        class="bg-white shadow-lg rounded-lg overflow-hidden"> <!-- 使用 min-h-screen 确保占满至少一个屏幕高度 -->
      <div
          class="p-8  ">
        <!-- 增加内边距、使用更大的最大宽度、更大的圆角和阴影 -->
        <h2 class="mb-6 text-xl font-bold text-gray-900 dark:text-white w-full">提示</h2> <!-- 增大标题文字和下边距 -->
        <p class="text-center my-2 text-lg text-gray-700 dark:text-gray-400 w-full">当前没有可用的 Domain 服务器。</p>
        <!-- 增大正文文字尺寸，并添加更多说明 -->
        <p class="text-center my-2 text-lg text-gray-700 dark:text-gray-400 w-full">请检查您的Domain设置或稍后再试。</p>
        <!-- 增大正文文字尺寸，并添加更多说明 -->
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
