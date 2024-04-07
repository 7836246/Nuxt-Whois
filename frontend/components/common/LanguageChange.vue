<script lang="ts" setup>

const switchLocalePath = useSwitchLocalePath()

const { locale } = useI18n()

const local = computed(() => {
  return locale.value
})

const availableLocales = [
  { iso: 'en', name: 'English', flag: 'twemoji:flag-us-outlying-islands' },
  { iso: 'zh', name: '中文简体', flag: 'emojione-v1:flag-for-china' },
  { iso: 'tw', name: '中文繁体', flag: 'flag:tw-4x3' },
  // 添加更多语言...
]
</script>

<template>
  <div>
    <HeadlessListbox
        v-model="local"
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
          <Icon name="i-ph:translate-bold" class=" text-lg dark:text-white" size="20" />
        </div>
      </HeadlessListboxButton>
      <HeadlessListboxOptions
          class="absolute top-full right-0 z-[999] mt-2 w-40 overflow-hidden rounded-lg bg-white text-sm font-semibold text-gray-700 shadow-lg shadow-gray-300 outline-none dark:bg-gray-800 dark:text-white dark:shadow-gray-500 dark:ring-0"
      >
        <NuxtLink
            v-for="lang in availableLocales"
            :key="lang.iso"
            :to="switchLocalePath(lang.iso)"
            class="flex w-full cursor-pointer items-center justify-between py-2 px-3"
            :class="{
            'text-white-500 bg-gray-200 dark:bg-gray-500/50':
              local === lang.iso,
            'hover:bg-gray-200 dark:hover:bg-gray-700/30':
              local !== lang.iso,
          }"
        >
          <span class="truncate">
            {{ lang.name }}
          </span>
          <span class="flex items-center justify-center text-sm">
             <Icon :name="lang.flag" class="text-base" size="20" />
          </span>
        </NuxtLink>
      </HeadlessListboxOptions>
    </HeadlessListbox>
  </div>
</template>
