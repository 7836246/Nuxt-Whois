<template>
  <n-config-provider>
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
const whoisStore = useWhoisStore()
const dnsStore = useDnsStore()
const domainStore = useDomainStore()
whoisStore.newWhoisList()
dnsStore.newDnsList()
domainStore.newDomainList()
</script>
<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #18181c;

}

.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}

.light-mode body {
  background-color: #F1F3F4;
  color: #433422;
}
</style>
