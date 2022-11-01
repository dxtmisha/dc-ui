import { props as main } from './props'
import useAttrs from '../../uses/useAttrs'

export default function useTextarea (props) {
  return useAttrs({
    code: 'input',
    pointer: [
      'name',
      'readonly',
      'disabled',
      'autocomplete',
      'autofocus',
      'inputmode',
      'minlength',
      'maxlength',
      'placeholder',
      'required',
      'spellcheck'
    ],
    props: main,
    original: props
  })
}
