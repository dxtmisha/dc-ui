import useAttrs from '../../uses/useAttrs'
import { props as main } from './props'

export default function useInput (props) {
  return useAttrs({
    code: 'input',
    pointer: [
      'min',
      'max',
      'required',
      'disabled'
    ],
    props: main,
    original: props,
    attrs: { type: 'number' }
  })
}
