import { computed, readonly, ref, toRefs } from 'vue'
import forEach from './../../functions/forEach'
import isSelected from './../../functions/isSelected'
import attrItem from '../DListItem/attrItem'
import useWatch from '../../uses/useWatch'

export default function useItems (props, context) {
  const {
    list,
    selected,
    underline
  } = toRefs(props)

  const propGroup = ref(props.group || {})
  const propAxis = computed(() => props.axis === 'x' ? 'y' : 'x')
  const propIndent = computed(() => props.axis === 'x' ? undefined : -4)

  const getGroup = item => propGroup.value?.[item.value]
  const setGroup = item => {
    propGroup.value[item.value] = !getGroup(item)
  }

  const getItem = item => attrItem({
    props,
    items: item,
    attrs: {
      item,
      underline,
      focus: computed(() => isSelected(item.value, props.focus)),
      selected: computed(() => isSelected(item.value, props.selected))
    }
  })

  const getList = item => {
    if ('list' in item) {
      return {
        props,
        list: item.list,
        open: computed(() => getGroup(item)),
        class: computed(() => {
          return { 'status-open': getGroup(item) }
        }),
        on: () => {
          setGroup(item)
          context.emit('on-group', { value: propGroup.value })
        }
      }
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
        ajax: undefined,
        selected,
        axis: propAxis,
        indent: propIndent
      })
    } else {
      return undefined
    }
  }

  return useWatch(
    list,
    () => {
      return forEach(list.value, original => {
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
        }

        return item
      }) || []
    },
    ['init']
  )
}
