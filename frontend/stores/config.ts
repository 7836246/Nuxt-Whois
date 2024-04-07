import {defineStore} from 'pinia'
import {front} from "~/apis/index";

export const useConfigStore = defineStore('useConfig', {
    state: () => {
        return {
            configServer: {
                whoisArr: [] as any,
                dnsArr: [] as any,
                domainArr: [] as any,
            },
            currentServer: {
                whois: 'nuxt',
                dns: 'nuxt',
                domain: 'nuxt',
            }
        }
    },
    actions: {
        async configServerInit() {
            // 获取网站whois设置
            try {
                const {data: whoisArray} = await front.home.GetWhoisServer('whois')
                this.configServer.whoisArr = whoisArray
            } catch (e) {
                this.configServer.whoisArr = []
            }
            // 获取网站dns设置
            try {
                const {data: dnsArray} = await front.home.GetWhoisServer('dns')
                this.configServer.dnsArr = dnsArray
            } catch (e) {
                this.configServer.dnsArr = []
            }

            // 获取网站域名设置
            try {
                const {data: domainArray} = await front.home.GetWhoisServer('domain')
                this.configServer.domainArr = domainArray
            } catch (e) {
                this.configServer.domainArr = []
            }
        },
        setCurrentServerWhois(whois: any) {
            this.currentServer.whois = whois
        },
        setCurrentServerDns(dns: any) {
            this.currentServer.dns = dns
        },
        setCurrenServerDomain(domain: any) {
            this.currentServer.domain = domain
        }
    },
    getters: {
        // 获取所有的 Whois 服务器
        getConfigServer: (state: any) => {
            return state.configServer
        },
    },
    persist: {
        storage: persistedState.localStorage,
    },
})
