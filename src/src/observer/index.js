import {
    hasOwn,
    isObject,
    def
} from "../tools";

import {arrayMethods} from "../observer/array";

import Dep from '../dep/index'

export class Observer {
    constructor(value) {
        this.value = value
        this.dep = new Dep()
        def(value, '_ob_', this)
        if (Array.isArray(value)) {
            const augment = hasProto
                ? protoAugment
                : copyAugment
            augment(value, arrayMethods, arrayKeys)
        }
    }
}

// observe 方法 asRootData:boolean
export function observe(value, asRootData) {
    console.log('observe', value)
    if (!isObject(value)) {
        return
    }
    let ob
    // if (hasOwn(value, '_ob_') && value._ob_ instanceof Observer) {
    //     ob = value._ob_
    // } else if(
    //
    // )
    ob = new Observer(value)
    return ob

}

// protoAugment
function protoAugment(target, src, keys) {
    /* eslint-disable no-proto */
    target.__proto__ = src
    /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */
function copyAugment(target, src, keys) {
    for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i]
        def(target, key, src[key])
    }
}

// 将数据包装成可观测的对象，当数据变动时，我们能感知到
export function defineReactive(obj, key, val, customSetter, shallow) {
    const dep = new Dep()
    const property = Object.getOwnPropertyDescriptor(obj, key)
    if (property && property.configurable === false) {
        return
    }
    const getter = property && property.get
    const setter = property && property.set

    if ((!getter || setter) && arguments.length === 2) {
        val = obj[key]
    }

    let childOb = !shallow && observe(val)

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            const value = getter ? getter.call(obj) : val
            if (Dep.target) {
                dep.append()
                if (childOb) {
                    childOb.dep.depend()
                    if (Array.isArray(value)) {
                        dependArray(value)
                    }
                }
            }
        },
        set: function reactiveSetter(newVal) {
            const value = getter ? getter.call(obj) : val
            if (newVal === value || (newVal !== newVal && value !== value)) {
                return
            }

            if (setter) {
                setter.call(obj, newVal)
            } else {
                val = newVal
            }
            childOb = !shallow && observe(newVal)
            dep.notify() //通知公布
        }
    })
}


function dependArray(value) {
    for (let e, i = 0; i < value.length; i++) {
        e = value[i]
        e && e.__ob__ && e.__ob__.dep.depend()
        if (Array.isArray(e)) {
            dependArray(e)
        }
    }
}