export default defineI18nLocale(async locale => {
    return {
        index: {
            tips: '您提交的查詢信息不會被記錄！',
            placeholder: '請輸入域名',
        },
        error:{
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
        }
    }
})
