// flow

import {
    hasOwn,
    isReserved,
    noop,
    bind
} from "../tools";

export function initMethods(vm, methods) {
    const props = vm.$options.props

    for (const key in methods) {
        if (process.env.NODE_ENV !== 'production') {
            if (methods[key] == null) {
                console.log(`Method "${key}" has an undefined value in the component definition. ` +
                    `Did you reference the function correctly?`,
                    vm)
            }
        }

        if (props && hasOwn(props, key)) {
            console.log(`Method "${key}" has already been defined as a prop.`,
                vm)
        }

        if ((key in vm) && isReserved(key)) {
            console.log(
                `Method "${key}" conflicts with an existing Vue instance method. ` +
                `Avoid defining component methods that start with _ or $.`
            )
        }
        vm[key] = methods[key] == null ? noop : bind(methods[key], vm)
    }
}