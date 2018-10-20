/**
 * @author  wangweile | wangweile@shuidihuzhu.com
 * @version 2.0 |
 * @describe
 * @example
 */

import {lifecycle} from '../lifecycle'
import {initEvents} from "../events"
import {initState} from "../initState";
import {$mount} from "../compiler";
import {parsePath} from "../lang";
/*
 生命周期：2:-> init&&lifecycle()&&Events()
 */
let uid = 0

export function initMixin(Vue) {
    Vue.prototype._init = function (options) {
        // debugger
        const vm = this
        vm._uid = uid++
        vm._self = vm
        vm.$options = options
        // lifecycle(vm)
        // initEvents(vm)
        //  在元素属性之前注入
        initState(vm) // 初始化props,data,methods,component等属性
        if (vm.$options.el) {  // $mount挂载元素
            $mount(vm)
        }

        console.log('lookai',parsePath('/user/'))
    }
}


