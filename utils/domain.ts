import serversData from '~/server/whois/json/whois-servers.json';
export const SupportedTLDs = new Set(Object.keys(serversData));
