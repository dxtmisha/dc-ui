import { computed } from 'vue'
import setupButton from '@/--components/DButton/setupButton'

export default function useButton (props) {
  const bindBar = computed(() => {
    const list = []

    props.bar?.forEach(item => list.push(setupButton(
      props,
      {
        appearance: 'text-color',
        size: props.size,
        ellipsis: false,
        ...item,
        item
      },
      {
        ...props.buttonAttrs,
        class: 'd-actions__bar window-close'
      }
    )))

    return list
  })

  return { bindBar }
}
