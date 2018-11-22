import { normalizeChildren, isReservedTag } from './util/helper'
import VNode from './vdom/vnode'
import { isDef, isUndef, resolveAsset } from './util/index'
import { activeInstance } from './core/init'

const componentVNodeHooks = {
  init (vnode) {
    const child = vnode.componentInstance = createComponentInstanceForVnode(
      vnode,
      activeInstance
    )

    child.$mount(undefined)
  },

  prepatch (oldVnode, vnode) {

  },

  insert (vnode) {

  },

  destory (vnode) {

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
  } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
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

  let propsData = Object.assign({}, data.props)

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
  for (let i = 0; i < hooksToMerge.length; i++) {
    const key = hooksToMerge[i]
    const existing = hooks[key]
    const toMerge = componentVNodeHooks[key]

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHooks(toMerge, existing) : toMerge
    }
  }
}

function mergeHooks (f1, f2) {
  const merged = (a, b) => {
    f1(a, b),
    f2(a, b)
  }
  merged._merged = true
  return merged
}

export function createComponentInstanceForVnode (vnode, parent) {
  const options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent
  }

  return new vnode.componentOptions.Ctor(options)
}