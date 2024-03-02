
// 定义一个函数来将单个UTC+8时间字符串转换为指定UTC偏移量的时间
export function AdjustTimeToUTCOffset(timestamp: string, utcOffset: string): string {
    // 将时间字符串转换为Date对象
    const date = new Date(timestamp);

    let offsetInMillis = 0; // 默认偏移量为0毫秒

    if (utcOffset !== "UTC") {
        // 解析UTC偏移量（例如："UTC+8"）
        const offsetPattern = /UTC([+-])(\d+):?(\d+)?/;
        const match = offsetPattern.exec(utcOffset);
        if (!match) {
            throw new Error('Invalid UTC offset format');
        }

        const sign = match[1] === '+' ? 1 : -1; // 确定是加时区还是减时区
        const hours = parseInt(match[2], 10); // 小时
        const minutes = match[3] ? parseInt(match[3], 10) : 0; // 分钟，如果没有定义，则为0
        offsetInMillis = sign * ((hours * 60 + minutes) * 60000); // 将偏移量转换为毫秒
    }

    // 计算并返回调整后的时间
    const targetTime = new Date(date.getTime() + offsetInMillis);

    // 返回调整后的时间的ISO字符串
    return targetTime.toISOString();
}
