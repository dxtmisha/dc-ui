import List from '@/classes/List'
import { computed, ref, toRefs, watch } from 'vue'
import useWatch from '@/uses/useWatch'

export default function useObjectList (props) {
  const {
    list,
    ajax,
    selected
  } = toRefs(props)

  const progress = ref(false)
  const buffer = useWatch(ajax ? [list, ajax] : list, data => {
    data.value = undefined
  })
  const object = computed(() => {
    return props.list instanceof List
      ? props.list
      : new List(
        buffer.value || props.list,
        props.ajax || props.listInit,
        props.translation,
        props.keyText,
        props.keyValue
      )
  })

  const propList = computed(() => object.value.get())
  const propGroup = ref(props.group || {})

  const beforeOpening = async open => {
    if (open && props.ajax) {
      if (buffer.value === undefined || !props.cache) {
        progress.value = true

        buffer.value = await (await fetch(props.ajax, props.request || {})).json()
        progress.value = false
      }
    }

    return true
  }

  const onGroup = ({
    value,
    open
  }) => {
    propGroup.value[value] = open
    object.value.setGroupItem(value, open)
  }

  if (props.selected) {
    beforeOpening(true).then()
  }

  watch(selected, async () => beforeOpening(true))

  return {
    progress,
    object,
    propList,
    propGroup,
    beforeOpening,
    onGroup
  }
}
