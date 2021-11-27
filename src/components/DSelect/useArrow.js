export const useArrow = function (menu) {
  const onPrevious = () => menu.value.previous()
  const onNext = () => menu.value.next()

  return {
    onPrevious,
    onNext
  }
}
