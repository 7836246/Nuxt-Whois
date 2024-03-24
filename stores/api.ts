import {defineStore} from 'pinia'


export const useApisStore = defineStore('apis', {
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
            defaultDnsArr: [
                {
                    label: "本地接口",
                    name: "nuxt",
                    order: 0,
                    show: true,
                    disabled: false,
                    iName: "本地 DNS",
                    flag: 'material-symbols:dns-outline'
                },
                {
                    label: "Google",
                    name: "google",
                    order: 1,
                    show: true,
                    disabled: false,
                    iName: 'Google',
                    flag: 'flat-color-icons:google'
                },
                {
                    label: "AliYun",
                    name: "aliyun",
                    order: 2,
                    show: true,
                    disabled: false,
                    iName: 'AliYun',
                    flag: 'ant-design:aliyun-outlined'
                },
                {
                    label: "Tencent",
                    name: "tencent",
                    order: 3,
                    show: true,
                    disabled: false,
                    iName: 'Tencent',
                    flag: 'emojione:cloud'
                },
                {
                    label: "Cloudflare",
                    name: "cloudflare",
                    order: 4,
                    show: false,
                    disabled: true,
                    iName: 'CloudFlare',
                    flag: 'skill-icons:cloudflare-light'
                }
            ],
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
            newsWhoisArr: [] as any,
            newsDnsArr: [] as any,
            newsDomainArr: [] as any,
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
        newDnsList() {
            this.newsDnsArr = this.defaultDnsArr;
        },
        checkNewsDnsUpdate() {
            const mainData = this.newsDnsArr;
            let updatedNum = 0;
            if (!mainData) return false;
            // console.log("列表尝试更新", this.defaultWhoisArr, this.newsWhoisArr);
            // 执行比较并迁移
            if (this.newsDnsArr.length > 0) {
                for (const newItem of this.defaultDnsArr) {
                    const exists = this.newsDnsArr.some(
                        (news: any) =>
                            newItem.label === news.label && newItem.name === news.name
                    );
                    if (!exists) {
                        // console.log("列表有更新：", newItem);
                        updatedNum++;
                        this.newsDnsArr.push(newItem);
                    }
                }
                if (updatedNum) useMessage().success(`成功更新 ${updatedNum} 个Dns数据`);
            } else {
                // console.log("列表无内容，写入默认");
                this.newsDnsArr = this.defaultDnsArr;
            }
        },
        newListAdd() {
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
        moveToTop(name: string) {
            // 找到对应元素的索引
            const index = this.newsDnsArr.findIndex((item: any) => item.name === name);
            if (index === -1) return; // 如果没找到，直接返回

            // 获取该元素
            const itemToMove = this.newsDnsArr.splice(index, 1)[0];
            // 将该元素移动到数组的开头
            this.newsDnsArr.unshift(itemToMove);

            // 可选：如果您想同时更新所有元素的order属性以反映新的顺序
            this.newsDnsArr.forEach((item: any, idx: any) => {
                item.order = idx;
            });
        },
        moveDomainToTop(name: string) {
            // 找到对应元素的索引
            const index = this.newsDomainArr.findIndex((item: any) => item.name === name);
            if (index === -1) return; // 如果没找到，直接返回

            // 获取该元素
            const itemToMove = this.newsDomainArr.splice(index, 1)[0];
            // 将该元素移动到数组的开头
            this.newsDomainArr.unshift(itemToMove);

            // 可选：如果您想同时更新所有元素的order属性以反映新的顺序
            this.newsDomainArr.forEach((item: any, idx: any) => {
                item.order = idx;
            });
        },
    },
    getters: {
        // 获取所有的 Whois 服务器
        getNewDnsArr: (state: any) => state.newsDnsArr,
        // 获取第一个展示的 Dns 服务器
        getFirstNewDnsShown: (state: any) => state.newsDnsArr.find((item: any) => item.show),
        //判断是否有开启的 Dns 服务器
        getHasShownItems(state: any) {
            return state.newsDnsArr.some((item: any) => item.show);
        },
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
