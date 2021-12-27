import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DCard/props'
import { Window } from '@/media/demo/Window'
import { adaptiveBasic } from '@/media/demo/data/adaptive'
import { helper1, quote2 } from '@/media/demo/data/text'

export const optionsCard = useProps(props, {
  appearance: {
    list: [
      ...adaptiveBasic,
      { value: 'basic' },
      { value: 'outlined' }
    ]
  },
  description: { message: helper1 },
  shape: Window.windowShape,
  text: {
    default: true,
    message: quote2
  },
  title: {
    default: true,
    message: 'Interactive demo'
  }
}, ['bar', 'barAction'])
