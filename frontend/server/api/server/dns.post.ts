export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const domain = body.domain;
    const serverName = body.serverName;
    if (serverName == '') {
        return ""
    }

    const runtimeConfig = useRuntimeConfig()
    const baseUrl = runtimeConfig.public.baseUrl
    switch (serverName) {
        case "nuxt": {
            return ""
        }
        default:
            return await $fetch(`${baseUrl}/server/getDns`, {
                method: 'POST',
                body: {
                    name: serverName,
                    domain: domain,
                }
            })
    }
});
