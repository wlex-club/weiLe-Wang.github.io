/**
 * @author  wangweile | wangweile@shuidihuzhu.com
 * @version 2.0 |
 * @describe
 * @example
 */
// initLifeCycle方法用来初始化一些生命周期相关的属性，并为parent,child等属性赋值
export function lifecycle(vm) {
    const options = vm.$options
    let parent = options.parent // undefined 暂时忽略
    vm.$parent = parent
    vm.$children = []
    vm.$refs = {}
    vm._watcher = null
    vm._inactive = null
    vm._directInactive = false
    vm._isMounted = false
    vm._isDestroyed = false
    vm._isBeingDestroyed = false
}