import { ref } from 'vue'
import { getIdElement } from '@/tool/functions'

export const useOpen = function (
  beforeOpening,
  disabled,
  autoClose,
  persistent,
  classPersistent,
  context
) {
  const id = `w--${getIdElement()}`

  const modal = ref(undefined)
  const open = ref(false)

  const isChildren = (target) => {
    const focus = target.closest('.d-window')

    if (focus) {
      return focus.dataset.windowId === id || isChildren(document.querySelector(`.d-window__control.${focus.dataset.windowId}`))
    } else {
      return false
    }
  }

  const emit = () => {
    const toOpen = !open.value

    if (!beforeOpening.value || beforeOpening.value(toOpen)) {
      open.value = toOpen
      context.emit('on-open', {
        modal,
        open: toOpen
      })
    }
  }

  const verification = (target) => {
    if (open.value) {
      const focus = target.closest('.d-window')

      if (focus === null) {
        emit()
      } else if (focus !== modal.value) {
        if (!target.classList.contains('d-window')) {
          if (isChildren(target)) {
            requestAnimationFrame(() => {
              if (!focus.classList.contains('status-show')) {
                emit()
              }
            })
          } else {
            emit()
          }
        }
      } else if (target === modal.value) {
        if (persistent.value) {
          classPersistent.value = true
        } else {
          emit()
        }
      } else if (
        target.closest(`.${id} .window-close`) ||
        (autoClose.value && !target.closest(`.${id} .window-static, .${id} .d-window__control`))
      ) {
        emit()
      }
    } else if (!disabled.value && !target.closest(`.${id} .window-control-static`)) {
      emit()
    }
  }

  return {
    open
  }
}
