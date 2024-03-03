<script setup lang="ts">
const timeStore = useTimeStore()
const settingsStore = useSettingsStore()
const emit = defineEmits(['action'])

const handleActionFromDnsList = (urlParam:string) => {
  emit('action', urlParam)
}
const {t} = useI18n()
</script>

<template>
  <ClientOnly>
    <div class="flex justify-between w-full">
      <div class="space-x-2">
        <!-- 左边的新元素 -->
        <UTooltip :text="t('popper.support')" :popper="{ placement: 'top' }">
          <CommonDomainList  />
        </UTooltip>

        <UTooltip
            v-if="settingsStore.getHistory"
            :text="t('popper.history')" :popper="{ placement: 'top' }">
          <CommonHistory  />
        </UTooltip>

        <UTooltip :text="t('popper.dns')" :popper="{ placement: 'top' }">
          <CommonDnsList @action="handleActionFromDnsList" />
        </UTooltip>
      </div>
      <div class="flex space-x-2">
        <!-- 右边的现有元素 -->
        <UTooltip :text="t('popper.setting')" :popper="{ placement: 'top' }">
          <CommonSettingsChange />
        </UTooltip>
        <UTooltip :text="timeStore.timeZones" :popper="{ placement: 'top' }">
          <CommonTimeZonesChange />
        </UTooltip>
        <UTooltip :text="t('popper.theme')" :popper="{ placement: 'top' }">
          <CommonColorChange />
        </UTooltip>
        <UTooltip :text="t('popper.language')" :popper="{ placement: 'top' }">
          <CommonLanguageChange />
        </UTooltip>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>

</style>
