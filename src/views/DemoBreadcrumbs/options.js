import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DBreadcrumbs/props'

export const optionsBreadcrumbs = useProps(props, {
  adaptive: {
    list: [
      { value: undefined },
      { value: 'auto' },
      { value: 'auto-small' },
      { value: 'auto-medium' },
      { value: 'auto-large' },
      { value: 'auto-extra' },
      { value: 'auto-desktop' },
      { value: 'basic' }
    ]
  },
  list: {
    default: true,
    message: [
      {
        icon: 'home',
        href: '#home',
        value: 'home'
      },
      {
        icon: 'account_box',
        href: '#profile',
        text: 'Profile',
        value: 'profile'
      },
      {
        href: '#wikipedia',
        text: 'Wikipedia',
        value: 'wikipedia'
      },
      {
        href: '#alexander-pushkin',
        text: 'Alexander Pushkin',
        value: 'alexander-pushkin'
      }
    ]
  }
})
