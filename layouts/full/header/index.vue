<script setup lang="ts">
import { useDark, useToggle, useFullscreen } from '@vueuse/core'
import {useAppStore} from "~/stores/admin/app";

const appStore = useAppStore()
const isDark = useDark()
const toggleDark = () => {
  appStore.toggleDark()
  useToggle(isDark)()
}

const { isFullscreen, toggle } = useFullscreen()

function handleLinkClick(link:string) {
  window.open(link)
}
</script>

<template>
  <CommonAppCard class="flex items-center px-12" border-b="1px solid light_border dark:dark_border">
    <MenuCollapse />

    <BreadCrumb />

    <div class="ml-auto flex flex-shrink-0 items-center px-12 text-18" >
      <n-popover trigger="hover">
        <template #trigger>
          <div class="mr-16 f-c-c cursor-pointer rounded-4 p-6 text-22 transition-all-300 auto-bg-hover" @click="toggleDark">
            <!-- 根据 isDark 条件动态切换图标 -->
            <IconMoon v-if="isDark" />
            <IconSun v-else />
          </div>
        </template>
        <!-- 根据 isDark 条件动态切换提示文本 -->
        <span>{{ isDark ? '夜间模式' : '日间模式' }}</span>
      </n-popover>


      <n-popover trigger="hover">
        <template #trigger>
          <div class="mr-16 f-c-c cursor-pointer rounded-4 p-6 text-22 transition-all-300 auto-bg-hover" @click="toggle">
            <IconMinimize v-if="isFullscreen" />
            <IconMaximize v-else />
          </div>
        </template>
        <span>{{ isFullscreen ? '退出全屏' : '全屏模式' }}</span>
      </n-popover>

      <UserAvatar />
    </div>
  </CommonAppCard>
</template>

<style scoped>

</style>
