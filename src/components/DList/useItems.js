import { computed, readonly, ref, toRefs, watch } from 'vue'
import isSelected from '@/functions/isSelected'
import attrListItem from '@/components/DListItem/attrListItem'

export default function useItems (props) {
  const refs = toRefs(props)
  const propGroup = ref({})

  const getItem = item => attrListItem(props, {
    ...refs,
    item,
    ...item,
    underline: ref(undefined),
    focus: ref(isSelected(item.value, props.focus)),
    selected: ref(isSelected(item.value, props.selected)),
    list: undefined,
    menu: undefined,
    menuProps: undefined
  })
  const getList = item => {
    if ('list' in item) {
      return readonly({
        ...refs,
        list: item.list
      })
    } else {
      return undefined
    }
  }
  const getMenu = item => {
    if ('menu' in item) {
      return readonly({
        ...props.menuAttrs,
        ...item?.menuProps,
        list: item.menu,
        listInit: false,
        ajax: undefined
      })
    } else {
      return undefined
    }
  }
  const set = (type, value) => propList.value.forEach(({ item }) => {
    if (item) {
      if (type === 'underline') {
        item[type] = item.text.match(new RegExp(`(${value})`, 'ig')) ? value : undefined
      } else {
        item[type] = isSelected(item.value, value)
      }
    }
  })

  const propList = computed(() => {
    const value = []

    if (props.list) {
      props.list.forEach(original => {
        const item = {
          value: original?.value,
          html: original?.html,
          subtitle: original?.subtitle,
          line: original?.line,
          space: original?.space
        }

        if (
          !item.html &&
          !item.subtitle &&
          !item.line &&
          !item.space
        ) {
          item.item = getItem(original)
          item.list = getList(original)
          item.menu = getMenu(original)

          if (item.list && !(item.value in propGroup.value)) {
            propGroup.value[item.value] = props.group?.[item.value] || false
          }
        }

        value.push(item)
      })
    }

    return value
  })

  watch(refs.underline, (value) => set('underline', value))
  watch(refs.focus, (value) => set('focus', value))
  watch(refs.selected, (value) => set('selected', value))

  return {
    propList,
    propGroup
  }
}
