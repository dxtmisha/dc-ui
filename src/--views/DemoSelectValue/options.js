import { buttonAppearance } from '@/--views/DemoButton/options'
import {
  cancel,
  disabled,
  multiple,
  options,
  palette,
  shape,
  size,
  status,
  values
} from '@/media/--demo/options'

export const selectValueValue = {
  value: 'value',
  default: true,
  message: [
    {
      text: 'Kelly Klein',
      value: 'kelly_klein'
    },
    {
      text: 'Joseph Martin',
      value: 'joseph_martin'
    },
    {
      text: 'Richard Sullivan',
      value: 'richard_sullivan'
    },
    {
      text: 'James Morris',
      value: 'james_morris'
    },
    {
      text: 'Jimmy Davis',
      value: 'jimmy_davis'
    },
    {
      text: 'Paula Ortiz',
      value: 'paula_ortiz'
    }
  ]
}

export const optionsSelectValue = {
  values,
  selectValueValue,
  multiple,

  status,
  disabled,

  options,
  palette,
  buttonAppearance,
  size,
  shape,
  cancel
}
