// server/api/dns-query.ts
import {resolve4} from 'dns/promises';

interface DNSQueryResponse {
    Status: number;
    TC: boolean;
    RD: boolean;
    RA: boolean;
    AD: boolean;
    CD: boolean;
    Question: {
        name: string;
        type: number;
    };
    Answer?: Array<{
        name: string;
        TTL: number;
        type: number;
        data: string;
    }>;
    message?: string;
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const queryName: string = body.name // 如果请求体中没有提供域名，默认查询 'baidu.com'

    try {
        const addresses: string[] = await resolve4(queryName);
        const answers = addresses.map((address) => ({
            name: `${queryName}.`,
            TTL: 269, // 示例中的 TTL 值是硬编码的
            type: 1, // 表示 A 记录
            data: address,
        }));

        const response: DNSQueryResponse = {
            Status: 0,
            TC: false,
            RD: true,
            RA: true,
            AD: false,
            CD: false,
            Question: {
                name: `${queryName}.`,
                type: 1,
            },
            Answer: answers,
        };

        return response;
    } catch (error) {
        console.error(error);
        const response: DNSQueryResponse = {
            AD: false, CD: false, Question: {name: "", type: 0}, RA: false, RD: false, TC: false,
            Status: 2, // 使用 2 表示错误状态
            message: 'DNS query failed'
        };
        return response;
    }
});
