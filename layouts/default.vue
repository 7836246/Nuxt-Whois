<script setup lang="ts">
import {useApisStore} from "~/stores/api";

const {t} = useI18n()
const router = useRouter();
const runtimeConfig = useRuntimeConfig()
const localePath = useLocalePath()
const settingsStore = useSettingsStore()
const styleStore = useStyleStore()
const clientMounted = ref(false);
const apisStore = useApisStore()

const message = useMessage()
const handleAction = async (url: any) => {
  if (!settingsStore.getDomain) return message.error('请输入域名')

  // 正则表达式匹配域名
  const domainPattern = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z0-9]{2,11}?$/;
  // 正则表达式匹配IPv4地址
  const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  // 检查state.domain是否匹配域名或IP地址的格式
  if (!domainPattern.test(settingsStore.getDomain) && !ipPattern.test(settingsStore.getDomain)) {
    message.error('请输入正确的域名或IP地址')
    return;
  }

  await router.push(localePath(`/${url}/${settingsStore.getDomain.replace(/\./g, '_')}.html`))
}


onMounted(() => {
  clientMounted.value = true;
});

const selectOptions = ref([
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
const {selectedOption} = storeToRefs(settingsStore)
const handleSelectOptions = (value: any) => {
  settingsStore.setSelectedOption(value);
  console.log(selectedOption.value)
}
</script>

<template>
  <div
      class="w-full text-xs dark:bg-transparent"
      :class="{ 'h-[90vh]': !styleStore.getIsPage && clientMounted }"
  >
    <div
        class=" max-w-screen-lg mx-auto px-[1em] pb-[10vh] "
        :class="{ 'pt-[25vh]': !styleStore.getIsPage && clientMounted, 'pt-[5vh]': styleStore.getIsPage || !clientMounted }"
    >
      <nav class=" w-full text-[#464747] h-5 dark:bg-gray-700">
        <NuxtLink class="mb-3 font-bold text-2xl inline-block text-current no-underline dark:text-white"
                  :to="localePath('/')"
        >
          <h1 class="inline-block text-current no-underline dark:text-white">{{ runtimeConfig?.public?.Domain }}</h1>
          <sup class="text-[#59a8d7] dark:text-[#ace4f8]">{{ runtimeConfig?.public?.DomainSuffix }}</sup>
        </NuxtLink>
      </nav>
      <div class="mt-6">
        <div class="flex items-center space-x-2 mb-3 dark:text-white"
        >
          <!-- 容器div用于水平布局 -->
          <div class="flex-grow">
            <NInputGroup>
              <n-select
                  :style="{ width: '20%' }"
                  size="large"
                  v-model:value="selectedOption"
                  :options="selectOptions"
                  @update:value="handleSelectOptions"
              />
              <NInput
                  v-model:value="settingsStore.domainSearch"
                  @keyup.enter="handleAction(settingsStore.selectedOption)"
                  type="text"
                  :placeholder="t('index.placeholder')"
                  size="large"
                  clearable
                  autofocus
                  class="w-full "/>
            </NInputGroup>
          </div>
          <!-- 使用v-if基于state.domain的值来控制按钮的显示 -->
          <NButton type="primary"
                   size="large"
                   @click="handleAction(settingsStore.selectedOption)"
                   v-if="settingsStore.domainSearch">
            {{ t('index.onSubmit') }}
          </NButton>
        </div>
      </div>

      <ClientOnly>
        <CommonBulletin
            v-if="settingsStore.isBulletin && !styleStore.isPage"
            :text="`➡️ ${t('index.tips') }`"
        />
      </ClientOnly>

      <TabList @action="handleAction"/>
      <slot/>
    </div>
  </div>
  <CommonFooter/>
</template>

<style scoped>

</style>
