<script lang="ts" setup>
const colorMode = useColorMode()
const availableColor = ref([
  {
    id: 1,
    name: 'system',
    icon: 'ph:laptop-duotone',
  },
  {
    id: 2,
    name: 'dark',
    icon: 'ph:moon-stars-duotone',
  },
  {
    id: 3,
    name: 'light',
    icon: 'ph:sun-dim-duotone',
  },
])
</script>

<template>
  <div>
    <HeadlessListbox
        v-model="$colorMode.preference"
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
          <Icon name="ph:palette-duotone" class=" text-lg dark:text-white"/>
        </div>
      </HeadlessListboxButton>
      <HeadlessListboxOptions
          class="absolute top-full right-0 z-[999] mt-2 w-40 overflow-hidden rounded-lg bg-white text-sm font-semibold text-gray-700 shadow-lg shadow-gray-300 outline-none dark:bg-gray-800 dark:text-white dark:shadow-gray-500 dark:ring-0"
      >
        <HeadlessListboxOption
            v-for="color in availableColor"
            :key="color.id"
            :value="color.name"
            class="flex w-full cursor-pointer items-center justify-between py-2 px-3"
            :class="{
            'text-white-500 bg-gray-200 dark:bg-gray-500/50':
              colorMode.preference === color.name,
            'hover:bg-gray-200 dark:hover:bg-gray-700/30':
              colorMode.preference !== color.name,
          }"
        >
          <span class="truncate">
            {{ color.name }}
          </span>
          <span class="flex items-center justify-center text-sm">
            <Icon :name="color.icon" class="text-base"/>
          </span>
        </HeadlessListboxOption>
      </HeadlessListboxOptions>
    </HeadlessListbox>
  </div>
</template>
