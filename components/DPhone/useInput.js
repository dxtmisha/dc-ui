import useAttrs from '../../uses/useAttrs'
import { props as main } from './props'

export default function useInput (props, propPlaceholder) {
  return useAttrs({
    code: 'input',
    pointer: [
      'name',
      'readonly',
      'disabled',
      'autofocus',
      'required'
    ],
    props: main,
    original: props,
    items: {
      placeholder: propPlaceholder
    }
  })
}
