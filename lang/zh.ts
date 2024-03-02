export default defineI18nLocale(async locale => {
    return {
        app: {
            title: 'Nuxt Whois',
        },
        whois:{
            title: "Whois查询",
            description: "查询{domain}的Whois信息，包括注册者联系方式、域名状态、DNS记录等详细信息。快速、准确地获取域名所有权和注册信息。",
            keywords: "Whois查询, {domain}, 域名信息, 域名所有者, 域名注册信息"
        },
        dns:{
            title: 'DNS查询',
            description: '查询{domain}的DNS记录，包括A记录、AAAA记录、CNAME记录、MX记录、NS记录、TXT记录等。',
            keywords: 'DNS查询, {domain}, 域名解析, 域名解析记录'
        },
        index: {
            tips: '您提交的查询信息不会被记录！',
            placeholder: '请输入域名',
            onSubmit: '提交',
            title: 'WHOIS与Dns查询工具网站',
            description: '提供域名WHOIS查询、域名DNS查询、域名注册商查询、域名注册信息查询等服务',
            keywords: '域名whois查询,whois查询,whois信息查询,whois查询工具,whois查询网站,whois查询api,whois查询接口',
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
        },
        footer: {
            text: '© 2024 Whois查询. All rights reserved.',
            //API文档
            api: 'API文档'
        },
        api: {
            h1: 'Whois关键信息提取API',
            //接口地址
            url: '接口地址',
            //请求方式
            method: '请求方式',
            //请求参数
            params: '请求参数',
            //输入参数
            input: '输入参数',
            //输出参数
            output: '输出参数',
            //返回处理后的whois字符串
            whois: '返回处理后的whois字符串',
            //名称
            name: '名称',
            //类型
            type: '类型',
            //描述
            desc: '描述',
            //必选
            required: '必选',
            //域名
            domain: '域名',
            title: 'Whois关键信息提取API',
            description: '提取域名WHOIS信息中的关键信息，包括注册商、注册日期、到期日期、DNS、状态等。',
            keywords: '域名whois查询,whois查询,whois信息查询,whois查询工具,whois查询网站,whois查询api,whois查询接口',
        }
    }
})
