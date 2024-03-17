import { defineEventHandler } from 'h3';
import fs from 'fs';
import path from 'path';

interface RemoveSuffixBody {
    suffix: string;
}

export default defineEventHandler(async (event) => {
    const body: RemoveSuffixBody = await readBody(event);
    const filePath = path.join('server/whois/json', 'whois-servers.json');

    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
    const data: Record<string, string> = JSON.parse(fileContent);

    // 删除域名后缀
    delete data[body.suffix];

    // 写入更新
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), { encoding: 'utf8' });

    return { message: 'ok' };
});
