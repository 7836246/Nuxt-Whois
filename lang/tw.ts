export default defineI18nLocale(async locale => {
    return {
        app: {
            title: 'Nuxt Whois',
        },
        whois: {
            title: 'Whois查詢',
            description: '查詢{domain}的Whois信息，包括註冊者聯繫方式、域名狀態、DNS記錄等詳細信息。快速、準確地獲取域名所有權和註冊信息。',
            keywords: 'Whois查詢, {domain}, 域名信息, 域名所有者, 域名註冊信息'
        },
        dns: {
            title: 'DNS查詢',
            description: '查詢{domain}的DNS記錄，包括A記錄、AAAA記錄、CNAME記錄、MX記錄、NS記錄、TXT記錄等。',
            keywords: 'DNS查詢, {domain}, 域名解析, 域名解析記錄',
            //DNS查詢結果
            dnsResult: 'DNS查詢結果',
            //A記錄
            aRecord: 'A記錄',
            //NS記錄
            nsRecord: 'NS記錄',
            //SOA記錄
            soaRecord: 'SOA記錄',
        },
        index: {
            tips: '您提交的查詢信息不會被記錄！',
            placeholder: '請輸入域名',
            onSubmit: '提交',
            title: 'WHOIS與Dns查詢工具網站',
            description: '提供域名WHOIS查詢、域名DNS查詢、域名註冊商查詢、域名註冊信息查詢等服務',
            keywords: '域名whois查詢,whois查詢,whois信息查詢,whois查詢工具,whois查詢網站,whois查詢api,whois查詢接口',
        },
        error: {
            formatDomain: '域名格式錯誤',
            validDomain: '域名必須包含有效的頂級域',
            notFound: '未找到域名資料',
        },
        result: {
            result: '查詢結果',
            title: 'WHOIS查詢結果',
            description: '以下是您查詢的域名的WHOIS資訊',
            domain: '域名',
            //数据源
            source: '資料來源',
            //注册商
            registrar: '註冊商',
            //更新日
            updateDate: '更新日',
            //注册日
            createDate: '註冊日',
            //到期日
            expirationDate: '到期日',
            //IANAID
            ianaId: 'IANAID',
            //状态
            status: '狀態',
            //DNS
            dns: 'DNS',
            //DNSSEC
            dnssec: 'DNSSEC',
            //原始数据
            rawData: '原始資料',
        },
        footer: {
            text: '© 2024 Whois查詢. All rights reserved.',
            api: 'API文檔'
        },
        api: {
            h1: 'Whois關鍵信息提取API',
            //接口地址
            url: '接口地址',
            //请求方式
            method: '請求方式',
            //请求参数
            params: '請求參數',
            //输入参数
            input: '輸入參數',
            //输出参数
            output: '輸出參數',
            //返回处理后的whois字符串
            whois: '返回處理後的whois字符串',
            //名称
            name: '名稱',
            //类型
            type: '類型',
            //描述
            desc: '描述',
            required: '必填',
            domain: '域名',
            title: 'Whois關鍵信息提取API',
            description: '提取域名WHOIS信息中的關鍵信息，包括註冊商、註冊日期、到期日期、DNS、狀態等。',
            keywords: '域名whois查詢,whois查詢,whois信息查詢,whois查詢工具,whois查詢網站,whois查詢api,whois查詢接口',
        },
        popper: {
            //支援列表
            support: '支援列表',
            //查詢歷史
            history: '查詢歷史',
            //Dns查詢
            dns: 'DNS查詢',
            //網站設定
            setting: '網站設定',
            //主題模式
            theme: '主題模式',
            //語言設定
            language: '語言設定',
        }
    }
})
