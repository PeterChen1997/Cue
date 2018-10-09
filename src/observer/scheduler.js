let has = {}
let flushing = false
let waiting = false

const queue = []

export function queueWatcher(watcher) {
    const { id } = watcher
    if (!has[id]) {
        has[id] = true
        if (!flushing) {
            queue.push(watcher)
        } else {

        }
    }

    if (!waiting)  {
        waiting = true
        // nextTick(flushSchedulerQueue)
    }

}