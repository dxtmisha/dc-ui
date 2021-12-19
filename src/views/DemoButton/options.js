import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DButton/props'

export const buttonAppearance = {
  list: [
    { value: undefined },
    { value: 'text' },
    { value: 'text-color' },
    { value: 'outlined' },
    { value: 'outlined-color' },
    { value: 'outlined-contained' },
    { value: 'contained' },
    { value: 'fab' },
    { value: 'chip' },
    { value: 'chip-color' },
    { value: 'chip-outlined' }
  ]
}

export const optionsButton = useProps(props, {
  appearance: buttonAppearance
})
