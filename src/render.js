import { normalizeChildren, isReservedTag } from './util/helper'
import VNode from './vdom/vnode'

export function createElement (
  context,
  tag,
  data,
  children
) {
  console.log(arguments)
  children = normalizeChildren(children)

  let vnode
  if (isReservedTag(tag)) {
    vnode = new VNode()
  }

  return vnode
}
