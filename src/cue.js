import { initMixin } from './core/init'
import { methodMixin } from './core/method'

class Cue {
  constructor (options) {
    console.log('_init is begin')
    this._init(options)
    console.log('_init is done')
  }
}

initMixin(Cue)
methodMixin(Cue)

export default Cue
