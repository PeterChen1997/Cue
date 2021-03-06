import { mark, measure } from '../util/perf'
import { callHook, query } from '../util/helper'
import { noop } from '../util/index'
import Watcher from '../observer/watcher'

export function methodMixin (Cue) {
  Cue.prototype.$mount = function (element) {
    element = query(element)

    this.$element = element

    callHook(this, 'beforeMount')

    this._self = this
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

    new Watcher(this, updateComponent, noop, null, true /* isRenderWatcher */) // eslint-disable-line
    // updateComponent.call(this)

    this._isMounted = true
    callHook(this, 'mounted')
    return this
  }
}
