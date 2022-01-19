import attrMenu from './../DMenu/attrMenu'
import useSelect from './useSelect'

export default function useMenu (props, propValue) {
  return attrMenu({
    props,
    items: {
      list: useSelect(props),
      selected: propValue
    },
    attrs: { tag: 'span' }
  })
}
