import { useClass } from '@/tool/use/useClass'

export const usePersistent = function (modal) {
  const classPersistent = useClass(modal, 'option-persistent')

  const onPersistent = ({ animationName }) => {
    classPersistent.value = animationName !== '__animate-window--persistent'
  }

  return {
    classPersistent,
    onPersistent
  }
}
