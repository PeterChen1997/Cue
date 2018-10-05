import { normalizeChildren, isReservedTag } from './util/helper'
import VNode from './vdom/vnode'

export function createElement (
  context,
  tag,
  data,
  children
) {
  children = normalizeChildren(children)

  let vnode
  if (isReservedTag(tag)) {
    vnode = new VNode(
      tag, data, children,
      undefined, undefined, context
    )
  }
  return vnode
}
