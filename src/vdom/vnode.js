class VNode {
  constructor (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions
  ) {
    this.tag = tag
    this.data = data
    this.children = children
    this.text = text
    this.tag = tag
    this.elm = elm
    this.context = context
    this.componentOptions = componentOptions
  }
}

export default VNode

export function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

export function emptyNodeAt (elm) {
  return new VNode(elm.tagName.toLowerCase(), {}, [], undefined, elm)
}
