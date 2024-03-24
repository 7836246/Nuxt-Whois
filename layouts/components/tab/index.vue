<script setup lang="ts">
import ContextMenu from './ContextMenu.vue'
import {useTabStore} from "~/stores/admin/tab";


const router = useRouter()
// const appStore = useAppStore()
const tabStore = useTabStore()

const contextMenuOption = reactive({
  show: false,
  x: 0,
  y: 0,
  currentPath: '',
})

const handleItemClick = (path:any) => {
  tabStore.setActiveTab(path)
  router.push(path)
}

function showContextMenu() {
  contextMenuOption.show = true
}
function hideContextMenu() {
  contextMenuOption.show = false
}
function setContextMenu(x:any, y:any, currentPath:any) {
  Object.assign(contextMenuOption, { x, y, currentPath })
}

// 右击菜单
async function handleContextMenu(e:any, tagItem:any) {
  const { clientX, clientY } = e
  hideContextMenu()
  setContextMenu(clientX, clientY, tagItem.path)
  await nextTick()
  showContextMenu()
}

</script>

<template>
  <div>
    <n-tabs
        :value="tabStore.activeTab"
        :closable="tabStore.tabs.length > 1"
        :style="`--selected-bg: ${appStore.isDark ? '#1b2429' : '#eaf0f1'}`"
        type="card"
        @close="(path) => tabStore.removeTab(path)"
    >
      <n-tab
          v-for="item in tabStore.tabs"
          :key="item.path"
          :name="item.path"
          @click="handleItemClick(item.path)"
          @contextmenu.prevent="handleContextMenu($event, item)"
      >
        {{ item.title }}
      </n-tab>
    </n-tabs>

    <ContextMenu
        v-if="contextMenuOption.show"
        v-model:show="contextMenuOption.show"
        :current-path="contextMenuOption.currentPath"
        :x="contextMenuOption.x"
        :y="contextMenuOption.y"
    />
  </div>
</template>

<style scoped lang="scss">
:deep(.n-tabs) {
  .n-tabs-tab {
    padding-left: 16px;
    height: 36px;
    background: transparent !important;
    border-radius: 4px !important;
    margin-right: 4px;
    &:hover {
      border: 1px solid var(--primary-color) !important;
    }
  }
  .n-tabs-tab--active {
    border: 1px solid var(--primary-color) !important;
    background-color: var(--selected-bg) !important;
  }
  .n-tabs-pad,
  .n-tabs-tab-pad,
  .n-tabs-scroll-padding {
    border: none !important;
  }
}
</style>
