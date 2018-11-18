import { normalizeChildren, isReservedTag } from './util/helper'
import VNode from './vdom/vnode'
import { isDef, isUndef, resolveAssets } from './util/index'

const componentVNodeHooks = {
  init(vnode) {
    
  },

  prepatch(oldVnode, vnode) {

  },

  insert(vnode) {

  },

  destory(vnode) {

  }
}
const hooksToMerge = Object.keys(componentVNodeHooks)

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
  let Ctor
  if (isReservedTag(tag)) {
    vnode = new VNode(
      tag, data, children,
      undefined, undefined, context
    )
  } else if (isDef(Ctor = resolveAssets(context.$options, 'components', tag))) {
    vnode = createComponent(Ctor, data, context, children, tag)
  }
  return vnode
}

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  let bastCtor = context.$options._base

  let asyncFactory = undefined

  let propsData = Ctor.options.props

  // install component management hooks onto the placeholder node
  installComponentHooks(data)

  let name = Ctor.options.name || tag
  let vnode = new VNode(
    ('cue-component-' + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor, propsData, listeners: undefined, tag, children },
    asyncFactory
  )

  return vnode
}

function installComponentHooks (data) {
  const hooks = data.hook || (data.hook = {})
  // TODO: Next
}