import { windowShape, windowSize, windowWidth } from '@/views/DemoWindow/options'
import {
  autoClose,
  axis,
  border,
  dense,
  disabled,
  landscape,
  open,
  optionActions,
  options,
  optionWindow,
  persistent,
  status,
  title,
  values
} from '@/media/demo/options'
import action from '@/media/demo/list/action'
import { quote2 } from '@/media/demo/data/text'

export const dialogImage = {
  value: 'image',
  list: [
    { value: undefined },
    {
      text: 'true',
      value: true
    },
    {
      text: 'image',
      value: require('@/assets/images/image-01.jpeg')
    }
  ]
}

export const dialogActionsManagement = {
  value: 'actionsManagement',
  message: action
}

export const dialogAdaptive = {
  value: 'adaptive',
  list: [
    { value: undefined },
    { value: 'modal' },
    { value: 'modal-left' },
    { value: 'modal-right' }
  ]
}

export const optionsDialog = {
  values,
  title,
  text: {
    default: true,
    message: quote2
  },
  dialogImage,

  status,
  open,
  disabled,

  optionActions,
  dialogActionsManagement,
  axis,

  options,
  landscape,
  dense,
  border: {
    ...border,
    default: true
  },

  optionWindow,
  windowWidth,
  windowSize,
  windowShape,
  dialogAdaptive,
  autoClose: {
    ...autoClose,
    default: false
  },
  persistent
}
