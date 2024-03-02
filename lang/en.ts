export default defineI18nLocale(async locale => {
    return {
        index: {
            tips: 'The information you submit for your query will not be recorded!',
            placeholder: 'Please enter a domain name',
        },
        error:{
            formatDomain: 'Error formatting domain name',
            validDomain: 'Domain must contain a valid top-level domain',
            notFound: 'Domain not found',
        },
        result: {
            result: 'Query Result',
            title: 'WHOIS Query Result',
            description: 'Here is the WHOIS information for the domain you queried',
            domain: 'Domain Name',
            //数据源
            source: 'Source',
            //注册商
            registrar: 'Registrar',
            //更新日
            updateDate: 'Updated Date',
            //注册日
            createDate: 'Creation Date',
            //到期日
            expirationDate: 'Registry Expiry Date',
            //IANAID
            ianaId: 'IANAID',
            //状态
            status: 'Domain Status',
            //DNS
            dns: 'DNS',
            //DNSSEC
            dnssec: 'DNSSEC',
            //原始数据
            rawData: 'Raw Data',
        }
    }
})
