import {defineStore} from 'pinia'


export const useDomainStore = defineStore('useDomainStore', {
    state: () => {
        const {t} = useI18n()
        return {
            defaultDomainArr: [
                {
                    label: "本地接口",
                    name: "nuxt",
                    order: 0,
                    show: false,
                    disabled: true,
                    iName: "本地 DNS",
                    flag: 'material-symbols:dns-outline'
                },
                {
                    label: "WHO.CX",
                    name: "whocx",
                    order: 1,
                    show: true,
                    disabled: false,
                },
            ],
            newsDomainArr: [] as any,
        }
    },
    actions: {
        newDomainList() {
            this.newsDomainArr = this.defaultDomainArr;
        },
        checkNewsDomainUpdate() {
            // this.newsDomainArr = this.defaultDomainArr;
            const mainData = this.newsDomainArr;
            let updatedNum = 0;
            if (!mainData) return false;
            // console.log("列表尝试更新", this.defaultWhoisArr, this.newsWhoisArr);
            // 执行比较并迁移
            if (this.newsDomainArr.length > 0) {
                for (const newItem of this.defaultDomainArr) {
                    const exists = this.newsDomainArr.some(
                        (news: any) =>
                            newItem.label === news.label && newItem.name === news.name
                    );
                    if (!exists) {
                        // console.log("列表有更新：", newItem);
                        updatedNum++;
                        this.newsDomainArr.push(newItem);
                    }
                }
                if (updatedNum) useMessage().success(`成功更新 ${updatedNum} 个Domain数据`);
            } else {
                // console.log("列表无内容，写入默认");
                this.newsDomainArr = this.defaultDomainArr;
            }

        },
    },
    getters: {
        // 获取第一个展示的 Domain 服务器
        getFirstNewDomainShown: (state: any) => state.newsDomainArr.find((item: any) => item.show),
        // 判断是否有开启的 Domain 服务器
        getHasDomainShown(state: any) {
            return state.newsDomainArr.some((item: any) => item.show);
        },
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    },
})
