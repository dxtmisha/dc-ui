export default function useInput (
  typeSelected,
  propSwitchClock,
  type12,
  amPm,
  getItemFocus,
  getMaxHours,
  updateDate,
  toSelect,
  emit
) {
  const bindInput = {
    on: {
      focus: event => {
        typeSelected.value = event.target.name

        if (!propSwitchClock.value) {
          toSelect()
        }
      }
    },
    maxlength: 2,
    class: 'tp-field',
    type: 'number',
    appearance: 'basic',
    adaptive: 'block',
    align: 'center',
    size: 'interactive-display',
    cancel: false
  }

  const onInput = event => {
    const isHour = event.name === 'hour' || ['12', '24'].indexOf(event.clock) !== -1
    const max = isHour ? getMaxHours() : 59
    let value = parseInt(event.value) || 0

    if (
      value >= 0 &&
      value <= max
    ) {
      if (isHour) {
        if (type12.value && amPm.value === 'pm') {
          value += 12
        }

        getItemFocus().setHours(value)
      } else {
        getItemFocus().setMinutes(value)
      }

      updateDate()
      emit()
    }
  }

  const onChange = () => {
    if (typeSelected.value !== 'minute') {
      requestAnimationFrame(() => {
        typeSelected.value = 'minute'
        toSelect(true, false)
      })
    }
  }

  return {
    bindInput,
    onInput,
    onChange
  }
}
