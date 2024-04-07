<template>
  <n-config-provider
      :theme="theme"
      :theme-overrides="themeOverrides"
      inline-theme-disabled
      preflight-style-disabled
  >
    <n-global-style/>
    <n-modal-provider>
      <n-message-provider>
        <NuxtLayout>
          <NuxtLoadingIndicator/>
          <NuxtPage/>
        </NuxtLayout>
      </n-message-provider>
    </n-modal-provider>
  </n-config-provider>
</template>
<script setup lang="ts">
import {darkTheme, lightTheme} from 'naive-ui'

const colorMode = useColorMode()

const theme = computed(() => {
  return colorMode.value === 'system' ? (colorMode.value ? lightTheme : darkTheme) : colorMode.value === 'light' ? lightTheme : darkTheme
})

const styleStore = useStyleStore()
const {common} = storeToRefs(styleStore)
const themeOverrides = computed(() => {
  return {
    common: common.value, // 注意这里要使用 common.value
  }
})

await callOnce(async () => {
  await useSettingsStore().webSiteConfigInit()
  await useConfigStore().configServerInit()
})

</script>
<style>

</style>
