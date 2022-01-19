import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DCard/props'
import { Card } from '@/media/demo/Card'
import { Window } from '@/media/demo/Window'

export const optionsCard = useProps(props, {
  appearance: Card.cardAppearance,
  description: Card.cardDescription,
  shape: Window.windowShape,
  text: Card.cardText,
  title: Card.cardTitle
}, ['bar', 'barAction'])
