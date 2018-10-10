import { pushTarget, popTarget } from './dep'
import { queueWatcher } from './scheduler'

let uid = 0

export default class Watcher {
  constructor (
    cueInstance,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.cueInstance = cueInstance
    if (isRenderWatcher) {
      cueInstance._watcher = this
    }
    cueInstance._watchers.push(this)

    this.deep = this.user = this.lazy = this.sync = false

    this.cb = cb
    this.id = uid++
    this.active = true
    this.dirty = this.lazy
    this.deps = []
    this.newDeps = []
    this.depIds = new Set()
    this.newDepIds = new Set()
    this.expression = expOrFn.toString()

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn
    }

    this.value = this.lazy
      ? undefined
      : this.get()
  }

  /**
     * Evaluate the getter, and re-collect dependencies.
     */
  get () {
    pushTarget(this)
    let value
    const cueInstance = this.cueInstance

    try {
      value = this.getter.call(cueInstance, cueInstance)
    } finally {
      popTarget()
      // this.cleanupDeps()
    }

    return value
  }

  run () {
    if (this.active) {
      // let value =
      this.get()
      // if (value !== this.value) {

      // }
    }
  }

  /**
     * Clean up for dependency collection.
     */
  cleanupDeps () {

  }

  update () {
    if (this.lazy) {
      this.dirty = true
    } else if (this.sync) {
      this.run()
    } else {
      queueWatcher(this)
    }
  }

  addDep (dep) {
    const id = dep.id
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id)
      this.newDeps.push(dep)
      if (!this.depIds.has(id)) {
        dep.addSub(this)
      }
    }
  }
}
