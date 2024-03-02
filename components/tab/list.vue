<script setup lang="ts">
const timeStore = useTimeStore()
const emit = defineEmits(['action'])

const handleActionFromDnsList = (urlParam:string) => {
  emit('action', urlParam)
}
</script>

<template>
  <ClientOnly>
    <div class="flex justify-between w-full">
      <div>
        <!-- 左边的新元素 -->
        <UTooltip text="支持列表" :popper="{ placement: 'top' }">
          <CommonDomainList  />
        </UTooltip>

        <UTooltip text="Dns查询" :popper="{ placement: 'top' }">
          <CommonDnsList @action="handleActionFromDnsList" />
        </UTooltip>
      </div>
      <div class="flex space-x-2">
        <!-- 右边的现有元素 -->
        <UTooltip :text="timeStore.timeZones" :popper="{ placement: 'top' }">
          <CommonTimeZonesChange />
        </UTooltip>
        <UTooltip text="主题模式" :popper="{ placement: 'top' }">
          <CommonColorChange />
        </UTooltip>
        <UTooltip text="切换语言" :popper="{ placement: 'top' }">
          <CommonLanguageChange />
        </UTooltip>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>

</style>
