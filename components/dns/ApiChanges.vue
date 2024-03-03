<script lang="ts" setup>
import {useTimeStore} from "~/stores/time";

const switchLocalePath = useSwitchLocalePath()
const timeStore = useTimeStore()

const availableDns = [
  { iso: '', name: '本地 DNS', flag: 'material-symbols:dns-outline' },
  { iso: 'google', name: 'Google', flag: 'flat-color-icons:google' },
  { iso: 'aliyun', name: 'AliYun', flag: 'ant-design:aliyun-outlined' },
  { iso: 'tencent', name: 'Tencent', flag: 'emojione:cloud' },
  { iso: 'cloudflare', name: 'CloudFlare', flag: 'skill-icons:cloudflare-light' },
  // 添加更多语言...
]

const handlePost = async (iso: string) => {
  timeStore.setDnsServer(iso)
  //刷新数据
  await refreshNuxtData('dns')
}
</script>

<template>
  <div>
    <HeadlessListbox
        v-model="timeStore.getDnsServer"
        as="div"
        class="relative flex items-center"
    >
      <HeadlessListboxLabel class="sr-only">
        Change Language
      </HeadlessListboxLabel>
      <HeadlessListboxButton type="button" title="Change Language">
        <div
            class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
        >
          <Icon name="gg:select-o" class=" text-lg dark:text-white" size="20" />
        </div>
      </HeadlessListboxButton>
      <HeadlessListboxOptions
          class="absolute top-full right-0 z-[999] mt-2 w-40 overflow-hidden rounded-lg bg-white text-sm font-semibold text-gray-700 shadow-lg shadow-gray-300 outline-none dark:bg-gray-800 dark:text-white dark:shadow-gray-500 dark:ring-0"
      >
        <div
            v-for="lang in availableDns"
            :key="lang.iso"
            @click="handlePost(lang.iso)"
            class="flex w-full cursor-pointer items-center justify-between py-2 px-3"
            :class="{
            'text-white-500 bg-gray-200 dark:bg-gray-500/50':
              timeStore.getDnsServer === lang.iso,
            'hover:bg-gray-200 dark:hover:bg-gray-700/30':
              timeStore.getDnsServer !== lang.iso,
          }"
        >
          <span class="truncate">
            {{ lang.name }}
          </span>
          <span class="flex items-center justify-center text-sm">
             <Icon :name="lang.flag" class="text-base" size="20" />
          </span>
        </div>
      </HeadlessListboxOptions>
    </HeadlessListbox>
  </div>
</template>
