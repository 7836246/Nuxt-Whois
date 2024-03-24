import { defineStore } from 'pinia'
import { defaultLayout, naiveThemeOverrides } from '@/settings/settings'
import { useDark } from '@vueuse/core'
export const useAppStore = defineStore('app', {
    state: () => ({
        collapsed: false,
        // 直接在状态初始化时判断是否为暗模式
        isDark: useDark(),
        layout: defaultLayout,
        naiveThemeOverrides,
    }),
    actions: {
        switchCollapsed() {
            this.collapsed = !this.collapsed
        },
        setCollapsed(b:any) {
            this.collapsed = b
        },
        toggleDark() {
            this.isDark = !this.isDark
        },
        setLayout(v:any) {
            this.layout = v
        },
    },
    persist: true,
})
