import {defineStore} from 'pinia'


export const useWhoisStore = defineStore('useWhoisStore', {
    state: () => {
        const {t} = useI18n()
        return {
            defaultWhoisArr: [
                {
                    label: "本地接口",
                    name: "nuxt",
                    order: 0,
                    show: true,
                    disabled: false,
                },
                {
                    label: "WHO.CX",
                    name: "whocx",
                    order: 1,
                    show: true,
                    disabled: false,
                },
                {
                    label: "TIAN.HU",
                    name: "tianhu",
                    order: 2,
                    show: true,
                    disabled: false,
                },
                {
                    label: "蛙蛙工具",
                    name: "iamwawa",
                    order: 3,
                    show: true,
                    disabled: false,
                },
            ],
            newsWhoisArr: [] as any,
        }
    },
    actions: {
        newWhoisList() {
            this.newsWhoisArr = this.defaultWhoisArr;
        },
        // 检查更新
        checkNewsWhoisUpdate() {
            const mainData = this.newsWhoisArr;
            let updatedNum = 0;
            if (!mainData) return false;
            // console.log("列表尝试更新", this.defaultWhoisArr, this.newsWhoisArr);
            // 执行比较并迁移
            if (this.newsWhoisArr.length > 0) {
                for (const newItem of this.defaultWhoisArr) {
                    const exists = this.newsWhoisArr.some(
                        (news: any) =>
                            newItem.label === news.label && newItem.name === news.name
                    );
                    if (!exists) {
                        // console.log("列表有更新：", newItem);
                        updatedNum++;
                        this.newsWhoisArr.push(newItem);
                    }
                }
                if (updatedNum) useMessage().success(`成功更新 ${updatedNum} 个Whois数据`);
            } else {
                // console.log("列表无内容，写入默认");
                this.newsWhoisArr = this.defaultWhoisArr;
            }
        },
    },
    getters: {
        // 获取所有的 Whois 服务器
        getNewDnsArr: (state: any) => state.newsDnsArr,
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    },
})
