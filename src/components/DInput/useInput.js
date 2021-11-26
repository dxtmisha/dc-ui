import { useRefs } from '@/uses/useRefs'

export const useInput = function (props, attrs) {
  const bindInput = useRefs(props, [
    'name',
    'required',
    'readonly',
    'disabled',
    'type',
    'autocomplete',
    'autofocus',
    'inputmode',
    'min',
    'max',
    'minlength',
    'maxlength',
    'pattern',
    'placeholder',
    'spellcheck',
    'step'
  ], attrs.value || {})

  return {
    bindInput
  }
}
