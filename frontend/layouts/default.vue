<script setup lang="ts">

const route = useRoute()
const router = useRouter();
const {t} = useI18n()
const localePath = useLocalePath()
const message = useMessage()
const settingsStore = useSettingsStore()
const {isObj, domainSearch, selectedOption, webSiteConfig} = storeToRefs(settingsStore)

//设置不同页面的样式
const stylePage = computed(() => {
  return route.meta?.stylePage
})

// 提取主域名的函数，直接返回提取结果，不尝试猜测二级顶级域名
const handleAction = async (url) => {
  const etDomainSearch = ExtractDomain(domainSearch.value);
  switch (url) {
    case 'whois':
      // 使用正则表达式校验提取的主域名
      if (DomainRegex.test(etDomainSearch)) {
        // 将正确数据进行记录
        domainSearch.value = etDomainSearch;
        // 参数校验成功，进行跳转
        const urlType = etDomainSearch.replace(/\./g, '_');
        await router.push(localePath(`/whois/${urlType}.html`));
      } else if (Ipv4Regex.test(domainSearch.value)) {
        // 处理用户操作的异步函数
        const urlType = domainSearch.value.replace(/\./g, '_');
        await router.push(localePath(`/whois/${urlType}.html`));
      } else {
        message.error('请输入有效的域名或IP地址')
        return;
      }
      break;
    case 'dns':
      // 使用正则表达式校验提取的主域名
      if (DomainRegex.test(etDomainSearch)) {
        // 将正确数据进行记录
        domainSearch.value = etDomainSearch;
        // 参数校验成功，进行跳转
        const urlType = etDomainSearch.replace(/\./g, '_');
        await router.push(localePath(`/dns/${urlType}.html`));
      } else if (Ipv4Regex.test(domainSearch.value)) {
        // 处理用户操作的异步函数
        const urlType = domainSearch.value.replace(/\./g, '_');
        await router.push(localePath(`/dns/${urlType}.html`));
      } else {
        message.error('请输入有效的域名或IP地址')
        return;
      }
      return
  }
}
const handleSelectOptions = (value: any) => {
  settingsStore.setSelectedOption(value);
}
</script>

<template>
  <div
      class="w-full text-xs bg-[#F1F3F4] dark:bg-transparent"
      :class="{ 'h-[90vh]': !stylePage }"
  >
    <div
        class=" max-w-screen-lg mx-auto px-[1em] pb-[10vh] "
        :class="{ 'pt-[25vh]': !stylePage, 'pt-[5vh]': stylePage }"
    >
      <nav
          v-if="isObj.isLogo"
          class=" w-full text-[#464747] h-5 ">
        <NuxtLink class="mb-3 font-bold text-2xl inline-block text-current no-underline dark:text-white"
                  :to="localePath('/')"
        >
          <h1 class="inline-block text-current no-underline dark:text-white">{{ webSiteConfig.logoLeftText }}</h1>
          <sup class="text-[#59a8d7] dark:text-[#ace4f8]">{{ webSiteConfig.logoRightText }}</sup>
        </NuxtLink>
      </nav>
      <div class="mt-6">
        <ClientOnly>
          <div class="flex items-center space-x-2 mb-3 dark:text-white"
          >
            <!-- 容器div用于水平布局 -->
            <div class="flex-grow">
              <NInputGroup>
                <n-select
                    class="w-1/4"
                    size="large"
                    v-model:value="selectedOption"
                    :options="webSiteConfig.defaultSelectOptions"
                    @update:value="handleSelectOptions"
                />
                <NAutoComplete
                    v-model:value="domainSearch"
                    @keyup.enter="handleAction(settingsStore.selectedOption)"
                    :input-props="{ autocomplete: 'off' }"
                    type="text"
                    :placeholder="t('index.placeholder')"
                    size="large"
                    clearable
                    autofocus
                    class="w-full ">
                </NAutoComplete>
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
        </ClientOnly>
      </div>

      <CommonBulletin
          v-if="!stylePage && isObj.isBulletin"
          :text="`➡️ ${t('index.tips') }`"
      />

      <TabList @action="handleAction"/>
      <slot/>
    </div>
  </div>
  <CommonFooter/>
</template>

<style scoped>

</style>
