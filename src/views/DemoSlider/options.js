import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DSlider/props'
import { Slider } from '@/media/demo/Slider'

export const optionsSlider = useProps(props, {
  appearance: Slider.sliderAppearance,
  value: Slider.sliderValue
})
