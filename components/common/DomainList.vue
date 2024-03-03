<script setup lang="ts">
import {SupportedTLDs} from "~/utils/domain";

const isOpen = ref(false)
const {t} = useI18n()
</script>

<template>
  <div>
      <div title="Change Color">
        <div
            class="cursor-pointer	flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
            @click="isOpen = true"
        >
          <Icon name="mdi:about-circle-outline" class=" text-lg dark:text-white" />
        </div>
      </div>
    <USlideover
        v-model="isOpen"
        side="left"
    >
      <button>
      <Icon name="lets-icons:close-ring-light" class="absolute top-2 right-2 text-gray-500 cursor-pointer" @click="isOpen = false" />
      </button>
        <div class="p-4 flex-1">
        <div>{{t('index.support')}}：</div>
        <div class="flex flex-wrap mt-2 p-5 overflow-y-auto max-h-[95vh]">
      <span
          v-for="item in SupportedTLDs"
          :key="item"
          class="m-1 px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-200 rounded hover:bg-gray-300"
      >
        {{ item }}
      </span>
        </div>
      </div>
    </USlideover>
  </div>
</template>

<style scoped>

</style>
