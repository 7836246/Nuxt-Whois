// 定义 DNS 服务器配置
const doMainServers: any = {
    whocx: 'https://who.cx/api/price',
};

interface DomainInfoResponse {
    code: number;
    currency: string;
    currency_symbol: string;
    domain: string;
    new: string;
    renew: string;
    premium: boolean;
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const domain = body.domain;
    const flag = body.flag;
    const domainServerKey = body.domainServer;


    //判断是否开启DNS
    console.log(flag)
    if (!flag) {
        return {
            status: 200,
            data: {
                status: 'success',
            }
        }
    }

    switch (domainServerKey) {
        case 'whocx':
            const res: any = await $fetch(doMainServers.whocx, {
                method: "GET",
                params: {
                    domain: domain,
                }
            });
            return {
                code: 200,
                currency: res.currency,
                currency_symbol: res.currency_symbol,
                domain: res.domain,
                new: res.new,
                renew: res.renew,
                premium: false,
            } as DomainInfoResponse
        default:
            return null
    }

});
