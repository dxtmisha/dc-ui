import useClassByFocus from '@/uses/useClassByFocus'

export default function useDrop (
  id,
  itemGo,
  client,
  goSquare
) {
  const classDropTo = useClassByFocus(`.${id}.cp-drop`, 'status-dragged')
  const isDrop = item => item.classList.contains('cp-drop')

  const toDrop = item => {
    if (!isDrop(item)) {
      resetDrop()
    } else if (item !== itemGo.value) {
      goSquare()
      classDropTo.set(item)

      itemGo.value = item
      client.drop = true
    }
  }
  const resetDrop = () => {
    if (
      itemGo.value &&
      isDrop(itemGo.value)
    ) {
      classDropTo.set()
      itemGo.value = undefined
      client.drop = false
    }
  }

  return {
    toDrop,
    resetDrop
  }
}
