import { defineStore } from 'pinia'

interface HistoryRecord {
    id: number;
    type: string;
    domain: string;
    path: string;
    date: string;
}

export const useStyleStore = defineStore('style', {
    state: () => {
        return {
            isPage: true,
            history: [] as HistoryRecord[],
        }
    },
    actions: {
        setIsPage(isPage: boolean) {
            this.isPage = isPage
        },
        setHistory(history: any) {
            this.history = history
        },
        addOrUpdateHistory(newHistory: {
            date: string;
            path: any;
            domain: any;
            id: any;
            type: string
        }) {
            const existingIndex = this.history.findIndex(history => history.domain === newHistory.domain && history.type === newHistory.type);

            if (existingIndex !== -1) {
                // 更新存在的记录的时间戳
                this.history[existingIndex].date = new Date().toISOString();
            } else {
                // 添加新记录之前，检查是否已达到保存记录的最大数量
                if (this.history.length >= 30) {
                    // 确保历史记录按时间降序排列
                    this.history.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                    // 移除最旧的记录
                    this.history.pop();
                }

                // 添加新的记录
                const record: HistoryRecord = {
                    ...newHistory,
                    id: Date.now(),
                    date: new Date().toISOString(),
                };
                this.history.unshift(record); // 添加到数组的开头
            }

            // 再次确保历史记录按时间降序排列
            this.history.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        },
        deleteHistory(id: number) {
            const index = this.history.findIndex(history => history.id === id);
            if (index !== -1) {
                this.history.splice(index, 1);
            }
        }
    },
    getters: {
        getIsPage(state) {
            return state.isPage
        },
        getHistory(state) {
            return state.history
        }
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
    }),
    },
})
