<script lang="ts" setup>
const switchLocalePath = useSwitchLocalePath()
const timeStore = useTimeStore()
const settingsStore = useSettingsStore()

const dnsStore = useDnsStore()

const {newsDnsArr} = storeToRefs(dnsStore)

const handlePost = async (name: string) => {
  dnsStore.moveToTop(name)
  //刷新数据
  await refreshNuxtData('dns')
}

</script>

<template>
  <div>
    <HeadlessListbox
        v-model="dnsStore.newsDnsArr"
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
          <Icon name="gg:select-o" class=" text-lg dark:text-white" size="20"/>
        </div>
      </HeadlessListboxButton>

      <HeadlessListboxOptions
          class="absolute top-full right-0 z-[999] mt-2 w-40 overflow-hidden rounded-lg bg-white text-sm font-semibold text-gray-700 shadow-lg shadow-gray-300 outline-none dark:bg-gray-800 dark:text-white dark:shadow-gray-500 dark:ring-0"
      >
        <div
            v-for="lang in newsDnsArr"
            :key="lang.name"
            @click="handlePost(lang.name)"
            :class="{
            'flex w-full cursor-pointer items-center justify-between py-2 px-3 text-white-500 bg-gray-200 dark:bg-gray-500/50':
              dnsStore.getFirstNewDnsShown.name === lang.name && lang.show,
            'flex w-full cursor-pointer items-center justify-between py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700/30':
              dnsStore.getFirstNewDnsShown.name !== lang.name  && lang.show,
          }"
        >
          <span
              v-if="lang.show"
              class="truncate">
            {{ lang.iName }}
          </span>
          <span
              v-if="lang.show"
              class="flex items-center justify-center text-sm">
             <Icon :name="lang.flag" class="text-base" size="20"/>
          </span>
        </div>
      </HeadlessListboxOptions>
    </HeadlessListbox>
  </div>
</template>
