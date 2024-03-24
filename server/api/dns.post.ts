// 定义 DNS 服务器配置
const dnsServers: any = {
    google: 'https://dns.google/resolve',
    cloudflare: 'http://1.1.1.1/dns-query',
    aliyun: 'https://223.5.5.5/resolve',
    tencent: 'https://doh.pub/dns-query',
    nuxt: '/api/resolve',
};

interface Resp {
    aRecords: string[];
    nsRecords: string[];
    soaRecord: soaRecord;
}

interface soaRecord {
    nsname: string;
    hostmaster: string;
    serial: number;
    refresh: number;
    retry: number;
    expire: number;
    minttl: number;
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const domain = body.domain;
    const flag = body.flag;
    const dnsServerKey = body.dnsServer;

    //判断是否开启DNS
    if (!flag) {
        return {
            status: 200,
            body: 'DNS is not open'
        }
    }

    switch (dnsServerKey) {
        case 'google':
            return await $fetch(dnsServers.google, {
                params: {
                    name: domain,
                    type: 'A',
                }
            });
        case 'tencent':
            return await $fetch(dnsServers.tencent, {
                params: {
                    name: domain,
                    type: 'A',
                }
            });
        case 'cloudflare':
            const resp = await $fetch(dnsServers.cloudflare, {
                method: 'GET',
                params: {
                    name: domain,
                },
                headers: {
                    "Accept": "application/dns-json", // 设置期望的响应数据类型
                }
            }).then((resp: any) => {
                return resp.text()
            })
            return JSON.parse(resp);
        case 'aliyun':
            return await $fetch(dnsServers.aliyun, {
                params: {
                    name: domain,
                    type: '1',
                }
            });
        case 'nuxt':
            return await $fetch(dnsServers.nuxt, {
                method: 'POST',
                body: {
                    name: domain,
                    type: '1',
                }
            });
        default:
            // const resolver = new dns.Resolver();
            //
            // const aRecords = await resolver.resolve(domain, 'A');
            // const nsRecords = await resolver.resolve(domain, 'NS');
            // const soaRecord = await resolver.resolveSoa(domain);
            // return {
            //     aRecords: aRecords,
            //     nsRecords: nsRecords,
            //     soaRecord: soaRecord,
            // } as Resp;
            return null
    }
});
