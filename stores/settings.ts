import { defineStore } from 'pinia'


export const useSettingsStore = defineStore('settings', {
    state: () => {
        const {t} = useI18n()
        return {
            isHistory: true,
            linkOpenType: 'currentWindow',
        }
    },
    actions: {
        setHistory(value: boolean) {
            this.isHistory = value
        },
        setLinkOpenType(value: string ) {
            this.linkOpenType = value
        },
    },
    getters: {
        getHistory: (state) => state.isHistory,
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    },
})
