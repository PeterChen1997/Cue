export function initMixin (Cue) {
  Cue.prototype._init = function () {
    console.log('_init')
  }
}
