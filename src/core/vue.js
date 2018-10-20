/**
 * @author  wangweile | wangweile@shuidihuzhu.com
 * @version 2.0 |
 * @describe
 * @example
 */
import {initMixin} from "../initMixin/initVue";
import {warnOnce} from "../shared/utils";

/*
* 生命周期 1:->new Vue()
* */
function Vue(options) {
    console.log('options',options)
    if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
        warnOnce('Vue is a constructor and should be called with the `new` keyword')
    }
    this._init(options)
}

initMixin(Vue) // 初始化vue
window.Vue = Vue  // 设置成全局的vue