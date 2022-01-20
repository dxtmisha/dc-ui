import { onMounted, toRefs, watch } from 'vue'
import EventControl from '../../classes/EventControl'
import useClass from '../../uses/useClass'
import useStyle from '../../uses/useStyle'

export default function useScroll (app, props) {
  const {
    scroll,
    transform
  } = toRefs(props)

  const classSticky = useClass(app, 'status-sticky')
  const styleScroll = useStyle(app, '--_ab-scroll', 'px')
  const stylePercent = useStyle(app, '--_ab-percent')
  const styleTop = useStyle(app, '--_ab-top', 'px')

  let old

  const update = () => {
    const scroll = props.element?.scrollY || props.element?.scrollTop || 0
    const transform = scroll <= props.transform ? scroll : props.transform

    classSticky.set(scroll > 0)

    if (props.transform) {
      styleScroll.set(transform)
      stylePercent.set(1 / props.transform * transform)
    }

    if (props.scroll === 'disappears') {
      const rect = app.value.getBoundingClientRect()
      const height = (rect.height + 64) * -1
      let move = rect.top + (old || scroll) - scroll

      if (
        move > 0 ||
        (props.transform && props.transform !== transform)
      ) {
        move = 0
      } else if (move < height) {
        move = height
      }

      styleTop.set(move)
      old = scroll
    }
  }
  const event = EventControl.init(props.element, update, ['scroll'])
  const toggle = () => {
    const go = props.scroll !== 'top' || props.transform

    if (go) {
      update()
    }

    event.toggle(go)
  }

  watch([scroll, transform], toggle)
  onMounted(toggle)

  return {}
}
