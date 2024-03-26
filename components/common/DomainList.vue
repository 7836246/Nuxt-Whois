<script setup lang="ts">

const domainListStore = useDomainListStore();
const SupportedTLDs = domainListStore.getSupportedTLDKeys
const isOpen = ref(false)
const {t} = useI18n()

</script>

<template>
  <div>
    <div title="Change Color">
      <div
          class="cursor-pointer	flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
          @click="isOpen = true"
      >
        <Icon name="mdi:about-circle-outline" class=" text-lg dark:text-white"/>
      </div>
    </div>
    <NDrawer
        v-model:show="isOpen"
        placement="left"
        :default-width="502"
        resizable
    >
      <NDrawerContent
          :title="t('index.support')"
          closable
      >
        <div class="flex flex-wrap mt-2 ">
      <span
          v-for="item in SupportedTLDs"
          :key="item"
          class="m-1 px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-200 rounded hover:bg-gray-300"
      >
        {{ item }}
      </span>
        </div>
      </NDrawerContent>
    </NDrawer>
  </div>
</template>

<style scoped>

</style>
