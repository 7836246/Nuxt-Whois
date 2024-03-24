import {defineStore} from 'pinia'


export const useSettingsStore = defineStore('settings', {
    state: () => {
        const {t} = useI18n()
        return {
            isHistory: true,
            isBulletin: true,
            isDomainList: true,
            linkOpenType: 'currentWindow',
            selectedOption: 'whois',
            domainSearch: '',
        }
    },
    actions: {
        setHistory(value: boolean) {
            this.isHistory = value
        },
        setLinkOpenType(value: string) {
            this.linkOpenType = value
        },
        setSelectedOption(name: string) {
            this.selectedOption = name;
        }
    },
    getters: {
        getHistory: (state: any) => state.isHistory,
        getDomain(state: any) {
            return state.domainSearch;
        }
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    },
})
