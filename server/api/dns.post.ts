import dns from 'node:dns/promises';
export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const domain = body.domain;
    if (!domain) {
        return { error: 'Missing domain' };
    }
    try {
        const aRecords = await dns.resolve(domain, 'A');
        const nsRecords = await dns.resolve(domain, 'NS');
        const soaRecord = await dns.resolveSoa(domain);

        return {
            A: aRecords.map(ip => ({ TTL: '600', Record: ip })), // 示例中的TTL是假设的
            NS: nsRecords.map(ns => ({ TTL: '21600', Record: ns })), // 示例中的TTL是假设的
            SOA: {
                MName: soaRecord.nsname,
                Email: soaRecord.hostmaster,
                Serial: soaRecord.serial,
                Refresh: soaRecord.refresh,
                Retry: soaRecord.retry,
                Expire: soaRecord.expire,
                MinimumTTL: soaRecord.minttl,
            }
        };
    } catch (error) {
        console.error(`Error fetching DNS records for ${domain}:`, error);
        return { error: 'Failed to fetch DNS records' };
    }
})
