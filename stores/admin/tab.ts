import { defineStore } from 'pinia'
interface Tab {
    icon: any
    path: any
    name: any
    title: any
}

export const useTabStore = defineStore('tab', {
    state: () => ({
        tabs: [] as any,
        activeTab: '',
        reloading: false,
    }),
    actions: {
        setActiveTab(path:string) {
            this.activeTab = path
        },
        setTabs(tabs:any) {
            this.tabs = tabs
        },
        addTab(tab: Tab) {
            const findIndex = this.tabs.findIndex((item:any) => item.path === tab.path);
            if (findIndex !== -1) {
                // Replace the existing tab with the new one
                this.tabs.splice(findIndex, 1, tab);
            } else {
                // Add the new tab
                this.tabs.push(tab);
            }
            // Assuming `setActiveTab` is correctly typed to accept a string
            this.setActiveTab(tab.path);
        },
        async removeTab(path:string) {
            this.setTabs(this.tabs.filter((tab:any) => tab.path !== path))
            if (path === this.activeTab) {
                const router = useRouter();
                await router.push(this.tabs[this.tabs.length - 1].path)
            }
        },
        async removeOther(curPath: string) {
            this.setTabs(this.tabs.filter((tab: any) => tab.path === curPath));
            if (curPath !== this.activeTab) {
                const router = useRouter();
                await router.push(this.tabs[this.tabs.length - 1].path);
            }
        },
        async removeLeft(curPath: string) {
            const curIndex = this.tabs.findIndex((item: any) => item.path === curPath);
            const filterTabs = this.tabs.filter((_: any, index: any) => index >= curIndex);
            this.setTabs(filterTabs);
            if (!filterTabs.find((item: any) => item.path === this.activeTab)) {
                const router = useRouter();
                await router.push(filterTabs[filterTabs.length - 1].path);
            }
        },
        async removeRight(curPath: string) {
            const curIndex = this.tabs.findIndex((item: any) => item.path === curPath);
            const filterTabs = this.tabs.filter((_: any, index: any) => index <= curIndex);
            this.setTabs(filterTabs);
            if (!filterTabs.find((item: any) => item.path === this.activeTab)) {
                const router = useRouter();
                await router.push(filterTabs[filterTabs.length - 1].path);
            }
        },
        async reloadTab(path: string) {
            const findItem = this.tabs.find((item:any) => item.path === path);
            if (!findItem) return;
            await refreshNuxtData()
        },
    },
    persist:true
})
