// import { windowWidth } from '@/views/DemoWindow/options'
import { helper1, quote1, quote2 } from '@/media/--demo/data/text'
import {
  icon,
  optionIcon,
  options,
  status,
  sticky,
  values
} from '@/media/--demo/options'

export const bannerText = {
  value: 'text',
  default: 'Interactive demo',
  list: [
    { value: undefined },
    { value: 'Interactive demo' },
    {
      text: 'helper1',
      value: helper1
    },
    {
      text: 'quote1',
      value: quote1
    },
    {
      text: 'quote2',
      value: quote2
    }
  ]
}

export const optionsBanner = {
  values,
  bannerText,

  status,
  open: { default: true },

  options,
  // windowWidth,
  sticky,

  optionIcon,
  icon,
  iconBackground: { default: true }
}
