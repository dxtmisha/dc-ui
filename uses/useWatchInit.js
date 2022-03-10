import { watch } from 'vue'

/**
 * @param {*} sources
 * @param {Function} cb
 * @param {Boolean} deep
 */
export default function useWatchInit (sources, cb, deep = false) {
  watch(sources, cb, { deep })
  cb()
}
