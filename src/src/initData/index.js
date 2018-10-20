import {
    hasOwn,
    isPlainObject,
    isReserved,
    proxy
} from "../tools";

import {pushTarget, popTarget} from "../dep";
import {handleError} from "../error";
import {observe} from "../observer/index";

export function initData(vm) {
    let data = vm.$options.data
    console.log('getdata', data)
    data = vm._data = typeof data === 'function'
        ? getData(data, vm)
        : data || {}
    if (!isPlainObject(data)) { // data是否是一个对象
        data = {}
    }
    // proxy data on instance
    const keys = Object.keys(data)
    const props = vm.$options.props
    const methods = vm.$options.methods
    let i = keys.length
    while (i--) {
        const key = keys[i]
        if (process.env.NODE_ENV !== 'production') {
            if (methods && hasOwn(methods, key)) {
                console.log(`Method "${key}" has already been defined as a data property.`,
                    vm)
            }
        }

        if (props && hasOwn(props)) {
            process.env.NODE_ENV !== 'production' && warn(
                `The data property "${key}" is already declared as a prop. ` +
                `Use prop default value instead.`,
                vm
            )
        } else if (!isReserved(key)) { // 是否已 $ 或者、_开始
            proxy(vm, `_data`, key)
        }
    }
    observe(data, true)
}

//getData 处理数据
export function getData(data, vm) {
    try {
        return data.call(vm, vm)
    } catch (e) {
        handleError(e, vm, `data()`)
        return {}
    } finally {
        // popTarget()
    }
}
