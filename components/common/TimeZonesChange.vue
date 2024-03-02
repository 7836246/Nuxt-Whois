<script lang="ts" setup>

import {useTimeStore} from "~/stores/time";

const availableTimeZones = ref([
  { id: 1, name: 'UTC-12', displayName: 'International Date Line West' },
  { id: 2, name: 'UTC-11', displayName: 'Coordinated Universal Time-11' },
  { id: 3, name: 'UTC-10', displayName: 'Hawaii' },
  { id: 4, name: 'UTC-9', displayName: 'Alaska' },
  { id: 5, name: 'UTC-8', displayName: 'Pacific Time (US & Canada)' },
  { id: 6, name: 'UTC-7', displayName: 'Mountain Time (US & Canada)' },
  { id: 7, name: 'UTC-6', displayName: 'Central Time (US & Canada), Mexico City' },
  { id: 8, name: 'UTC-5', displayName: 'Eastern Time (US & Canada), Bogota, Lima' },
  { id: 9, name: 'UTC-4', displayName: 'Atlantic Time (Canada), Caracas, La Paz' },
  { id: 10, name: 'UTC-3', displayName: 'Buenos Aires, Georgetown' },
  { id: 11, name: 'UTC-2', displayName: 'Coordinated Universal Time-02' },
  { id: 12, name: 'UTC-1', displayName: 'Azores' },
  { id: 13, name: 'UTC', displayName: 'Coordinated Universal Time' },
  { id: 14, name: 'UTC+1', displayName: 'Brussels, Copenhagen, Madrid, Paris' },
  { id: 15, name: 'UTC+2', displayName: 'Athens, Bucharest, Istanbul' },
  { id: 16, name: 'UTC+3', displayName: 'Moscow, St. Petersburg, Nairobi' },
  { id: 17, name: 'UTC+3:30', displayName: 'Tehran' },
  { id: 18, name: 'UTC+4', displayName: 'Abu Dhabi, Muscat' },
  { id: 19, name: 'UTC+4:30', displayName: 'Kabul' },
  { id: 20, name: 'UTC+5', displayName: 'Islamabad, Karachi, Tashkent' },
  { id: 21, name: 'UTC+5:30', displayName: 'Chennai, Kolkata, Mumbai, New Delhi' },
  { id: 22, name: 'UTC+5:45', displayName: 'Kathmandu' },
  { id: 23, name: 'UTC+6', displayName: 'Astana, Dhaka' },
  { id: 24, name: 'UTC+6:30', displayName: 'Yangon (Rangoon)' },
  { id: 25, name: 'UTC+7', displayName: 'Bangkok, Hanoi, Jakarta' },
  { id: 26, name: 'UTC+8', displayName: 'Beijing, Hong Kong, Singapore, Taipei' },
  { id: 27, name: 'UTC+9', displayName: 'Osaka, Sapporo, Tokyo' },
  { id: 28, name: 'UTC+9:30', displayName: 'Adelaide, Darwin' },
  { id: 29, name: 'UTC+10', displayName: 'Brisbane, Canberra, Melbourne, Sydney' },
  { id: 30, name: 'UTC+11', displayName: 'Solomon Is., New Caledonia' },
  { id: 31, name: 'UTC+12', displayName: 'Auckland, Wellington' },
  { id: 32, name: 'UTC+13', displayName: 'Nuku alofa' }
]);

const timeStore = useTimeStore()
</script>

<template>
  <div>
    <HeadlessListbox
        v-model="timeStore.timeZones"
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
          <Icon name="ri:time-zone-line" class=" text-lg dark:text-white" />
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
              timeStore.timeZones === item.name,
            'hover:bg-gray-200 dark:hover:bg-gray-700/30':
              timeStore.timeZones !== item.name,
          }"
        >
    <span class="truncate">
      {{ item.name }}
    </span>
          <span class="flex items-center justify-center text-sm">
    </span>
        </HeadlessListboxOption>
      </HeadlessListboxOptions>
    </HeadlessListbox>
  </div>
</template>
