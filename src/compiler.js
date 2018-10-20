/**
 * @author  wangweile | wangweile@shuidihuzhu.com
 * @version 2.0 |
 * @describe
 * @example
 */
import {query, cached} from "./tools";

// const idToTemplate = cached(id => {
//     const el = query(id)
//     return el && el.innerHTML
// })

export function $mount(vm) {
    const el = vm.$options.el && query(vm.$options.el)
    if (el === document.body || el === document.documentElement) {
        process.env.NODE_ENV !== 'production' && warn(
            `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
        )
        return this
    }

    return el
}


