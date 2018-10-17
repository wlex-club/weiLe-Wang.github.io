import {initState} from "../initState";
import {mergeOptions} from "../util/options";

export function initMixin(Vue) {
    Vue.prototype._init = function (options) { // options上层传过来的vue对象
        const vm = this
        vm.$options = options
        initState(vm)

        if(vm.$options.el){
            console.log(vm.$options.el)
        }
        mergeOptions()
    }
}