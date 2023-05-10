const INDENT = 128

export default function goScroll (item, selector = '.d-window__body', toBy = undefined) {
  const list = item?.closest(selector)

  if (
    item &&
    list &&
    list.scrollHeight !== list.offsetHeight
  ) {
    if (toBy) {
      const rect = toBy.getBoundingClientRect()
      const rectList = list.getBoundingClientRect()
      const rectItem = item.getBoundingClientRect()

      list.scrollTop = item.offsetTop - (rect.top - rectList.top) - ((rect.height / 2) - (rectItem.height / 2))

      if (list.scrollTop + list.offsetHeight < item.offsetTop + item.offsetHeight) {
        list.scrollTop = item.offsetTop + item.offsetHeight - list.offsetHeight
      }
    } else if (list.scrollTop > item.offsetTop) {
      list.scrollTop = item.offsetTop - INDENT
    } else if (list.scrollTop + list.offsetHeight < item.offsetTop + item.offsetHeight) {
      list.scrollTop = item.offsetTop + item.offsetHeight - list.offsetHeight + INDENT
    }
  }
}
