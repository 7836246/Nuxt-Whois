// 正则表达式用于匹配域名或IPv4地址
export const DomainRegex = /^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,11}?$/;
export const Ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

export const ExtractDomain = (url: string) => {
    try {
        let hostname;
        // 如果 URL 是一个有效的 URL，我们尝试从中获取主机名
        if (url.startsWith('http://') || url.startsWith('https://')) {
            const urlObj = new URL(url);
            hostname = urlObj.hostname;
        } else {
            // 如果不是一个标准的 URL，我们假设它可能是一个域名
            hostname = url;
        }

        // 移除 "www." 如果存在
        hostname = hostname.replace(/^www\./, '');

        // 处理子域的情况，只保留最后两部分，这对大多数通用顶级域名有效
        const parts = hostname.split('.').reverse();
        if (parts.length > 2) {
            // 检查是否为已知的较长的TLD
            if (parts[1].length < 3 || ['com', 'net', 'org'].includes(parts[1])) {
                hostname = `${parts[2]}.${parts[1]}.${parts[0]}`;
            } else {
                hostname = `${parts[1]}.${parts[0]}`;
            }
        }

        return hostname;
    } catch (error) {
        console.error('Invalid URL:', error);
        return ''; // 返回一个空字符串表示 URL 或域名无效
    }
};
