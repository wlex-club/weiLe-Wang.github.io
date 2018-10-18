declare global {
    interface Window {
        Vue: any
    }
}

export function Vue(Vue: Object) {
    console.log('初始化ts')
}

window.Vue = Vue
