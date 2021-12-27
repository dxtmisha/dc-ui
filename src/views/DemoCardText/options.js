import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DCardText/props'
import { quote2 } from '@/media/demo/data/text'

export const optionsCardText = useProps(props, {
  text: {
    default: true,
    message: quote2
  }
})
