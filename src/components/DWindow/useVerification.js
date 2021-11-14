import { ref, toRefs, watch } from 'vue'

export const useVerification = function (
  props,
  context,
  id,
  modal
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

  const valueToggle = ref(open.value)
  const emit = (go = false, type = undefined) => {
    if (go) {
      valueToggle.value = !valueToggle.value
      context.emit('on-open', {
        modal,
        open: valueToggle.value,
        type
      })
    }
  }

  const isChildren = (target) => {
    const focus = target.closest('.d-window')

    if (focus) {
      return focus.dataset.windowId === id || isChildren(document.querySelector(`.d-window__control.${focus.dataset.windowId}`))
    } else {
      return false
    }
  }
  const updatePersistent = (value) => modal.value.classList.toggle('option-persistent', value)

  const verification = (target) => {
    if (valueToggle.value) {
      const focus = target.closest('.d-window')

      if (focus === null) {
        emit(true, 'background')
      } else if (focus !== modal.value) {
        if (!target.classList.contains('d-window')) {
          if (isChildren(target)) {
            requestAnimationFrame(() => emit(!focus.classList.contains('status-show'), 'children'))
          } else {
            emit(true, 'out')
          }
        }
      } else if (target === modal.value) {
        if (persistent.value) {
          updatePersistent(true)
        } else {
          emit(true, 'target')
        }
      } else {
        emit(
          target.closest(`.${id} .window-close`) ||
          (autoClose.value && !target.closest(`.${id} .window-static, .${id} .d-window__control`)),
          'on'
        )
      }
    } else {
      emit(
        !disabled.value && !target.closest(`.${id} .window-control-static`),
        'control'
      )
    }
  }

  const onPersistent = ({ animationName }) => {
    if (animationName === '__animate-window--persistent') {
      updatePersistent(false)
    }
  }

  watch(open, (value) => {
    valueToggle.value = value
  })

  return {
    valueToggle,
    verification,
    onPersistent
  }
}
