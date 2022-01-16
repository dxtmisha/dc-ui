import List from '@/classes/List'
import { computed, ref, toRefs, watch } from 'vue'
import useWatch from '@/uses/useWatch'

export default function useObjectList (props) {
  const {
    list,
    ajax,
    selected
  } = toRefs(props)

  let page = 1

  const progress = ref(false)
  const count = ref(undefined)
  const buffer = useWatch(ajax ? [list, ajax] : list, data => {
    data.value = undefined
    page = 1
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
  const propMax = computed(() => count.value || propList.value.length)

  const getAjax = async () => {
    const response = await (await fetch(
      props.ajax.toString().replace(':page', page),
      props.request || {}
    )).json()

    if ('data' in response) {
      count.value = response?.count || count.value
      return response.data
    } else {
      count.value = undefined
      return response
    }
  }

  const beforeOpening = async open => {
    if (open && props.ajax) {
      if (buffer.value === undefined || !props.cache) {
        progress.value = true

        buffer.value = await getAjax()
        progress.value = false
      }
    }

    return true
  }

  const next = async () => {
    console.log('count.value', count.value, propList.value.length)

    if (count.value && count.value !== propList.value.length) {
      progress.value = true
      page++

      const response = await getAjax()

      buffer.value = [...buffer.value, ...response]
      progress.value = false
      return count.value !== propList.value.length
    } else {
      return false
    }
  }

  const onGroup = ({ value }) => {
    propGroup.value = value
    object.value.setGroup(value)
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
    propMax,
    beforeOpening,
    next,
    onGroup
  }
}
