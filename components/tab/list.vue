<script setup lang="ts">
const timeStore = useTimeStore()
const settingsStore = useSettingsStore()
const {t} = useI18n()
</script>

<template>
  <ClientOnly>
    <div class="flex justify-between w-full">
      <div class="flex space-x-2">
        <!-- 左边的新元素 -->
        <n-tooltip
            v-if="settingsStore.isDomainList"
            trigger="hover" placement="top">
          <template #trigger>
            <CommonDomainList/>
          </template>
          <span>{{ t('popper.support') }}</span>
        </n-tooltip>

        <n-tooltip
            v-if="settingsStore.getHistory"
            trigger="hover" placement="top">
          <template #trigger>
            <CommonHistory/>
          </template>
          <span>{{ t('popper.history') }}</span>
        </n-tooltip>

        <!--        <n-tooltip-->
        <!--            v-if="settingsStore.getHistory"-->
        <!--            trigger="hover" placement="top" >-->
        <!--          <template #trigger>-->
        <!--            <CommonDnsList @action="handleActionFromDnsList" />-->
        <!--          </template>-->
        <!--          <span>{{t('popper.dns')}}</span>-->
        <!--        </n-tooltip>-->

      </div>
      <div class="flex space-x-2">
        <!-- 右边的现有元素 -->
        <n-tooltip
            trigger="hover"
            placement="top">
          <template #trigger>
            <CommonSettingsChange/>
          </template>
          <span>{{ t('popper.setting') }}</span>
        </n-tooltip>

        <n-tooltip
            trigger="hover"
            placement="top">
          <template #trigger>
            <CommonApiChange/>
          </template>
          <span>第三方APi</span>
        </n-tooltip>

        <n-tooltip
            trigger="hover"
            placement="top">
          <template #trigger>
            <CommonTimeZonesChange/>
          </template>
          <span>{{ timeStore.timeZones }}</span>
        </n-tooltip>

        <n-tooltip
            trigger="hover"
            placement="top">
          <template #trigger>
            <CommonColorChange/>
          </template>
          <span>{{ t('popper.theme') }}</span>
        </n-tooltip>

        <n-tooltip
            trigger="hover"
            placement="top">
          <template #trigger>
            <CommonLanguageChange/>
          </template>
          <span>{{ t('popper.language') }}</span>
        </n-tooltip>

      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>

</style>
