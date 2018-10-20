/**
 * @author  wangweile | wangweile@shuidihuzhu.com
 * @version 2.0 |
 * @describe
 * @example
 */
import {parsePath} from "../lang"
import Dep from '../dep'

export default class Watcher {
    constructor(vm, expOrFn, cb, options, isRenderWatcher) {
        this.vm = vm
        if (isRenderWatcher) { // boolean 类型
            vm._watcher = this
        }
        vm._watchers.push(this)

        if (options) {
            this.deep = !!options.deep
            this.user = !!options.user
            this.computed = !!options.computed
            this.sync = !!options.sync
            this.before = options.before
        } else {
            this.deep = this.user = this.computed = this.sync = false
        }
        this.cb = cb
        this.id = ++uid // uid for batching
        this.active = true
        this.dirty = this.computed // for computed watchers
        this.deps = []
        this.newDeps = []
        this.depIds = new Set()
        this.newDepIds = new Set()

        this.expression = process.env.NODE_ENV !== 'production'
            ? expOrFn.toString()
            : ''
        if (typeof expOrFn === 'function') { // 函数
            this.getter = expOrFn
        } else {
            this.getter = parsePath(expOrFn) // 解析简单路由
            if (!this.getter) {
                this.getter = function () {
                }
            }
        }

        if (this.computed) {
            this.value = undefined
            this.dep = new Dep()
        } else {
            this.value = this.get()
        }
    }

    /**
     * Evaluate the getter, and re-collect dependencies.
     */

    get() {

    }
}


