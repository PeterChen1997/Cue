import { createElement } from "../render";

export function createPatchFunction (oldVnode, vnode, removeOnly) {
    return function patch (oldVnode, vnode, removeOnly) {
        console.log(arguments)
        let isRealElement = Boolean(oldVnode.nodeType)
        
        oldVnode = emptyNodeAt(oldVnode);

        let oldElm = oldVnode.elm
        let parentElm = oldElm.parentNode

        createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          )
    }
} 