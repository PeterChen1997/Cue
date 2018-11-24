import { initExtend } from './extend'

export function initGlobalAPI (Cue) {
  Cue.options = Object.create(null)
  Cue.options.components = Object.create(null)
  Cue.options._base = Cue

  initExtend(Cue)

  Cue.component = function (id, definition) {
    if (typeof definition === 'object') {
      definition.name = definition.name || id
      definition = this.options._base.extend(definition)
    }
    this.options['components'][id] = definition
    return definition
  }
}
