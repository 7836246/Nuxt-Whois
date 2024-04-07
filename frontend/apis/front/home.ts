enum Api {
    webSiteConfig = '/getWebSiteConfig',
    whoisServer = "/getWhoisServer"
}

// 获取网站配置
export function GetWebSiteConfig() {
    return useHttp.post<WebSiteConfig>("/getWebSiteConfig")
}

//获取whois服务器
export function GetWhoisServer(config: string) {
    return useHttp.post<any>("/getWhoisServer", {
        config: config,
    })
}

export function GetWhois(domain: string, name: string) {
    return useHttp.post<any>("/getWhois", {
        domain: domain,
        name: name,
    })
}
