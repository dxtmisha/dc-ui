import { toRefs } from 'vue'
import EventControl from '../../classes/EventControl'
import useClass from '../../uses/useClass'
import useWatch from '../../uses/useWatch'

export default function useAction (bar, props) {
  const { action } = toRefs(props)
  const classHide = useClass(bar, 'status-hide')

  return useWatch(action, data => {
    if (props.barAction) {
      if (props.action) {
        data.value = true
      } else {
        classHide.set(true)

        EventControl.init(
          bar.value,
          ({ propertyName }) => {
            if (propertyName === 'opacity') {
              classHide.set(false)
              data.value = false
            }
          },
          ['transitionend']
        ).goOnce()
      }
    }
  }, [], props.barAction && props.action)
}
