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
