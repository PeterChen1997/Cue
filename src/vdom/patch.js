import VNode, { emptyNodeAt } from '../vdom/vnode'
import { updateAttrs, updateDOMListeners } from '../update/index'
import { isDef, isUndef } from '../util';

function createElm(
  vnode,
  insertedVnodeQueue,
  parentElm,
  refElm,
  nested,
  ownerArray,
  index
) {
  vnode.isRootInsert = !nested
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
  insert(parentElm, vnode.elm, refElm)
}

function insert(parentElm, elm, refElm) {
  if (parentElm) {
    if (refElm) {
      if (refElm.parentNode === parentElm) {
        parentElm.insertBefore(elm, refElm)
      }
    } else {
      parentElm.appendChild(elm)
    }
  }
}

function createChildren(vnode, children, insertedVnodeQueue) {
  for (let i = 0; i < children.length; i++) {
    createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i)
  }
}

function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
  let i = vnode.data
  if (isDef(i)) {
    if (isDef(i = i.hook) && isDef(i = i.init)) {
      i(vnode, false)
    }
    // after calling the init hook, if the vnode is a child component
    // it should've created a child instance and mounted it. the child
    // component also has set the placeholder vnode's elm.
    // in that case we can just return the element and be done.
    if (isDef(vnode.componentInstance)) {
      initComponent(vnode, insertedVnodeQueue)
      parentElm.appendChild(vnode.elm)
      // if (isTrue(isReactivated)) {
      //   reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)
      // }
      return true
    }
  }

  return false
}

function initComponent(vnode, insertedVnodeQueue) {
  vnode.elm = vnode.componentInstance.$element

  if (isPatchable(vnode)) {
    invokeCreateHooks(vnode, insertedVnodeQueue)
  }
}

function isPatchable(vnode) {
  while (vnode.componentInstance) {
    vnode = vnode.componentInstance._vnode
  }
  return isDef(vnode.tag)
}

function invokeCreateHooks(vnode, insertedVnodeQueue) {
  let emptyNode = new VNode()
  updateAttrs(emptyNode, vnode)
  updateDOMListeners(emptyNode, vnode)
}

function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
  parentElm.removeChild(vnodes[0].elm)
}

export function createPatchFunction(oldVnode, vnode, removeOnly) {
  return function patch(oldVnode, vnode, removeOnly) {
    // let isRealElement = Boolean(oldVnode.nodeType)

    let isInitialPatch = false
    let insertedVnodeQueue = []

    // for component
    if (isUndef(oldVnode)) {
      isInitialPatch = true
      createElm(vnode, insertedVnodeQueue)
    } else {
      oldVnode = emptyNodeAt(oldVnode)

      let oldElm = oldVnode.elm
      let parentElm = oldElm.parentNode


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
    }

    // invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

function invokeInsertHook (vnode, queue, initial) {
  // delay insert hooks for component root nodes, invoke them after the
  // element is really inserted
  if (initial && isDef(vnode.parent)) {
    vnode.parent.data.pendingInsert = queue
  } else {
    for (let i = 0; i < queue.length; ++i) {
      queue[i].data.hook.insert(queue[i])
    }
  }
}