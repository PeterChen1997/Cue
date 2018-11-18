import { createElement } from '../render'
import { mergeOptions } from '../util/options'
import { callHook } from '../util/helper'
import { createPatchFunction } from '../vdom/patch'
import { initState } from '../instance/state'

let uid = 0
export function initMixin (Cue) {
  Cue.prototype._init = function (options) {
    const cueInstance = this

    cueInstance.uid = uid++
    cueInstance._isVue = true
    // merge options
    if (options && options._isComponent) {
      // initInternalComponent(cueInstance, options)
    } else {
      cueInstance.$options = mergeOptions(
        resolveConstructorOptions(cueInstance.constructor),
        options || {},
        cueInstance
      )
    }

    cueInstance.name = options.name

    cueInstance.$createElement = (a, b, c) => createElement(cueInstance, a, b, c)

    callHook(cueInstance, 'beforeCreate')
    initState(cueInstance)
    callHook(cueInstance, 'created')

    cueInstance.$mount(cueInstance.$options.querySelector)
  }

  Cue.prototype._render = function () {
    let vnode
    vnode = this.$options.render.call(this, this.$createElement)
    return vnode
  }

  Cue.prototype._update = function (vnode) {
    this.$element = this.__patch__(this.$element, vnode, false)
  }

  Cue.prototype.__patch__ = createPatchFunction()
}

export function resolveConstructorOptions (Ctor) {
  let options = Ctor.options
  if (Ctor.super) {
    let superOptions = resolveConstructorOptions(Ctor.super)
    let cachedSuperOptions = Ctor.superOptions
    if (superOptions !== cachedSuperOptions) {
      Ctor.superOptions = superOptions

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
      if (options.name) {
        options.components[options.name] = Ctor
      }
    }
  }
  return options
}