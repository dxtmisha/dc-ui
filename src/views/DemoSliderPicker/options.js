import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/--components/DSliderPicker/props'
import { Slider } from '@/media/demo/Slider'

export const optionsSliderPicker = useProps(props, {
  appearance: Slider.sliderAppearance,
  value: Slider.sliderValue
})
