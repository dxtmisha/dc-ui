import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DAvatar/props'
import { Avatar } from '@/media/demo/Avatar'

export const optionsAvatar = useProps(props, {
  width: Avatar.avatarWidth,
  height: Avatar.avatarHeight,
  value: Avatar.avatarValue
})
