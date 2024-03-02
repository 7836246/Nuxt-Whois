<script setup lang="ts">

import {useStyleStore} from "~/stores/style";
import {formatTimeAgo} from "~/composables/useFormatTime";

const isOpen = ref(false)

const styleStore = useStyleStore()

const slideoverConfig = {
  // 其他配置保持不变
  width: 'w-screen max-w-2xl', // 更新这里的值
  // 其余的配置...
};
</script>

<template>
  <div>
    <div title="Change Color">
      <div
          class="cursor-pointer	flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
          @click="isOpen = true"
      >
        <Icon name="ic:baseline-history" class=" text-lg dark:text-white" />
      </div>
    </div>

    <USlideover
        v-model="isOpen"
        side="right"
        :ui="slideoverConfig"
    >
      <button>
        <Icon name="lets-icons:close-ring-light" class="absolute top-2 right-2 text-gray-500 cursor-pointer" @click="isOpen = false" />
      </button>
      <div class="w-full min-h-screen bg-gray-100 p-5 overflow-y-auto max-h-[95vh]">
        <div class="max-w-6xl mx-auto">
          <h1 class="text-2xl font-bold text-gray-800 mb-5 flex items-center justify-between">
            查询历史
            <span class="text-sm text-gray-500 bg-gray-100 py-1 px-3 rounded-full">
              只保留最近 30/{{ styleStore.getHistory.length }} 条记录
            </span>
          </h1>
          <div class="bg-white shadow-md rounded-lg">
            <!-- 条件渲染，如果有历史记录则显示表格，否则显示提示 -->
            <div v-if="styleStore.getHistory.length">
              <table class="min-w-full leading-normal">
                <!-- 表格头部和内容 -->
                <table class="min-w-full leading-normal">
                  <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      域名
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      查询类型
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      查询时间
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      动作
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <!-- 这里将使用循环来动态展示查询历史 -->
                  <tr v-for="item in styleStore.getHistory" :key="item.id" class="border-b border-gray-200">
                    <td class="px-5 py-5 text-sm bg-white">
                      <NuxtLink :to="item.path">{{ item.domain }}</NuxtLink>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white">
                      {{ item.type }}
                    </td>
                    <td class="px-5 py-5 text-sm bg-white">
                      {{ item.date }}
                    </td>
                    <td class="px-5 py-5 text-sm bg-white">
                      <UButton
                          @click="styleStore.deleteHistory(item.id)"
                          color="sky"
                      >删除</UButton>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </table>
            </div>
            <div v-else class="text-center py-5">
              <p class="text-gray-500">当前没有查询历史记录。</p>
            </div>
          </div>
        </div>
      </div>
    </USlideover>
  </div>
</template>

<style scoped>

</style>
