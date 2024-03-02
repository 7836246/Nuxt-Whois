interface WhoisInformation {
    domainName?: string;
    registryDomainID?: string;
    registrarWHOISServer?: string;
    registrarURL?: string;
    updatedDate?: string;
    creationDate?: string;
    registryExpiryDate?: string;
    registrar?: string;
    registrarIANAID?: string;
    domainStatus?: string[];
    nameServers?: string[];
    dnssec?: string;
    icannWhoisInaccuracyComplaintFormURL?: string;
}
export function ParseWhois(whoisText: string): WhoisInformation {
    const lines = whoisText.split('\n'); // 将文本分割成行
    const info: WhoisInformation = {}; // 创建一个空对象来存储提取的信息

    lines.forEach(line => {
        const [key, value] = line.split(': ').map(part => part.trim());
        switch (key) {
            case 'Domain Name':
                info.domainName = value;
                break;
            case 'Registry Domain ID':
                info.registryDomainID = value;
                break;
            case 'Registrar WHOIS Server':
                info.registrarWHOISServer = value;
                break;
            case 'Registrar URL':
                info.registrarURL = value;
                break;
            case 'Updated Date':
                info.updatedDate = value;
                break;
            case 'Creation Date':
                info.creationDate = value;
                break;
            case 'Registry Expiry Date':
                info.registryExpiryDate = value;
                break;
            case 'Registrar':
                info.registrar = value;
                break;
            case 'Registrar IANA ID':
                info.registrarIANAID = value;
                break;
            case 'Domain Status':
                info.domainStatus = info.domainStatus ? [...info.domainStatus, value] : [value];
                break;
            case 'Name Server':
                info.nameServers = info.nameServers ? [...info.nameServers, value] : [value];
                break;
            case 'DNSSEC':
                info.dnssec = value;
                break;
        }
    });

    info.icannWhoisInaccuracyComplaintFormURL = "https://www.icann.org/wicf/";

    return info;
}
