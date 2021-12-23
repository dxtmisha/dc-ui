import useProps from '@/--components/InteractiveDemo/useProps'
import { props } from '@/components/DBanner/props'
import { Window } from '@/media/demo/Window'
import { quote1, quote2 } from '@/media/demo/data/text'

export const optionsBanner = useProps(props, {
  text: {
    default: 'Interactive demo',
    list: [
      { value: undefined },
      { value: 'Interactive demo' },
      {
        text: 'quote1',
        value: quote1
      },
      {
        text: 'quote2',
        value: quote2
      }
    ]
  },
  width: Window.windowWidth
}, ['bar'])
