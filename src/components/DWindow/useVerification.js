import { toRefs } from 'vue'

export const useVerification = function (
  props,
  context,
  id,
  window
) {
  const {
    // Values
    open,

    // Status
    disabled,

    // Options
    persistent,
    autoClose
  } = toRefs(props)

  const emit = (go = false) => {
    if (go) {
      context.emit('on-open', {
        window,
        open: open.value,
        toOpen: !open.value
      })
    }
  }

  const isChildren = (target) => {
    const window = target.closest('.d-window')

    if (window) {
      return window.dataset.windowId === id || isChildren(document.querySelector(`.d-window__control.${window.dataset.windowId}`))
    } else {
      return false
    }
  }
  const updatePersistent = (value) => window.value.classList.toggle('option-persistent', value)

  const verification = (target) => {
    if (open.value) {
      const focus = target.closest('.d-window')

      if (focus === null) {
        emit(true)
      } else if (focus !== window.value) {
        if (!target.classList.contains('d-window')) {
          if (isChildren(target)) {
            requestAnimationFrame(() => {
              emit(!focus.classList.contains('status-show'))
            })
          } else {
            emit(true)
          }
        }
      } else if (target === window.value) {
        if (persistent.value) {
          updatePersistent(true)
        } else {
          emit(true)
        }
      } else {
        emit(
          target.closest(`.${id} .window-close`) ||
          (autoClose.value && !target.closest(`.${id} .window-static`))
        )
      }
    } else {
      emit(
        !disabled.value &&
        !target.closest(`.${id} .window-control-static`)
      )
    }
  }

  const onPersistent = ({ animationName }) => {
    if (animationName === '__animate-window--persistent') {
      updatePersistent(false)
    }
  }

  return {
    verification,
    onPersistent
  }
}
