export const trimDomain = (domain: string): string => {
    return domain.trim().toLowerCase(); // 确保域名为小写
};

export const splitDomain = (domain: string): string[] => {
    return domain.split('.');
};
//
// const SupportedTLDs = new Set(Object.keys(domainStore.SupportedTLDs));
//
// export  const updateDomainForTLD = (parts: string[]): string => {
//     const potentialTLD = parts.slice(-2).join('.').toLowerCase(); // 确保为小写
//     let domainToKeep: string;
//     if (SupportedTLDs.has(potentialTLD)) {
//         domainToKeep = parts.length > 2 ? parts.slice(-3).join('.') : parts.join('.');
//     } else {
//         domainToKeep = parts.slice(-2).join('.');
//     }
//     return domainToKeep;
// };
//
//
// export  const validateDomain = (parts: string[]): boolean => {
//     if (parts.length < 2) {
//         const message = useMessage()
//         message.warning('域名格式不正确')
//         return false;
//     }
//     return true;
// };
//
//
// const isTLDValid = (parts: string[]): boolean => {
//     const lastPart = parts[parts.length - 1].toLowerCase(); // 获取最后一部分，并确保为小写
//     const potentialTLD = parts.slice(-2).join('.').toLowerCase(); // 获取可能的多部分TLD，并确保为小写
//
//     if (!SupportedTLDs.has(lastPart) && !SupportedTLDs.has(potentialTLD)) {
//         const message = useMessage()
//         message.warning('域名后缀不合法')
//         return false;
//     }
//     return true;
// };
