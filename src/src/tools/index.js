/**
 * @author  wangweile | wangweile@shuidihuzhu.com
 * @version 2.0 |
 * @describe
 * @example
 */
const _toString = Object.prototype.toString

export function isObject(obj) {
    return obj !== null && typeof obj === 'object'
}

/*
  查询元素是否存在
 */

export function query(el) {
    if (typeof el === 'string') {
        const selected = document.querySelector(el)

        if (!selected) {
            return document.createElement('div')
        }
        return selected
    } else {
        return el
    }
}


export function cached(fn) {
    const cache = Object.create(null)

    return (function cachedFn(str) {
        const hit = cache[str]
        return hit || (cache[str] = fn(str))
    })
}

// hasOwnPrototype

const hasOwnProperty = Object.prototype.hasOwnProperty

export function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key)
}

// Check if a string starts with $ or _
export function isReserved(str) {
    const c = (str + '').charCodeAt(0)
    return c === 0x24 || c === 0x5F
}

export function noop(a, b, c) {
}

function polyfillBind(fn, ctx) {
    function boundFn(a) {
        const l = arguments.length
        return l
            ? l > 1
                ? fn.apply(ctx, arguments)
                : fn.call(ctx, a)
            : fn.call(ctx)
    }

    boundFn._length = fn.length
    return boundFn
}

function nativeBind(fn, ctx) {
    return fn.bind(ctx)
}

// bind
export const bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]'
}

// proxy 做代理
const sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
}

export function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key]
    }
    sharedPropertyDefinition.set = function (val) {
        this[sourceKey][key] = val
    }
    Object.defineProperty(target, key, sharedPropertyDefinition)
}

/**
 * Define a property.
 */

export function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
    console.log('ki', obj)
}








