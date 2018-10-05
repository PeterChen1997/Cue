const perf = window.performance

export function mark (tag) {
  return perf.mark(tag)
}

export function measure (name, startTag, endTag) {
    perf.measure(name, startTag, endTag);

    var measures = perf.getEntriesByName(name);
    var measure = measures[0];
    console.log(name, 'costs', measure.duration)

    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
    perf.clearMeasures(name);
}
