import { mergeOptions } from '../util/options'
import { proxy } from '../instance/state'

function initProps (Comp) {
    const { props } = Comp.options
    for (const key in props) {
        proxy(Comp.prototype, '_props', key)
    }


}

export function initExtend(Cue) {
    Cue.cid = 0
    let cid = 1

    Cue.extend = function (extendOptions) {
        const Super = this
        const SuperId = Super.id

        const name = extendOptions.name

        const Sub = function CueComponent (options) {
            this._init(options)
        }

        Sub.prototype = Object.create(Super.prototype)
        Sub.prototype.constructor = Sub
        
        Super.cid = cid++
        Sub.options = mergeOptions(
            Super.options,
            extendOptions
        )

        Sub['super'] = Super

        // proxy props
        if (Sub.options.props) {
            initProps(Sub)
        }

        Sub.extend = Super.extend
        Sub.component = Super.component

        // enable self-lookup
        if (name) {
            Sub.options.components[name] = Sub
        }

        // keep a ref to the super
        Sub.superOptions = Super.options
        Sub.extendOptions = extendOptions
        Sub.sealedOptions = extend({}, Sub.options)

        return Sub
    }
}