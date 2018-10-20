/**
 * @author  wangweile | wangweile@shuidihuzhu.com
 * @version 2.0 |
 * @describe
 * @example
 */

/**
 * Define a property.
 */

export function def(obj = {}, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
}

/*
* parse simple path 解析简单路由
 */
// \w 等价于 [^A-Za-z0-9_]
const bailRE = /[^\w.$]/

export function parsePath(path) {
    if (bailRE.test(path)) {
        return
    }

    const segments = path.split('.')

    console.log(segments)

    return function (obj) {
        for (let i = 0; i < segments.length; i++) {
            if (!obj) return
            obj = obj[segments[i]]
        }
        return obj
    }
}