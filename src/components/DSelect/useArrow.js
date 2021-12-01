export default function useArrow (menu) {
  const onPrevious = () => menu.value?.previous()
  const onNext = () => menu.value?.next()

  return {
    onPrevious,
    onNext
  }
}
