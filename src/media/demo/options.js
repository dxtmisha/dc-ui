import { icons } from '@/media/demo/icons'
import { palettes } from '@/media/demo/palettes'
import { size } from '@/media/demo/size'
import { shape } from '@/media/demo/shape'

export const optionsList = {
  active: { text: 'Active' },
  background: { text: 'Background' },
  border: { text: 'Border' },
  bottom: { text: 'Bottom' },
  dot: { text: 'Dot' },
  icon: {
    text: 'Icons',
    default: 'lock_open',
    list: icons
  },
  iconActive: {
    text: 'Active icons',
    default: 'lock',
    list: icons
  },
  disabled: { text: 'Disabled' },
  hide: { text: 'Hide element' },
  left: { text: 'Left' },
  palette: {
    text: 'Palettes',
    list: palettes
  },
  size: {
    text: 'Size',
    list: size
  },
  shape: {
    text: 'Shape',
    list: shape
  },
  turn: { text: 'Turn' },
  visible: { text: 'Visible' },
  options: { subtitle: 'Options' },
  position: { subtitle: 'Position' },
  status: { subtitle: 'Status' },
  values: { subtitle: 'Values' }
}
