export default defineI18nLocale(async locale => {
    return {
        index: {
            tips: '您提交的查询信息不会被记录！',
        },
        error:{
            formatDomain: '域名格式错误',
            //域名必须包含有效的顶级域
            validDomain: '域名必须包含有效的顶级域',
            notFound: '未找到域名信息',
        },
        result: {
            result: '查询结果',
            title: 'WHOIS查询结果',
            description: '以下是您查询的域名的WHOIS信息',
            domain: '域名',
            //数据源
            source: '数据源',
            //注册商
            registrar: '注册商',
            //更新日
            updateDate: '更新日',
            //注册日
            createDate: '注册日',
            //到期日
            expirationDate: '到期日',
            //IANAID
            ianaId: 'IANAID',
            //状态
            status: '状态',
            //DNS
            dns: 'DNS',
            //DNSSEC
            dnssec: 'DNSSEC',
            //原始数据
            rawData: '原始数据',
        }
    }
})
