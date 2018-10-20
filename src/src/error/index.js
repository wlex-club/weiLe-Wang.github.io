/**
 * @author  wangweile | wangweile@shuidihuzhu.com
 * @version 2.0 |
 * @describe
 * @example
 */

export function handleError(err, vm, info) {
    if (vm) {
        let cur = vm
        while ((cur = cur.$parent)) {
            const hooks = cur.$options.errorCaptured
            if (hooks) {
                for (let i = 0; i < hooks.length; i++) {
                    try {
                        const capture = hooks[i].call(cur, err, vm, info) === false
                        if (capture) return
                    } catch (e) {
                        globalHandleError(e, cur, 'errorCaptured hook')
                    }
                }

            }
        }
    }
    globalHandleError(err, vm, info)
}


function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
        try {
            return config.errorHandler.call(null, err, vm, info)
        } catch (e) {
            logError(e, null, 'config.errorHandler')
        }
    }
    logError(err, vm, info)
}

function logError(err, vm, info) {
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Error in ${info}: "${err.toString()}"`, vm)
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
        console.error(err)
    } else {
        throw err
    }
}
