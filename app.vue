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
          <!--          <CommonLayoutSetting v-if="isAdminRoute" class="fixed right-12 top-1/2 z-999" />-->
        </NuxtLayout>
      </n-message-provider>
    </n-modal-provider>
  </n-config-provider>
</template>
<script setup lang="ts">
import {darkTheme, lightTheme} from 'naive-ui'
import {naiveThemeOverrides} from "~/settings/settings";

const colorMode = useColorMode()
const themeOverrides = naiveThemeOverrides

const theme = computed(() => {
  return colorMode.value === 'system' ? (colorMode.value ? lightTheme : darkTheme) : colorMode.value === 'light' ? lightTheme : darkTheme
})

const whoisStore = useWhoisStore()
const dnsStore = useDnsStore()
const domainStore = useDomainStore()
whoisStore.newWhoisList()
dnsStore.newDnsList()
domainStore.newDomainList()
</script>
<style>

</style>
