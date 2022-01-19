import { computed, ref, toRefs } from 'vue'
import Geo from './../../classes/Geo'
import forEach from './../../functions/forEach'
import useWatch from './../../uses/useWatch'

export default function useList (props, context) {
  const {
    sort,
    dest
  } = toRefs(props)

  const checkboxItems = ref({})
  const propSort = useWatch(sort, () => sort.value, ['init'])
  const propDest = useWatch(dest, () => dest.value ? -1 : 1, ['init'])

  const propItems = computed(() => {
    checkboxItems.value = {}

    if (propSort.value && !props.readonly) {
      const collator = window.Intl.Collator ? new Intl.Collator(Geo.getGlobalLang()) : null

      return props.items.sort((a, b) => {
        if (collator) {
          return propDest.value * collator.compare(a[propSort.value], b[propSort.value])
        } else {
          return propDest.value * (
            a[propSort.value] > b[propSort.value]
              ? 1
              : a[propSort.value] < b[propSort.value]
                ? -1
                : 0
          )
        }
      })
    } else {
      return props.items
    }
  })

  const setCheckbox = (key, el, item = undefined) => {
    checkboxItems.value[key] = {
      el,
      item
    }
  }

  const onCheckbox = ({
    name,
    value
  }) => {
    const data = {}

    if (name === 'all') {
      forEach(checkboxItems.value, ({ el }) => el.setValue(value))
    }

    forEach(checkboxItems.value, ({
      el,
      item
    }) => {
      if (el.propValue) {
        data[el.name] = item
      }
    })

    context.emit('on-input', { value: data })
  }

  const onSort = ({ value }) => {
    if (props.readonly) {
      context.emit('on-sort', { value })
    } else if (propSort.value === value) {
      propDest.value *= -1
    } else {
      propSort.value = value
      propDest.value = 1
    }
  }

  return {
    checkboxItems,
    propSort,
    propDest,
    propItems,
    setCheckbox,
    onCheckbox,
    onSort
  }
}
