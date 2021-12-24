import { nextTick } from 'vue'
import EventControl from '@/classes/EventControl'
import useClass from '@/uses/useClass'

const isChildren = (target, id) => {
  const focus = target.closest('.d-window')

  if (focus) {
    return focus.dataset.windowId === id ||
      isChildren(document.querySelector(`.d-window__control.${focus.dataset.windowId}`), id)
  } else {
    return false
  }
}

export default function useOpen (
  id,
  modal,
  props,
  open,
  watchPosition,
  context
) {
  const classShow = useClass(modal, 'status-show')
  const classHide = useClass(modal, 'status-hide')
  const classPersistent = useClass(
    modal,
    'option-persistent',
    false,
    (value) => {
      if (value) {
        EventControl.init(
          modal.value,
          ({ animationName }) => {
            if (animationName === '__animate-window--persistent') {
              classPersistent.set(false)
            }
          },
          ['animationend']
        ).goOnce()
      }
    },
    false
  )

  const eventBody = EventControl.init(document.body, async (event) => {
    if (open.value) {
      await verification(event.target)
    } else {
      event.$event.stop()
    }
  })
    .setDomElement(modal.value)

  const emitOpening = (open) => {
    if (props.opening) {
      props.opening(open)
    }
  }
  const emit = async () => {
    const toOpen = !open.value

    if (!props.beforeOpening || await props.beforeOpening(toOpen)) {
      if (toOpen) {
        classHide.set(false)
        open.value = toOpen

        await nextTick()
        watchPosition()

        requestAnimationFrame(() => {
          classShow.set(true)
          eventBody.go()

          emitOpening(toOpen)
        })
      } else {
        classHide.set(true)
        classShow.set(false)
        eventBody.stop()

        emitOpening(toOpen)
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
        if (props.persistent) {
          classPersistent.set(true)
        } else {
          await emit()
        }
      } else if (
        target.closest(`.${id} .window-close`) ||
        (props.autoClose && !target.closest(`.${id} .window-static, .${id} .d-window__control`))
      ) {
        await emit()
      }
    } else if (
      !props.disabled &&
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

  const onTransition = ({
    target,
    propertyName
  }) => {
    if (
      target.classList.contains('d-window__body') &&
      propertyName === 'visibility'
    ) {
      open.value = false
    }
  }

  return {
    verification,
    toggle,
    onTransition
  }
}
