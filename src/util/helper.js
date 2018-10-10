import { createTextVNode } from '../vdom/vnode'

export function callHook (cueInstance, lifeHook) {
  console.log(cueInstance, lifeHook)
}

export function query (element) {
  const selected = document.querySelector(element)
  return selected
}

export function normalizeChildren (children) {
  if (typeof children === 'string') {
    children = [createTextVNode(children)]
  }
  return children
}

export function isReservedTag (tag) {
  // TODO: isHTMLTag(tag) || isSVG(tag)
  return true
}

export function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}

export function hasOwn (obj, property) {
  return Object.prototype.hasOwnProperty.call(obj, property)
}
