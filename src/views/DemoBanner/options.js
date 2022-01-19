import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DBanner/props'
import { Banner } from '@/media/demo/Banner'
import { Window } from '@/media/demo/Window'

export const optionsBanner = useProps(props, {
  text: Banner.bannerText,
  width: Window.windowWidth
}, ['bar'])
