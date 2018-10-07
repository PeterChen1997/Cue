export function updateAttrs(oldVnode, vnode) {
    if (!vnode.data.attrs && !oldVnode.data) {
        return 
    }
    // const oldAttrs = oldVnode.data.attrs || {}
    const attrs = vnode.data.attrs || {}

    for (let key in attrs) {
        vnode.elm.setAttribute(key, attrs[key])
    }
}

export function updateDOMListeners(oldVnode, vnode) {
    if (!vnode.data.on && !oldVnode.data) {
        return 
    }
    // const oldOn = oldVnode.data.on || {}
    const on = vnode.data.on || {}
    
    for (let name in on) {
        vnode.elm.addEventListener(
            name,
            on[name]
        )
    }
}