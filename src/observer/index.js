import Dep from './dep'
import { def, hasOwn } from '../util/helper'

export class Observer {
  constructor (value) {
    this.value = value
    this.cueInstanceCount = 0
    this.dep = new Dep()

    def(value, '__ob__', this)

    this.walk(value)
  }

  walk (obj) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
}

export function observe (value, asRootData) {
  if (typeof value !== 'object') {
    return
  }

  let ob
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }
  if (asRootData && ob) {
    ob.cueInstanceCount++
  }
  return ob
}

export function defineReactive (
  obj,
  key,
  val
) {
  const dep = new Dep()

  const property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  if (arguments.length === 2) {
    val = obj[key]
  }

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      if (Dep.target) {
        dep.depend()
      }
      return val
    },
    set: function reactiveSetter (newValue) {
      console.log(key + ' has been set')
      if (newValue === val) {
        return
      }
      val = newValue

      // childOb = observe(newValue)
      dep.notify()
    }
  })
}

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
export let shouldObserve = true

export function toggleObserving (value) {
  shouldObserve = value
}