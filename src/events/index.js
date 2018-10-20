/**
 * @author  wangweile | wangweile@shuidihuzhu.com
 * @version 2.0 |
 * @describe
 * @example
 */

export function initEvents(vm) {
    console.log('e', vm)
    vm._events = Object.create(null)

    /*是否存在钩子，而不需要通过哈希表的方法来查找是否有钩子，这样做可以减少不必要的开销，优化性能。*/
    vm._hasHookEvent = false
    const listeners = vm.$options._parentListeners = {}
    console.log(listeners)
    if (listeners) {
        updateComponentListeners(vm, listeners)
    }
}

let target

function add(event,fn,once) {
    if(once){
        target.$once(event,fn)
    } else{
        target.$on(event,fn)
    }
}

function remove (event, fn) {
    target.$off(event, fn)
}

export function updateComponentListeners(
    vm,
    listeners = {},
    oldListeners = {},
    add = () => {}) {
    target = vm
    // updateListeners(listeners, oldListeners, add, remove, vm)
    target = undefined

    console.log(typeof add)
}