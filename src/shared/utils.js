/**
 * @author  wangweile | wangweile@shuidihuzhu.com
 * @version 2.0 |
 * @describe
 * @example
 */

let warned = Object.create(null)
export const warnOnce = msg => {
    if (!warned[msg]) {
        warned[msg] = true
        console.warn(`\n\u001b[31m${msg}\u001b[39m\n`)
    }
}

//isObject
export function isObject(obj) {
    return obj !== null && typeof obj === 'object'
}

// '_proto_'
export const hasProto = '_proto_' in {}

// 'Perform no operation'
export function noop(a, b, c) {}

