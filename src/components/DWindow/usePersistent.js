import { useClass } from '@/tool/use/useClass'

export const usePersistent = function (modal) {
  const classPersistent = useClass(modal, 'option-persistent')

  const onPersistent = ({ animationName }) => {
    if (animationName === '__animate-window--persistent') {
      classPersistent.value = false
    }
  }

  return {
    classPersistent,
    onPersistent
  }
}
