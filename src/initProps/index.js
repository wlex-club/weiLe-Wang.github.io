/**
 * @author  wangweile | wangweile@shuidihuzhu.com
 * @version 2.0 |
 * @describe
 * @example
 */
import {validateProp} from '../props'
import {defineReactive} from '../observer/index'

/*
* 初始化props的时候
 */
export function initProps(vm, propsOptions = {}) {
    const propsData = vm.$options.props // 数据里有函数、有变量
    const keys = []
    for (const key in propsData) {
        const value = validateProp(key, propsOptions, propsData, vm)
        defineReactive(propsData, key, value)
        //将数据包装成一种可观测的类型，当数据产生变更的时候，我们能够感知到
    }
}