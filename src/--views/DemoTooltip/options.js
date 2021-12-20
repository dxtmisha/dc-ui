// import { windowIndent } from '@/views/DemoWindow/options'
import {
  arrow,
  delay,
  disabled,
  options,
  shape,
  status,
  text,
  top,
  values
} from '@/media/--demo/options'

export const tooltipWidth = {
  value: 'width',
  list: [
    { value: undefined },
    { value: '0px' },
    { value: '32px' },
    { value: '48px' },
    { value: '64px' }
  ]
}

export const optionsTooltip = {
  values,
  text,

  status,
  disabled,

  options,
  tooltipWidth,
  shape,
  // windowIndent,
  arrow,
  delay,
  top
}
