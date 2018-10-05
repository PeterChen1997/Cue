import { mark, measure } from '../util/perf'
import { callHook, query } from '../util/helper'

export function methodMixin (Cue) {
  Cue.prototype.$mount = function (element) {
    element = query(element)

    this.$element = element

    callHook(this, 'beforeMount')

    let updateComponent = function () {
      let name = this.name
      let startTag = 'cue-perf-start:' + name
      let endTag = 'cue-perf-end:' + name

      mark(startTag)
      let vnode = this._render()
      mark(endTag)
      measure(('cue ' + name + ' render'), startTag, endTag)

      mark(startTag)
      this._update(vnode)
      mark(endTag)
      measure(('cue ' + name + ' patch'), startTag, endTag)
    }

    updateComponent.call(this)
  }
}
