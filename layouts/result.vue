<script setup lang="ts">
import {SupportedTLDs} from "~/utils/domain";

const { t } = useI18n()

const state = reactive({
  domain: '',
})

const toast = useToast();
const router = useRouter();
const handleAction = async (event: any) => {
  // 先拿到并处理域名
  const domain = state.domain.trim();

  // 分割域名为各部分
  const parts = domain.split('.');

  // 需要一个更严格的检查来确认域名格式是否正确
  if (parts.length < 2) {
    toast.add({
      title: '域名格式不正确',
    });
    return;
  }

  // 获取最后两个部分作为可能的顶级域名（TLD）
  const potentialTLD = parts.slice(-2).join('.');

  // 判断后缀是否合法
  if (!SupportedTLDs.has(parts.slice(-1)[0]) && !SupportedTLDs.has(potentialTLD)) {
    toast.add({
      title: '域名后缀不合法',
    });
    return;
  }

  // 确定是否是二级顶级域名
  let domainToKeep = domain;
  if (SupportedTLDs.has(potentialTLD)) {
    // 如果是二级顶级域名，保留最后三个部分
    domainToKeep = parts.length > 2 ? parts.slice(-3).join('.') : domain;
  } else {
    // 否则，只保留最后两个部分
    domainToKeep = parts.slice(-2).join('.');
  }

  // 更新state.domain为只包含顶级域名的版本
  state.domain = domainToKeep;

  // 跳转到结果页
  await router.push('/result/' + state.domain.replace(/\./g, '_') + '.html');
}

const timeStore = useTimeStore()
</script>

<template>
  <div class="w-full text-xs bg-[#F1F3F4] dark:bg-transparent">
    <div class=" max-w-screen-lg mx-auto pt-[5vh] px-[1em] pb-[10vh] ">
      <nav class=" w-full text-[#464747] h-5 dark:bg-gray-700">
        <NuxtLink class="mb-3 font-bold text-2xl inline-block text-current no-underline dark:text-white"
                  to="/"
        >
          <h1 class="inline-block text-current no-underline dark:text-white">Nuxt Whois</h1>
          <sup class="text-[#59a8d7] dark:text-[#ace4f8]">COM</sup>
        </NuxtLink>
      </nav>
      <div class="mt-6">
        <UForm :state="state"
               class="flex items-center space-x-2 mb-3 dark:text-white"
               @submit="handleAction">
          <!-- 容器div用于水平布局 -->
          <div class="flex-grow">
            <UInput
                v-model="state.domain"
                placeholder="输入域名"
                color="sky"
                size="xl"
                class="w-full " />
          </div>
          <!-- 使用v-if或v-show基于state.domain的值来控制按钮的显示 -->
          <UButton type="submit" color="sky" size="xl" v-if="state.domain">
            提交
          </UButton>
        </UForm>
      </div>

      <ClientOnly>
        <div class="flex justify-between w-full">
          <div>
            <!-- 左边的新元素 -->
            <UTooltip text="支持列表" :popper="{ placement: 'top' }">
              <CommonDomainList />
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
      <slot />
    </div>
  </div>
  <CommonFooter />
</template>

<style scoped>

</style>
