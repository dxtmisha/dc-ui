import List from '../classes/List'
import { computed, ref, toRefs, watch } from 'vue'
import useWatch from './useWatch'
import Api from '../classes/Api'

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
    const response = await Api.response(
      props.ajax.toString().replace(':page', page),
      props.request
    )

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
      if (
        typeof props.ajax === 'function' ||
        buffer.value === undefined ||
        !props.cache
      ) {
        progress.value = true

        page = 1
        buffer.value = typeof props.ajax === 'function'
          ? await props.ajax()
          : await getAjax()

        progress.value = false
      }

      return buffer.value?.length > 0
    } else {
      return true
    }
  }

  const next = async () => {
    if (
      count.value &&
      count.value !== propList.value.length
    ) {
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

  if (selected) {
    if (selected.value) {
      beforeOpening(true).then()
    }

    watch(selected, async () => beforeOpening(true))
  }

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
