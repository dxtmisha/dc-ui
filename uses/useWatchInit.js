import { watch } from 'vue'

/**
 * @param {*} sources
 * @param {Function} cb
 * @param {Boolean} deep
 * @returns {ref}
 */
export default function useWatchInit (sources, cb, deep) {
  watch(sources, cb, { deep })
  cb()
}
