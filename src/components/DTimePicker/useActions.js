import { toRefs } from 'vue'
import attrActions from '@/components/DActions/attrActions'

export default function useActions (
  props,
  propSwitchClock,
  resetDate,
  emit,
  toSelect
) {
  const {
    iconSchedule,
    iconSwitchActive
  } = toRefs(props)

  const setSwitchClock = () => {
    propSwitchClock.value = !propSwitchClock.value

    if (!propSwitchClock.value) {
      toSelect(true)
    }
  }

  const bindActions = attrActions({
    props,
    items: {
      barAction: [{
        icon: iconSchedule,
        iconActive: iconSwitchActive,
        active: propSwitchClock,
        value: 'switch'
      }]
    }
  })

  const onOk = ({ value }) => {
    switch (value) {
      case 'switch':
        setSwitchClock()
        break
      case 'cancel':
        resetDate()
        emit()
        break
      case 'ok':
        emit('on-change')
        break
    }
  }

  return {
    bindActions,
    onOk
  }
}
