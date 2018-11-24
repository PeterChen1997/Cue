let reactiveObj = { clickSum: 0 }
let currentTarget = ''

function applyToDom (target, value) {
  document.querySelector(target).innerText = value
}

function _init () {
  observeObj(reactiveObj)

  let button = document.querySelector('.test-btn')
  button.addEventListener('click', () => {
    reactiveObj.clickSum += 1
  })

  currentTarget = 'window'
  fakeUpdateComponentFunc()
  currentTarget = ''
}

function observeObj (reactiveObj) {
  for (let key in reactiveObj) {
    defineReactive(reactiveObj, key)
  }
}

function fakeUpdateComponentFunc () {
  (function _render () {
    // do nothing...
  })(); // template/render func => vnode

  (function _update () {
    applyToDom('.sum', reactiveObj.clickSum)
  })() // vnode => dom
}

function defineReactive (obj, key) {
  let val = obj[key]

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      console.log('getter has been called')

      // 这里进行依赖收集
      if (currentTarget) {
        // dep.depend()
        console.log('===> dep collection done')
      }

      return val
    },
    set: function reactiveSetter (newValue) {
      console.log('setter has been called')

      if (newValue === val) {
        return
      }
      console.log('===> value has been set')
      val = newValue

      // 这里进行派发更新
      // dep.notify()
      fakeUpdateComponentFunc()
    }
  })
}

_init()
