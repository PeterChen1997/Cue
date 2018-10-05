import VNode, { emptyNodeAt } from '../vdom/vnode'

function createElm (
  vnode,
  insertedVnodeQueue,
  parentElm,
  refElm,
  nested,
  ownerArray,
  index
) {
  if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
    return
  }

  let { data, tag, children } = vnode

  if (tag) {
    vnode.elm = document.createElement(tag)
    createChildren(vnode, children, insertedVnodeQueue)

    if (data) {
      invokeCreateHooks(vnode, insertedVnodeQueue)
    }
  } else {
    vnode.elm = document.createTextNode(vnode.text)
  }

  if (refElm) {
    if (refElm.parentNode === parentElm) {
      parentElm.insertBefore(vnode.elm, refElm)
    }
  } else {
    parentElm.appendChild(vnode.elm)
  }
}

function createChildren (vnode, children, insertedVnodeQueue) {
  for (let i = 0; i < children.length; i++) {
    createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i)
  }
}

function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
  return false
}

function invokeCreateHooks (vnode, insertedVnodeQueue) {
  updateAttrs(new VNode(), vnode)
}

function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
  parentElm.removeChild(vnodes[0].elm)
}

function updateAttrs (oldVnode, vnode) {
  // const oldAttrs = oldVnode.data.attrs || {}
  const attrs = vnode.data.attrs || {}

  for (let key in attrs) {
    vnode.elm.setAttribute(key, attrs[key])
  }
}

export function createPatchFunction (oldVnode, vnode, removeOnly) {
  return function patch (oldVnode, vnode, removeOnly) {
    // let isRealElement = Boolean(oldVnode.nodeType)

    oldVnode = emptyNodeAt(oldVnode)

    let oldElm = oldVnode.elm
    let parentElm = oldElm.parentNode

    let insertedVnodeQueue = []

    createElm(
      vnode,
      insertedVnodeQueue,
      // extremely rare edge case: do not insert if old element is in a
      // leaving transition. Only happens when combining transition +
      // keep-alive + HOCs. (#4590)
      parentElm,
      oldElm.nextSibling
    )

    // update parent placeholder node element, recursively

    // destory old node
    if (parentElm) {
      removeVnodes(parentElm, [oldVnode], 0, 0)
    }
    return vnode.elm
  }
}
