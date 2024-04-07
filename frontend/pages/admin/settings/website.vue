<script setup lang="ts">
definePageMeta({
  layout: "full",
})
const siteName = ref('');
const siteNameAlt = ref('');

function saveSettings() {
  // 这里应该是保存设置的逻辑，例如调用API或者本地状态管理
  console.log('保存的网站名称:', siteName.value);
}

const active = ref(false);
const GnOptions = ref([
  {
    label: 'Whois',
    value: 'whois'
  }, {
    label: 'Dns',
    value: 'dns'
  }, {
    label: 'Domain',
    value: 'domain'
  }
])
const GnValue = ref('whois')
</script>

<template>
  <div class="bg-gray-100 p-10">
    <div class=" bg-white rounded-lg shadow-md p-5">
      <h2 class="text-xl font-semibold mb-5">网站设置</h2>
      <div class="flex mb-6 -mx-2">
        <div class="flex-1 px-2">
          <label for="site-name" class="block mb-2 text-sm font-medium text-gray-900">网站Logo名称</label>
          <n-input id="site-name" v-model:value="siteName" placeholder="请输入网站名称"/>
        </div>
        <div class="flex-1 px-2">
          <label for="site-name-alt" class="block mb-2 text-sm font-medium text-gray-900">Logo右上角名称</label>
          <n-input id="site-name-alt" v-model:value="siteNameAlt" placeholder="请输入备用网站名称"/>
        </div>
      </div>
      <div class="flex mb-6 -mx-2">
        <div class="flex-1 px-2">
          <label for="site-name" class="block mb-2 text-sm font-medium text-gray-900">开启极简模式</label>
          <n-switch v-model:value="active"/>
        </div>
        <div class="flex-1 px-2">
          <label for="site-name-alt" class="block mb-2 text-sm font-medium text-gray-900">功能开启选择</label>
          <n-select v-model:value="GnValue" multiple :options="GnOptions"/>
        </div>
      </div>
      <div class="flex justify-end">
        <n-button type="primary" @click="saveSettings">保存设置</n-button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
