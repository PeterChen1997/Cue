// import { initMixin } from './core/init.js'

class Cue {
  constructor (options) {
    console.log('_init is begin')
    this._init(options)
    console.log('_init is done')
  }
}

Cue.prototype.$mount = function (element) {
  console.log('$mount', this)

  document.querySelector(element).innerHTML = this.$options.template
}

Cue.prototype._init = function (options) {
  console.log('_init', this)

  const cueInstance = this

  cueInstance.$options = Object.assign({}, options)

  cueInstance.$mount(cueInstance.$options.querySelector)
}

// initMixin(Cue)

export default Cue
