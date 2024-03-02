import { defineStore } from 'pinia'

export const useTimeStore = defineStore('timeZones', {
    state: () => {
        return {
            timeZones: 'UTC+8',
        }
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    },
})
