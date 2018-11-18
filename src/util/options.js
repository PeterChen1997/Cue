import config from '../config.js'
import { hasOwn } from '../util/helper'
import { extend } from './index.js';

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