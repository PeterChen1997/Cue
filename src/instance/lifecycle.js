// import { toggleObserving } from "../observer";

export function updateChildComponent (
  cueInstance,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  cueInstance.$options._parentVnode = parentVnode
  cueInstance.$vnode = parentVnode // update cueInstance's placeholder node without re-render
  if (cueInstance._vnode) { // update child tree's parent
    cueInstance._vnode.parent = parentVnode
  }
  cueInstance.$options._renderChildren = renderChildren

  // TODO: update $attrs and $listeners hash
  // cueInstance.$attrs = parentVnode.data.attrs || {}
  // cueInstance.$listeners = listeners || {}

  // update props
  if (propsData && cueInstance.$options.props) {
    cueInstance.$options.propsData = propsData
  }

  // TODO: update listeners
  // listeners = listeners || emptyObject
  // const oldListeners = cueInstance.$options._parentListeners
  // cueInstance.$options._parentListeners = listeners
  // updateComponentListeners(cueInstance, listeners, oldListeners)

  // TODO: resolve slots + force update if has children
  // if (hasChildren) {
  //     cueInstance.$slots = resolveSlots(renderChildren, parentVnode.context)
  //     cueInstance.$forceUpdate()
  // }
}
