import { noop } from '../util/index'
import { observe } from '../observer/index'

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

export function initState (cueInstance) {
  cueInstance._watchers = []

  const opts = cueInstance.$options

  if (opts.props) { initProps(cueInstance, opts.props) }
  if (opts.methods) { initMethods(cueInstance, opts.methods) }
  if (opts.data) { initData(cueInstance) }
  if (opts.computed) { initComputed(cueInstance, opts.computed) }
  if (opts.watch) { initWatch(cueInstance, opts.watch) }
}

export function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

function initProps (cueInstance, propsOptions) {
  const propsData = cueInstance.$options.propsData || {}
  const props = cueInstance._props = {}

  const keys = cueInstance.$options._propsKeys = []
  const isRoot = !cueInstance.$parent

  for (const key in propsData) {
    keys.push(key)
    const value = validateVal

    // TODO: next
  }
}
function initWatch () {}
function initComputed () {}

function initMethods (cueInstance, methods) {
  for (let key in methods) {
    cueInstance[key] = methods[key].bind(cueInstance)
  }
}

function initData (cueInstance) {
  let data = cueInstance.$options.data

  // TODO: disable dep collection when invoking data getter
  data = cueInstance._data = data.call(cueInstance)

  const keys = Object.keys(data)
  let i = keys.length
  while (i--) {
    // proxy data
    proxy(cueInstance, '_data', keys[i])
  }
  // observe data
  observe(data, true /* root data */)
}
