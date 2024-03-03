<script lang="ts" setup>
import {useSettingsStore} from "~/stores/settings";

const availableTimeZones = ref([
  { id: 1, name: 'currentWindow' },
  { id: 2, name: 'newWindow' },
]);
const {t} = useI18n()
const settingsStore = useSettingsStore()
</script>

<template>
  <div>
    <HeadlessListbox
        v-model="settingsStore.linkOpenType"
        as="div"
        class="relative flex items-center"
    >
      <HeadlessListboxLabel class="sr-only">
        Theme
      </HeadlessListboxLabel>
      <HeadlessListboxButton type="button" title="Change Color">
        <div
            class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
        >
          <Icon name="material-symbols:link" class=" text-lg dark:text-white" />
        </div>
      </HeadlessListboxButton>
      <HeadlessListboxOptions
          class="absolute top-full right-0 z-[999] mt-2 w-40 max-h-60 overflow-y-auto rounded-lg bg-white text-sm font-semibold text-gray-700 shadow-lg shadow-gray-300 outline-none dark:bg-gray-800 dark:text-white dark:shadow-gray-500 dark:ring-0"
      >
        <HeadlessListboxOption
            v-for="item in availableTimeZones"
            :key="item.id"
            :value="item.name"
            class="flex w-full cursor-pointer items-center justify-between py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-600"
            :class="{
            'text-white-500 bg-gray-200 dark:bg-gray-500/50':
              settingsStore.linkOpenType === item.name,
            'hover:bg-gray-200 dark:hover:bg-gray-700/30':
              settingsStore.linkOpenType !== item.name,
          }"
        >
    <span class="truncate">
      {{ t(`settings.${item.name}`) }}
    </span>
          <span class="flex items-center justify-center text-sm">
    </span>
        </HeadlessListboxOption>
      </HeadlessListboxOptions>
    </HeadlessListbox>
  </div>
</template>
