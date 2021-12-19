import bar from '@/media/demo/list/bar'
import barMenu from '@/media/demo/list/barMenu'
import menu from '@/media/demo/list/menu'
import {
  action,
  navigation,
  open,
  options,
  shape,
  size,
  status,
  text,
  textAction,
  textShort,
  values
} from '@/media/demo/options'

export const appBarBar = {
  value: 'bar',
  default: true,
  message: bar
}

export const appBarBarMenu = {
  value: 'barMenu',
  default: true,
  message: barMenu
}

export const appBarBarNavigation = {
  value: 'barNavigation',
  default: true,
  message: menu
}

export const appBarAppearance = {
  value: 'appearance',
  list: [
    { value: undefined },
    { value: 'contained' },
    { value: 'translucency' },
    { value: 'transparent' }
  ]
}

export const appBarScroll = {
  value: 'scroll',
  list: [
    { value: undefined },
    { value: 'top' },
    { value: 'disappears' },
    { value: 'elevation' },
    { value: 'border' }
  ]
}

export const appBarTransform = {
  value: 'transform',
  list: [
    { value: undefined },
    { value: 64 },
    { value: 128 },
    { value: 256 }
  ]
}

export const appBarSrc = {
  value: 'src',
  list: [
    { value: undefined },
    {
      text: 'image 01',
      icon: require('@/assets/images/thumbnails/image-01-icon.jpeg'),
      value: require('@/assets/images/image-01.jpeg')
    },
    {
      text: 'image 02',
      icon: require('@/assets/images/thumbnails/image-02-icon.jpeg'),
      value: require('@/assets/images/image-02.jpeg')
    },
    {
      text: 'image 03',
      icon: require('@/assets/images/thumbnails/image-03-icon.jpeg'),
      value: require('@/assets/images/image-03.jpeg')
    },
    {
      text: 'image 04',
      icon: require('@/assets/images/thumbnails/image-04-icon.jpeg'),
      value: require('@/assets/images/image-04.jpeg')
    },
    {
      text: 'image 05',
      icon: require('@/assets/images/thumbnails/image-05-icon.jpeg'),
      value: require('@/assets/images/image-05.jpeg')
    }
  ]
}

export const optionsAppBar = {
  values,
  appBarBar,
  appBarBarMenu,
  appBarBarNavigation,
  text,
  textAction,
  textShort,
  navigation,

  status,
  open,
  action,

  options,
  appBarAppearance,
  appBarScroll,
  appBarTransform,
  appBarSrc,
  size,
  shape
}
