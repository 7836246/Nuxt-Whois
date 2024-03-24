<script setup lang="ts">
import AppTab from '@/layouts/components/tab/index'
import SideBar from './sidebar/index.vue'
import AppHeader from './header/index.vue'
import {useAppStore} from "~/stores/admin/app";

const appStore = useAppStore()
</script>

<template>
  <div class="wh-full flex">
    <aside
        class="flex-col flex-shrink-0 transition-width-300"
        :class="appStore.collapsed ? 'w-64' : 'w-220'"
        border-r="1px solid light_border dark:dark_border"
    >
      <SideBar />
    </aside>

    <article class="w-0 flex-col flex-1">
      <AppHeader class="h-60 flex-shrink-0" />
      <div class="p-12" border-b="1px solid light_border dark:dark_border">
        <AppTab class="flex-shrink-0" />
      </div>
      <slot />
    </article>
  </div>
</template>

<style scoped>
.collapsed {
  width: 64px;
}
</style>
