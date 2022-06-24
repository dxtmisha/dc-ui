import useAttrs from '../../uses/useAttrs'
import { props as main } from './props'

export default function useInput (props) {
  return useAttrs({
    code: 'input',
    pointer: [
      'name',
      'readonly',
      'disabled',
      'autofocus',
      'placeholder',
      'required'
    ],
    props: main,
    original: props
  })
}
