/**
 * @author  wangweile | wangweile@shuidihuzhu.com
 * @version 2.0 |
 * @describe
 * @example
 */
// @flow
import {defineReactive} from "../observer/index";
import {initMethods} from "../initMethods";
import {initProps} from "../initProps";
import {initData} from "../initData";
import {observe} from "../observer/index";

export function initState(vm) {
    vm._watchers = []
    const opts = vm.$options
    // 如果存在props
    if (opts.props) initProps(vm, opts.props)
    // 有方法methods的时候
    // if (opts.methods) initMethods(vm, opts.methods)
    // // 有data的时候
    // if (opts.data) {
    //     initData(vm)
    // } else {
    //     // observe(vm._data={}, true)
    // }
}




