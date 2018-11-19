import config from '../config.js'
import { hasOwn } from '../util/helper'
import { extend, camelize } from './index.js';

const ASSET_TYPES = [
    'component',
    'directive',
    'filter'
]
const strats = config.optionMergeStrategies

const defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
        ? parentVal
        : childVal
}

function mergeAssets (
    parentVal,
    childVal,
    cueInstance,
    key
) {
    const res = Object.create(parentVal || null)
    if (childVal) {
        return extend(res, childVal)
    } else {
        return res
    }
}

ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets
})

export function mergeOptions (parent, child, cueInstance) {

    normalizeProps(child, cueInstance)
    
    let options = {}

    for (let key in parent) {
        mergeField(key)
    }
    for (let key in child) {
        if (!hasOwn(parent, key)) {
            mergeField(key)
        }
    }

    function mergeField (key) {
        let strat = strats[key] || defaultStrat
        options[key] = strat(parent[key], child[key], cueInstance, key)
    }

    return options
}

function normalizeProps (options) {
    const { props } = options
    if (!props) return
    
    const res = {}
    let i, val, name
    if (Array.isArray(props)) {
        i = props.length
        while (i--) {
            val = props[i]
            if (typeof val === 'string') {
                name = camelize(val)
                res[name] = { type: null }
            } else {
                console.warn('props must be strings when using array syntax.')
            }
        }
    } else if (isPlainObject(props)) {
        for (const key in props) {
            val = props[key]
            name = camelize(key)
            res[name] = isPlainObject(val)
                ? val
                : { type: val }
        }
    }
    options.props = res
}

