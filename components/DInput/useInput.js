import useAttrs from '../../uses/useAttrs'
import { props as main } from './props'

export default function useInput (props) {
  return useAttrs({
    code: 'input',
    pointer: [
      'name',
      'readonly',
      'disabled',
      'type',
      'autocomplete',
      'autofocus',
      'inputmode',
      'step',
      'min',
      'max',
      'minlength',
      'maxlength',
      'pattern',
      'placeholder',
      'required',
      'spellcheck'
    ],
    props: main,
    original: props
  })
}
