import { useWatch } from '@/uses/useWatch'

export const useInit = function (
  mask
) {
  const propMask = useWatch(mask, data => {
    data.value = mask.value?.toString().split('') || []
  })

  return {
    propMask
  }
}
