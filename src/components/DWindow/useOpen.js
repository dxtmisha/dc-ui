import EventControl from '@/classes/EventControl'
import { nextTick } from 'vue'
import { useClass } from '@/tool/use/useClass'

const isChildren = (target, id) => {
  const focus = target.closest('.d-window')

  if (focus) {
    return focus.dataset.windowId === id ||
      isChildren(document.querySelector(`.d-window__control.${focus.dataset.windowId}`), id)
  } else {
    return false
  }
}

export const useOpen = function (
  id,
  modal,
  open,
  beforeOpening,
  opening,
  disabled,
  autoClose,
  persistent,
  classPersistent,
  watchPosition,
  context
) {
  const classShow = useClass(modal, 'status-show')
  const classHide = useClass(modal, 'status-hide')

  const emit = async () => {
    const toOpen = !open.value

    if (!beforeOpening.value || await beforeOpening.value(toOpen)) {
      if (toOpen) {
        classHide.value = false
        open.value = toOpen

        await nextTick()
        watchPosition()

        requestAnimationFrame(() => {
          classShow.value = true
          eventBody.go()

          if (opening.value) {
            opening.value(toOpen)
          }
        })
      } else {
        classHide.value = true
        classShow.value = false
        eventBody.stop()
      }

      context.emit('on-open', {
        modal,
        open: toOpen
      })
    }
  }

  const verification = async (target) => {
    if (open.value) {
      const focus = target.closest('.d-window')

      if (focus === null) {
        await emit()
      } else if (focus !== modal.value) {
        if (!target.classList.contains('d-window')) {
          if (isChildren(target, id)) {
            requestAnimationFrame(async () => {
              if (!focus.classList.contains('status-show')) {
                await emit()
              }
            })
          } else {
            await emit()
          }
        }
      } else if (target === modal.value) {
        if (persistent.value) {
          classPersistent.value = true
        } else {
          await emit()
        }
      } else if (
        target.closest(`.${id} .window-close`) ||
        (autoClose.value && !target.closest(`.${id} .window-static, .${id} .d-window__control`))
      ) {
        await emit()
      }
    } else if (
      !disabled.value &&
      !target.closest(`.${id} .window-control-static`)
    ) {
      await emit()
    }
  }

  const toggle = async (status = true) => {
    if (open.value !== status) {
      await emit()
    }
  }

  const eventBody = EventControl.init(document.body, async (event) => {
    if (open.value) {
      await verification(event.target)
    } else {
      event.$event.stop()
    }
  })
    .setDomElement(modal.value)

  const onTransition = ({ propertyName }) => {
    if (propertyName === 'visibility') {
      open.value = false
    }
  }

  return {
    verification,
    toggle,
    onTransition
  }
}
