import {whois} from "~/server/whois/whois";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const serverName = body.serverName;
    const domain = body.domain
    if (serverName == '') {
        return ""
    }
    const runtimeConfig = useRuntimeConfig()
    const baseUrl = runtimeConfig.public.baseUrl
    switch (serverName) {
        case "nuxt": {
            return await whois(domain)
        }
        default:
            return await $fetch(`${baseUrl}/server/getWhois`, {
                method: 'POST',
                body: {
                    name: serverName,
                    domain: domain,
                }
            })
    }
})
