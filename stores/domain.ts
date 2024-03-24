import {defineStore} from 'pinia';
import serversData from '~/server/whois/json/whois-servers.json';

// 定义接口来描述state的结构
interface DomainState {
    SupportedTLDs: Record<string, string>;
}

export const useDomainListStore = defineStore('useDomainListStore', {
    // 使用箭头函数和类型注解定义state
    state: (): DomainState => ({
        SupportedTLDs: {...serversData},
    }),
    actions: {
        async addSuffix(suffix: string, server: string) {
            const response = await $fetch('/api/addSuffix', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({suffix, server}),
            });

            if (response.message === 'ok') {
                // 更新本地状态
                await nextTick();
                this.SupportedTLDs[suffix] = server;
            }
        },
        async removeSuffix(suffix: string) {
            const response = await $fetch('/api/removeSuffix', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({suffix}),
            });

            if (response.message === 'ok') {
                await nextTick();
                // 更新本地状态
                delete this.SupportedTLDs[suffix];
            }
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
});
