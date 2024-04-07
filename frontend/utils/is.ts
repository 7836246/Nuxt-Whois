/**********************************
 * @FilePath: is.ts
 * @Author: Ronnie Zhang
 * @LastEditor: Ronnie Zhang
 * @LastEditTime: 2023/12/04 22:45:32
 * @Email: zclzone@outlook.com
 * Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 **********************************/

const toString = Object.prototype.toString;

export function is(val: unknown, type: string): boolean {
    return toString.call(val) === `[object ${type}]`;
}

export function isDef<T>(val: T): boolean {
    return typeof val !== 'undefined';
}

export function isUndef<T>(val: T): boolean {
    return typeof val === 'undefined';
}

export function isNull(val: unknown): val is null {
    return val === null;
}

export function isWhitespace(val: unknown): val is '' {
    return val === '';
}

export function isObject(val: unknown): boolean {
    return !isNull(val) && is(val, 'Object');
}

export function isArray(val: unknown): val is Array<unknown> {
    return Array.isArray(val);
}

export function isString(val: unknown): val is string {
    return is(val, 'String');
}

export function isNumber(val: unknown): val is number {
    return is(val, 'Number');
}

export function isBoolean(val: unknown): val is boolean {
    return is(val, 'Boolean');
}

export function isDate(val: unknown): val is Date {
    return is(val, 'Date');
}

export function isRegExp(val: unknown): val is RegExp {
    return is(val, 'RegExp');
}

export function isFunction(val: unknown): val is Function {
    return typeof val === 'function';
}

export function isPromise(val: unknown): val is Promise<unknown> {
    return is(val, 'Promise') && isObject(val) && isFunction((val as Promise<unknown>).then) && isFunction((val as Promise<unknown>).catch);
}

export function isElement(val: unknown): val is Element {
    return isObject(val) && !!((val as Element).tagName);
}

export function isWindow(val: unknown): boolean {
    return typeof window !== 'undefined' && isDef(window) && is(val, 'Window');
}

export function isNullOrUndef(val: unknown): boolean {
    return isNull(val) || isUndef(val);
}

export function isNullOrWhitespace(val: unknown): boolean {
    return isNullOrUndef(val) || isWhitespace(val);
}

/** 空数组 | 空字符串 | 空对象 | 空Map | 空Set */
export function isEmpty(val: unknown): boolean {
    if (isArray(val) || isString(val)) {
        return val.length === 0;
    }

    if (val instanceof Map || val instanceof Set) {
        return val.size === 0;
    }

    if (isObject(val)) {
        // 使用类型断言确保val是一个对象
        return Object.keys(val as Record<string, unknown>).length === 0;
    }

    return false;
}

export function ifNull<T>(val: T, def: T = '' as T): T {
    return isNullOrWhitespace(val) ? def : val;
}

export function isUrl(path: string): boolean {
    const reg =
        /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
    return reg.test(path);
}

export function isExternal(path: string): boolean {
    return /^(https?:|mailto:|tel:)/.test(path);
}

export const isServer: boolean = typeof window === 'undefined';

export const isClient: boolean = !isServer;
