<script setup lang="ts">
import {SupportedTLDs} from "~/utils/domain";
import {useStyleStore} from "~/stores/style";

const { t } = useI18n()

const state = reactive({
  domain: '',
})

const toast = useToast();
const router = useRouter();

const runtimeConfig = useRuntimeConfig()
const localePath = useLocalePath()
const settingsStore = useSettingsStore()

const handleAction = async (url: any) => {
  if (!state.domain) return toast.add({ title: '请输入域名' })
  let domain = trimDomain(state.domain);
  const parts = splitDomain(domain);

  if (!validateDomain(parts) || !isTLDValid(parts)) return;

  domain = updateDomainForTLD(parts);
  state.domain = domain;

  const isLink = ref({})
  isLink.value = settingsStore.linkOpenType != 'currentWindow'
  await router.push(localePath(`/${url}/${state.domain.replace(/\./g, '_')}.html`))
}


const trimDomain = (domain: string): string => {
  return domain.trim().toLowerCase(); // 确保域名为小写
};

const splitDomain = (domain: string): string[] => {
  return domain.split('.');
};

const validateDomain = (parts: string[]): boolean => {
  if (parts.length < 2) {
    toast.add({ title: '域名格式不正确' });
    return false;
  }
  return true;
};


const isTLDValid = (parts: string[]): boolean => {
  const lastPart = parts[parts.length - 1].toLowerCase(); // 获取最后一部分，并确保为小写
  const potentialTLD = parts.slice(-2).join('.').toLowerCase(); // 获取可能的多部分TLD，并确保为小写

  if (!SupportedTLDs.has(lastPart) && !SupportedTLDs.has(potentialTLD)) {
    toast.add({ title: '域名后缀不合法' });
    return false;
  }
  return true;
};


const updateDomainForTLD = (parts: string[]): string => {
  const potentialTLD = parts.slice(-2).join('.').toLowerCase(); // 确保为小写
  let domainToKeep: string;
  if (SupportedTLDs.has(potentialTLD)) {
    domainToKeep = parts.length > 2 ? parts.slice(-3).join('.') : parts.join('.');
  } else {
    domainToKeep = parts.slice(-2).join('.');
  }
  return domainToKeep;
};

const styleStore = useStyleStore()
const clientMounted = ref(false);


onMounted(() => {
  clientMounted.value = true;
});
</script>

<template>
  <div
      class="w-full text-xs bg-[#F1F3F4] dark:bg-transparent"
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
        <UForm :state="state"
               class="flex items-center space-x-2 mb-3 dark:text-white"
               @submit="handleAction('whois')">
          <!-- 容器div用于水平布局 -->
          <div class="flex-grow">
            <UInput
                v-model="state.domain"
                :placeholder="t('index.placeholder')"
                color="sky"
                size="xl"
                class="w-full " />
          </div>
          <!-- 使用v-if或v-show基于state.domain的值来控制按钮的显示 -->
          <UButton type="submit" color="sky" size="xl" v-if="state.domain">
            {{ t('index.onSubmit') }}
          </UButton>
        </UForm>
      </div>
     <CommonBulletin
         v-if="!styleStore.isPage && clientMounted"
         :text="`➡️ ${t('index.tips') }`"
     />

      <TabList @action="handleAction"  />
      <slot />
    </div>
  </div>
  <CommonFooter />
</template>

<style scoped>

</style>
