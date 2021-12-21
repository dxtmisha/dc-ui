import {
  carcassFieldAdaptive,
  carcassFieldAppearance,
  carcassFieldSize
} from '@/views/DemoCarcassField/options'
import {
  counter,
  disabled,
  helperMessage,
  icon,
  iconActive,
  maxlength,
  minlength,
  optionField,
  optionIcon,
  optionInput,
  palette,
  placeholder,
  readonly,
  required,
  selected,
  shape,
  status,
  text,
  validationMessage,
  values
} from '@/media/--demo/options'
import { textarea } from '@/media/demo/data/text'

export const textareaValue = {
  value: 'value',
  message: textarea
}

export const optionsTextarea = {
  values,
  textareaValue,

  status,
  selected,
  readonly,
  disabled,

  optionInput,
  minlength,
  maxlength,
  placeholder,
  required,

  optionField,
  text,
  helperMessage,
  validationMessage,
  palette,
  carcassFieldAppearance,
  carcassFieldSize,
  shape,
  carcassFieldAdaptive,
  counter,

  optionIcon,
  icon,
  iconActive
}
