import { defineEventHandler } from 'h3';
import fs from 'fs';
import path from 'path';

interface AddSuffixBody {
    suffix: string;
    server: string;
}

export default defineEventHandler(async (event) => {
    const body: AddSuffixBody = await readBody(event);
    const filePath = path.join('server/whois/json', 'whois-servers.json');

    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
    const data: Record<string, string> = JSON.parse(fileContent);

    // 添加或更新域名后缀
    data[body.suffix] = body.server;

    // 写入更新
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), { encoding: 'utf8' });

    return { message: 'ok' };
});
