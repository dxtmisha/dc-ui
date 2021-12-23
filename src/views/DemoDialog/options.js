import useProps from '@/--components/InteractiveDemo/useProps'
import { props } from '@/components/DDialog/props'
import { Window } from '@/media/demo/Window'

export const optionsDialog = useProps(props, {
  adaptive: {
    list: [
      { value: undefined },
      { value: 'modal' },
      { value: 'modal-left' },
      { value: 'modal-right' }
    ]
  },
  size: Window.windowSize,
  width: Window.windowWidth
}, ['bar', 'barAction'])
