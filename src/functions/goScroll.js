export default function goScroll (item, selector = '.d-window__body') {
  const list = item?.closest(selector)

  if (
    item &&
    list &&
    list.scrollHeight !== list.offsetHeight
  ) {
    if (list.scrollTop > item.offsetTop) {
      list.scrollTop = item.offsetTop
    } else if (list.scrollTop + list.offsetHeight < item.offsetTop + item.offsetHeight) {
      list.scrollTop = item.offsetTop + item.offsetHeight - list.offsetHeight
    }
  }
}
