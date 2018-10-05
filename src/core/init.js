import { mark, measure } from '../util/perf'
import { createElement } from '../render'
import { callHook, query } from '../util/helper'
import { createPatchFunction } from '../vdom/patch'

export function initMixin (Cue) {
  Cue.prototype._init = function (options) {
    const cueInstance = this

    cueInstance.$options = Object.assign({}, options)
    cueInstance.name = options.name

    cueInstance.$createElement = (a, b, c) => createElement(cueInstance, a, b, c)

    callHook(cueInstance, 'beforeCreate')

    callHook(cueInstance, 'created')

    cueInstance.$mount(cueInstance.$options.querySelector)
  }

  Cue.prototype._render = function () {
    let vnode
    vnode = this.$options.render.call(this, this.$createElement)
    return vnode
  }

  Cue.prototype._update = function (vnode) {
    this.$el = this.__patch__(this.$el, vnode, false)
  }

  Cue.prototype.__patch__ = createPatchFunction
}
