import { normalizeChildren, isReservedTag } from './util/helper'
import VNode from './vdom/vnode'

export function createElement (
  context,
  tag,
  data,
  children
) {
  // data为字符串，调整处理方式
  if (typeof data !== 'function' && typeof data !== 'object') {
    children = data
    data = undefined
  }

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
