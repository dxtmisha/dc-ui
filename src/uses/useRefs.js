import { readonly } from 'vue'

export const useRefs = function (props, list, extra = {}) {
  const refs = {}

  list.forEach(index => {
    refs[index] = props[index]
  })

  return readonly({ ...refs, ...extra })
}
