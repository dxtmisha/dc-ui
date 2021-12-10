import { readonly, toRefs } from 'vue'

export default function useInput (props) {
  const refs = toRefs(props)
  const bindInput = readonly({
    type: 'number',
    min: refs.min,
    max: refs.max,
    required: refs.required,
    disabled: refs.disabled
  })

  return { bindInput }
}
