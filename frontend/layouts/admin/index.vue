<script setup lang="ts">
import {type MenuOption, NIcon} from "naive-ui";
import type {Component} from "vue";
import {Settings, Wrench, Pentagon, MessageCircleMore} from 'lucide-vue-next';

function renderIcon(icon: Component) {
  return () => h(NIcon, null, {default: () => h(icon)})
}

const route = useRoute()
const router = useRouter()

const menusOptions: MenuOption[] = [
  {
    label: '控制台',
    key: '/admin/dashboard',
    icon: renderIcon(Pentagon)
  },
  {
    label: 'Whois管理',
    key: 'whois',
    icon: renderIcon(Settings),
    children: [
      {
        label: '后缀管理',
        key: '/admin/whois/website',
        icon: renderIcon(Wrench),
      }
    ]
  },
  {
    label: 'Dns管理',
    key: 'dns',
    icon: renderIcon(Settings),
    children: [
      {
        label: '后缀管理',
        key: '/admin/whois/website',
        icon: renderIcon(Wrench),
      }
    ]
  },
  {
    label: 'Domain管理',
    key: 'domain',
    icon: renderIcon(Settings),
    children: [
      {
        label: '后缀管理',
        key: '/admin/whois/website',
        icon: renderIcon(Wrench),
      }
    ]
  },
  {
    label: '系统管理',
    key: 'settings',
    icon: renderIcon(Settings),
    children: [
      {
        label: '网站设置',
        key: '/admin/settings/website',
        icon: renderIcon(Wrench),
      },
      {
        label: '公告管理',
        key: '/admin/settings/bulletin',
        icon: renderIcon(MessageCircleMore),
      }
    ]
  }
]

const activeKey = computed(() => route.path)
console.log(route.path)

function handleMenuSelect(key: any, item: any) {
  if (isExternal(item.key)) {
    router.push(item.key)
  } else {
    router.push(item.key)
  }
}
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Left Sidebar -->
    <div class="w-64 text-black">
      <n-menu
          ref="menu"
          class="side-menu"
          accordion
          :indent="18"
          :collapsed-icon-size="22"
          :collapsed-width="64"
          :options="menusOptions"
          :value="activeKey"
          @update:value="handleMenuSelect"
      />
    </div>

    <!-- Right Content -->
    <div class="flex-1 p-10">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>
