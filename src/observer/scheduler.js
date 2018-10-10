let has = {}
let flushing = false
let waiting = false
// let index = 0

const queue = []

// function flushSchedulerQueue () {
//   flushing = true
//   let watcher, id
// }

function resetSchedulerState () {
//   index =
  queue.length = 0
  has = {}

  waiting = flushing = false
}

export function queueWatcher (watcher) {
  const { id } = watcher
  if (!has[id]) {
    has[id] = true
    if (!flushing) {
      queue.push(watcher)
    } else {

    }
  }

  if (!waiting) {
    waiting = true
    watcher.run()
    // nextTick(flushSchedulerQueue)

    resetSchedulerState()

    // callActivatedHooks(activatedQueue)
    // callUpdatedHooks(updatedQueue)
  }
}
