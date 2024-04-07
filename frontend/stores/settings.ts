import {defineStore} from 'pinia'
import {front} from "~/apis/index";

interface HistoryRecord {
    id: number;
    type: string;
    domain: string;
    path: string;
    date: string;
}

export const useSettingsStore = defineStore('settings', {
    state: () => {
        return {
            webSiteConfig: {} as WebSiteConfig,
            isObj: {
                isHistory: false, // 是否显示历史记录
                isBulletin: false, // 是否显示公告
                isDomainList: false, // 是否显示域名列表
                isLogo: true, // 是否显示logo
            },
            histories: [] as HistoryRecord[], //页面模式下的历史记录
            selectedOption: 'whois', // 默认查询类型
            domainSearch: '', // 域名搜索
            timeZones: 'UTC+8', // 时区
        }
    },
    actions: {
        async webSiteConfigInit() {
            try {
                // @ts-ignore
                const {data: webData} = await front.home.GetWebSiteConfig()
                this.webSiteConfig = webData;
            } catch (e) {
                this.webSiteConfig = {} as WebSiteConfig;
            }
        },
        // 设置历史记录
        setHistories(histories: any) {
            this.histories = histories
        },
        // 添加或更新历史记录
        addOrUpdateHistory(newHistory: {
            date: string;
            path: any;
            domain: any;
            id: any;
            type: string
        }) {
            const existingIndex = this.histories.findIndex(
                history =>
                    history.domain === newHistory.domain
                    && history.type === newHistory.type);
            if (existingIndex !== -1) {
                // 更新存在的记录的时间戳
                this.histories[existingIndex].date = new Date().toISOString();
            } else {
                // 添加新记录之前，检查是否已达到保存记录的最大数量
                if (this.histories.length >= 30) {
                    // 确保历史记录按时间降序排列
                    this.histories.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                    // 移除最旧的记录
                    this.histories.pop();
                }

                // 添加新的记录
                const record: HistoryRecord = {
                    ...newHistory,
                    id: Date.now(),
                    date: new Date().toISOString(),
                };
                this.histories.unshift(record); // 添加到数组的开头
            }

            // 再次确保历史记录按时间降序排列
            this.histories.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        },
        deleteHistory(id: number) {
            const index = this.histories.findIndex(history => history.id === id);
            if (index !== -1) {
                this.histories.splice(index, 1);
            }
        },
        setSelectedOption(name: string) {
            this.selectedOption = name;
        },
        setTimeZones(timeZones: string) {
            this.timeZones = timeZones
        },
    },
    getters: {
        //是否显示历史记录
        getIsDomainList: (state: any) => state.isObj.isDomainList,
        //是否显示公告
        getIsBulletin: (state: any) => state.isObj.isBulletin,
        // 是否显示历史记录
        getIsHistory: (state: any) => state.isObj.isHistory,
        // 是否显示logo
        getIsLogo: (state: any) => state.isObj.isLogo,
        // 获取历史记录
        getHistories(state) {
            return state.histories
        },
        // 获取上次搜索的记录
        getDomain(state: any) {
            return state.domainSearch;
        },
        // 获取时区
        getTimeZones(state) {
            return state.timeZones
        },
    },
    persist: {
        // 持久化存储到 Cookie 中
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    },
})
