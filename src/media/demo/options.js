import { adaptive } from '@/media/demo/adaptive'
import { icons } from '@/media/demo/icons'
import { palettes } from '@/media/demo/palettes'
import { size } from '@/media/demo/size'
import { shape } from '@/media/demo/shape'

export const optionsList = {
  active: { text: 'Active' },
  adaptive: {
    text: 'Active',
    list: adaptive
  },
  background: { text: 'Background' },
  badge: {
    text: 'Value',
    message: { value: 'Demo' }
  },
  badgeIcon: {
    text: 'Icon',
    list: icons
  },
  border: { text: 'Border' },
  bottom: { text: 'Bottom' },
  dense: { text: 'Dense' },
  dragged: { text: 'Dragged' },
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
  iconAnimationShow: { text: 'Show with animation' },
  iconBackground: { text: 'Background' },
  iconHide: { text: 'Hide icon' },
  iconReadonly: { text: 'Readonly' },
  iconTrailing: {
    text: 'Trailing icons',
    default: 'arrow_drop_down',
    list: icons
  },
  disabled: { text: 'Disabled' },
  hide: { text: 'Hide element' },
  left: { text: 'Left' },
  lowercase: { text: 'Lowercase' },
  palette: {
    text: 'Palettes',
    list: palettes
  },
  progress: { text: 'Progress' },
  readonly: { text: 'Readonly' },
  ripple: {
    text: 'Ripple',
    default: true
  },
  selected: { text: 'Selected' },
  size: {
    text: 'Size',
    list: size
  },
  shape: {
    text: 'Shape',
    list: shape
  },
  text: {
    text: 'Text',
    default: true,
    message: 'Interactive demo'
  },
  turn: { text: 'Turn' },
  visible: { text: 'Visible' },
  options: { subtitle: 'Options' },
  optionsIcon: { subtitle: 'Icon' },
  position: { subtitle: 'Position' },
  status: { subtitle: 'Status' },
  values: { subtitle: 'Values' },
  valuesBadge: { subtitle: 'Badge' }
}
