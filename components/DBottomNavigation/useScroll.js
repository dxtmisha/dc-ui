import { onUnmounted, toRefs } from 'vue'
import EventControl from '../../classes/EventControl'
import useStyle from '../../uses/useStyle'
import useWatch from '../../uses/useWatch'

export default function useScroll (app, props) {
  const { scroll } = toRefs(props)

  const styleBottom = useStyle(app, '--_bv-bottom', 'px')
  let old

  const update = () => {
    const scroll = props.element?.scrollY || props.element?.scrollTop || 0
    const rect = app.value.getBoundingClientRect()
    const height = (rect.height + 64) * -1
    let move = window.innerHeight - rect.bottom + (old || scroll) - scroll

    if (move > 0) {
      move = 0
    } else if (move < height) {
      move = height
    }

    styleBottom.set(move)
    old = scroll
  }
  const event = EventControl.init(props.element, update, ['scroll'])

  useWatch(scroll, () => {
    const go = props.scroll === 'disappears'

    if (go) {
      update()
    }

    event.toggle(go)
  }, ['mounted'])
  onUnmounted(() => event.stop())

  return {}
}
