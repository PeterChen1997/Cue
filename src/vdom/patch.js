import VNode, { emptyNodeAt } from '../vdom/vnode'
import { updateAttrs, updateDOMListeners } from '../update/index'
import { isDef, isUndef } from '../util'
import { isTextInputType } from '../util/helper'

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

function sameInputType(a, b) {
  if (a.tag !== 'input') return true
  let i
  const typeA = isDef(i = a.data) && isDef(i = i.attr) && i.type
  const typeB = isDef(i = b.data) && isDef(i = i.attr) && i.type
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

// only diff the same level node
function sameVnode(a, b) {
  return (
    a.key === b.key && (
      a.tag === b.tag &&
      a.isComment === b.isComment &&
      isDef(a.data) === isDef(b.data) &&
      sameInputType(a, b)
    )
  )
}

function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
  let oldStartIdx = 0
  let newStartIdx = 0
  let oldEndIdx = oldCh.length - 1
  let oldStartVnode = oldCh[0]
  let oldEndVnode = oldCh[oldEndIdx]
  let newEndIdx = newCh.length - 1
  let newStartVnode = newCh[0]
  let newEndVnode = newCh[newEndIdx]
  let oldKeyToIdx, idxInOld, vnodeToMove, refElm

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isUndef(oldStartVnode)) {

    } else if (isUndef(oldEndVnode)) {

    } else if (sameVnode(oldStartVnode, newStartVnode)) { // 头头比较
      patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (sameVnode(oldEndVnode, newEndVnode)) { // 尾尾比较

    } else if (sameVnode(oldStartVnode, newEndVnode)) { // 头尾比较
      patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
      parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldEndVnode, newStartVnode)) { // 尾头比较
      patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
      parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    } else {

    }

  }
  if (oldStartIdx > oldEndIdx) {
    refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
  }
}

function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
  if (oldVnode === vnode) {
    return
  }

  const elm = vnode.elm = oldVnode.elm

  // prepatch
  let i
  let { data } = vnode
  if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
    i(oldVnode, vnode)
  }
  // update
  const oldCh = oldVnode.children
  const ch = vnode.children
  // TODO: ignore this part
  // if (isDef(data) && isPatchable(vnode)) {
  // for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
  // if (isDef(i = data.hook) && isDef(i = i.update)) i(oldVnode, vnode)
  // }

  // doing patch
  if (isUndef(vnode.text)) {
    if (isDef(oldCh) && isDef(ch)) { // 更新子节点
      if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue)
    } else if (isDef(ch)) { // 旧节点为文本或为空
      if (isDef(oldVnode.text)) elm.textContent = ''
      // addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
    } else if (isDef(oldCh)) { // 新节点为空
      // removeVnodes(elm, oldCh, 0, oldCh.length - 1)
    } else if (isDef(oldVnode.text)) { // 旧节点为文本
      elm.textContent = ''
    }
  }
  // postpatch
  if (isDef(data)) {
    if (isDef(i = data.hook) && isDef(i = i.postpatch)) i(oldVnode, vnode)
  }
}

export function createPatchFunction(oldVnode, vnode, removeOnly) {
  return function patch(oldVnode, vnode, removeOnly) {
    // let isRealElement = Boolean(oldVnode.nodeType)

    let isInitialPatch = false
    let insertedVnodeQueue = []

    if (isUndef(oldVnode)) {
      isInitialPatch = true
      createElm(vnode, insertedVnodeQueue)
    } else {
      if (sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode, insertedVnodeQueue)
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
    }
    // invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

function invokeInsertHook(vnode, queue, initial) {
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

function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
  for (; startIdx <= endIdx; ++startIdx) {
    createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx)
  }
}