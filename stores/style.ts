import { defineStore } from 'pinia'

export const useStyleStore = defineStore('style', {
    state: () => {
        return {
            isPage: true,
        }
    },
    actions: {
        setIsPage(isPage: boolean) {
            this.isPage = isPage
        },
    },
})
