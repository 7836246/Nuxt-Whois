import { defineStore } from 'pinia'

export const useTimeStore = defineStore('timeZones', {
    state: () => {
        return {
            timeZones: 'UTC+8',
            dnsServer: '',
        }
    },
    actions: {
        setTimeZones(timeZones: string) {
            this.timeZones = timeZones
        },
        setDnsServer(dnsServer: string) {
            this.dnsServer = dnsServer
        },
    },
    getters: {
        getTimeZones(state) {
            return state.timeZones
        },
        getDnsServer(state) {
            return state.dnsServer
        },
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    },
})
