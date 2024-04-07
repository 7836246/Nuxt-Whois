<script setup lang="ts">

const isOpen = ref(false)
const settingsStore = useSettingsStore()
const {t} = useI18n()

</script>

<template>
  <div>
    <div title="Change Color">
      <div
          class="cursor-pointer	flex h-10 w-10 items-center justify-center rounded-lg dark:bg-gray-700"
          @click="isOpen = true"
      >
        <Icon name="ic:baseline-history" class=" text-lg dark:text-white"/>
      </div>
    </div>

    <NDrawer
        v-model:show="isOpen"
        placement="right"
        :default-width="602"
        resizable
    >

      <NDrawerContent
          :title="t('history.title')"
          class="w-full min-h-screen overflow-y-auto  dark:text-white  dark:bg-[#000000FF]"
          closable
      >
        <div class="max-w-6xl mx-auto">
          <h1 class="text-2xl font-bold text-gray-800 mb-5 flex items-center justify-between">
            <span
                class="text-sm text-gray-500 py-1 px-3 rounded-full  dark:text-white  dark:bg-[#000000FF]">
             {{ t('history.tips', {length: settingsStore.getHistory.length}) }}
            </span>
          </h1>
          <div class=" shadow-md rounded-lg ">
            <!-- 条件渲染，如果有历史记录则显示表格，否则显示提示 -->
            <div v-if="settingsStore.getHistory.length">
              <!-- 表格头部和内容 -->
              <table class="min-w-full leading-normal ">
                <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {{ t('history.domain') }}
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {{ t('history.type') }}
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {{ t('history.time') }}
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {{ t('history.actions') }}
                  </th>
                </tr>
                </thead>
                <tbody>
                <!-- 这里将使用循环来动态展示查询历史 -->
                <tr v-for="item in settingsStore.getHistory" :key="item.id"
                    class="border-b border-gray-200  dark:text-white  dark:bg-[#000000FF]">
                  <td class="px-5 py-5 text-sm  ">
                    <NuxtLink :to="item.path">{{ item.domain }}</NuxtLink>
                  </td>
                  <td class="px-5 py-5 text-sm ">
                    {{ item.type }}
                  </td>
                  <td class="px-5 py-5 text-sm ">
                    {{ item.date }}
                  </td>
                  <td class="px-5 py-5 text-sm ">
                    <NButton
                        @click="settingsStore.deleteHistory(item.id)"

                    >{{ t('common.actions.delete') }}
                    </NButton>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div v-else class="text-center py-5">
              <p class="text-gray-500">{{ t('history.empty') }}</p>
            </div>
          </div>
        </div>
      </NDrawerContent>
    </NDrawer>
  </div>
</template>

<style scoped>

</style>
