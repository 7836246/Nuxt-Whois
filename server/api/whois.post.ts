import {whois} from "~/server/whois/whois";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {
        const res = await whois(body.domain)
        return res._raw
    } catch (e) {
        return e
    }
})
