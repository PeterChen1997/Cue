import { hasOwn } from './helper'

export function noop() { }

// Mix property into target object
export function extend(to, _from) {
    for (const key in _from) {
        to[key] = _from[key]
    }
    return to
}

export function isDef(v) {
    return v !== undefined && v !== null
}

export function isUndef(v) {
    return v === undefined || v === null
}

export function resolveAsset(
    options,
    type,
    id,
    warnMissing
) {

    if (typeof id !== 'string') {
        return
    }

    const assets = options[type]
    // check local registration variations first
    if (hasOwn(assets, id)) return assets[id]
    const camelizedId = camelize(id)
    if (hasOwn(assets, camelizedId)) return assets[camelizedId]
    const PascalCaseId = capitalize(camelizedId)
    if (hasOwn(assets, PascalCaseId)) return assets[PascalCaseId]
    // fallback to prototype chain
    const res = assets[id] || assets[camelizedId] || assets[PascalCaseId]
    if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
        warn(
            'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
            options
        )
    }
    return res
}

/**
 * Camelize a hyphen-delimited string.
 */
const camelizeRE = /-(\w)/g
export const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
}

/**
 * Capitalize a string.
 */
export const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export function isPlainObject (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}