import {initState} from "../initState";

export function initMixin(Vue) {
    Vue.prototype._init = function (options) { // options上层传过来的vue对象
        const vm = this
        vm.$options = options
        initState(vm)
        console.log('vm', vm)
    }
}