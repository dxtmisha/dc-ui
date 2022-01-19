import { computed, nextTick, onMounted, ref, toRefs, watch } from 'vue'
import List from './../../classes/List'
import useStyleList from './../../uses/useStyleList'

export default function useMarks (
  slider,
  min,
  max,
  minLabel,
  maxLabel,
  props,
  context
) {
  const {
    value,
    multiple
  } = toRefs(props)

  const focus = ref()
  const styleSlider = useStyleList(slider, {
    min: '--_sl__min-x',
    max: '--_sl__max-x'
  }, '%')

  const object = computed(() => {
    if (props.marks instanceof List) {
      return props.marks
    } else {
      return new List(
        props.marks,
        props.marksInit,
        props.translation,
        props.keyText,
        props.keyValue
      )
    }
  })

  const toPercent = value => 100 / (props.max - props.min) * (value - props.min)

  const propMarks = computed(() => {
    if (props.marks) {
      const list = []

      object.value.get().forEach(item => list.push({
        ...item,
        text: item.text || item.value,
        mark: item.mark || item.value,
        style: { '--_sl__mark': `${toPercent(item.mark || item.value)}%` }
      }))

      return list
    } else {
      return undefined
    }
  })

  const isX = event => event.clientX || event?.targetTouches?.[0].clientX || event?.touches?.[0].clientX
  const isY = event => event.clientY || event?.targetTouches?.[0].clientY || event?.touches?.[0].clientY

  const getRead = (value, type = 'mark') => propMarks.value?.filter(item => item[type] === value)?.[0] || {
    text: value,
    mark: value,
    value
  }
  const getMark = value => Array.isArray(value)
    ? [getRead(value?.[0], 'value').mark, getRead(value?.[1], 'value').mark]
    : getRead(value, 'value').mark

  const propMark = ref(getMark(props.value))
  const markMin = computed(() => props.multiple ? (propMark.value?.[0] || 0) : 0)
  const markMax = computed(() => props.multiple || Array.isArray(propMark.value) ? (propMark.value?.[1] || propMark.value || 100) : (propMark.value || 0))

  const getCoordinates = event => props.vertical ? isY(event) : isX(event)
  const getMarkByFocus = () => focus.value === 'min' ? markMin.value : markMax.value
  const getMarkNeighbor = () => {
    if (propMarks.value) {
      let min, max
      const focus = getMarkByFocus()

      propMarks.value.forEach(item => {
        if (!max) {
          if (focus < item.mark) {
            max = item.mark
          } else if (focus > item.mark) {
            min = item.mark
          }
        }
      })

      return [min, max]
    } else {
      return undefined
    }
  }
  const getMove = x => {
    const rect = slider.value.getBoundingClientRect()
    return props.vertical
      ? 100 / rect.height * (rect.bottom - x)
      : 100 / rect.width * (x - rect.left)
  }
  const getText = value => propMarks.value?.filter(item => item.mark === value)?.[0]?.text || value
  const getType = x => {
    if (props.multiple) {
      const rectMin = min.value.getBoundingClientRect()
      const rectMax = max.value.getBoundingClientRect()
      const index = props.vertical ? 'top' : 'left'

      return Math.abs(rectMin[index] - x) < Math.abs(rectMax[index] - x) ? 'min' : 'max'
    } else {
      return 'max'
    }
  }
  const getItems = () => {
    const itemMin = getRead(markMin.value)
    const itemMax = getRead(markMax.value)

    return {
      item: props.multiple ? [itemMin, itemMax] : itemMax,
      value: props.multiple ? [itemMin.value, itemMax.value] : itemMax.value
    }
  }

  const emit = (type = 'on-input') => context.emit(type, {
    mark: propMark.value,
    ...getItems()
  })
  const checkValue = value => {
    if (props.multiple) {
      const min = markMin.value
      const max = markMax.value
      let newValue = value

      switch (focus.value) {
        case 'min':
          if (value > max - props.minimumDistance) {
            newValue = max - props.minimumDistance
          } else if (value < props.min) {
            newValue = props.min
          }
          break
        case 'max':
          if (value < min + props.minimumDistance) {
            newValue = min + props.minimumDistance
          } else if (value > props.max) {
            newValue = props.max
          }
          break
      }

      return newValue
    } else if (value < props.min) {
      return props.min
    } else if (value > props.max) {
      return props.max
    } else {
      return value
    }
  }

  const setValue = (type, value) => {
    if (props.multiple) {
      const key = type === 'min' ? 0 : 1

      if (!Array.isArray(propMark.value)) {
        propMark.value = [0, propMark.value || props.max]
      }

      if (propMark.value[key] !== value) {
        propMark.value[key] = value
        emit()
      }
    } else if (propMark.value !== value) {
      propMark.value = value
      emit()
    }
  }

  const toMark = percent => {
    const mark = Math.round(((props.max - props.min) / 100 * percent + props.min) / props.step) * props.step

    if (props.magnet && propMarks.value) {
      let focus = mark
      let near = 999999

      propMarks.value.forEach(item => {
        const difference = Math.abs(item.mark - mark)

        if (difference < near) {
          focus = item.mark
          near = difference
        }
      })

      return focus
    } else {
      return mark
    }
  }
  const toDo = (type, x = 0) => styleSlider.set({ [type]: x < 0 ? 0 : x })
  const toText = () => {
    if (minLabel.value) {
      minLabel.value.innerText = getText(markMin.value)
    }
    if (maxLabel.value) {
      maxLabel.value.innerText = getText(markMax.value)
    }
  }
  const toPosition = mark => {
    const newMark = checkValue(mark)
    let x = toPercent(newMark)

    if (x < 0) {
      x = 0
    } else if (x > 100) {
      x = 100
    }

    setValue(focus.value, newMark)
    toDo(focus.value, x)
    toText()
  }

  const init = x => toPosition(toMark(getMove(x)))
  const initFocus = x => {
    focus.value = getType(x)
    requestAnimationFrame(() => (focus.value === 'min' ? min.value : max.value).focus())
  }
  const set = (value, type = 'max') => {
    const mark = propMarks.value?.find(item => item.value === value)

    focus.value = type
    toPosition(mark ? mark.mark : toMark(value))
  }
  const updateToDo = () => {
    toDo('min', toPercent(markMin.value))
    toDo('max', toPercent(markMax.value))
    toText()
  }

  const increase = () => {
    const value = props.magnet && propMarks.value
      ? getMarkNeighbor()[1]
      : getMarkByFocus() + props.step

    if (value !== undefined) {
      toPosition(value)
    }
  }
  const decrease = () => {
    const value = props.magnet && propMarks.value
      ? getMarkNeighbor()[0]
      : getMarkByFocus() - props.step

    if (value !== undefined) {
      toPosition(value)
    }
  }

  watch(value, async () => {
    propMark.value = getMark(props.value)

    await nextTick()
    updateToDo()
  })
  watch(multiple, updateToDo)
  onMounted(updateToDo)

  return {
    propMarks,
    getCoordinates,
    emit,
    init,
    initFocus,
    set,
    increase,
    decrease
  }
}
