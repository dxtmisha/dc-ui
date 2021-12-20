<template>
  <div
    ref="resize"
    :class="classList"
    @mousedown="onMousedown"
  >
    <div v-once class="d-control-resize__left">
      <div class="d-control-resize__move cr-left-top" data-value="left-top"/>
      <div class="d-control-resize__move cr-left" data-value="left"/>
      <div class="d-control-resize__move cr-left-bottom" data-value="left-bottom"/>
    </div>
    <div v-once class="d-control-resize__center">
      <div class="d-control-resize__move cr-top" data-value="top"/>
      <div class="d-control-resize__active" data-value="center"/>
      <div class="d-control-resize__move cr-bottom" data-value="bottom"/>
    </div>
    <div v-once class="d-control-resize__right">
      <div class="d-control-resize__move cr-right-top" data-value="right-top"/>
      <div class="d-control-resize__move cr-right" data-value="right"/>
      <div class="d-control-resize__move cr-right-bottom" data-value="right-bottom"/>
    </div>
  </div>
</template>

<script>
import { props } from './props'
import { computed, nextTick, onMounted, ref, toRefs, watch } from 'vue'
import EventControl from '@/classes/EventControl'
import useAdmin from '@/uses/useAdmin'
import useClass from '@/uses/useClass'
import useStyleList from '@/--uses/useStyleList'
import useWatch from '@/uses/useWatch'

export default {
  name: 'DControlResize',
  props,
  emits: ['on-resize'],
  setup (props, context) {
    const refs = toRefs(props)
    const resize = ref(undefined)

    let type, old, rect
    const client = {
      x: 0,
      y: 0
    }

    const propValue = useWatch(refs.value, data => {
      data.value = props.value || [0, 0, 0, 0]
      toResize()
    }, [], props.value || [0, 0, 0, 0])

    const classBody = useClass(document.body, 'd-control-resize__body')
    const styleResize = useStyleList(resize, {
      top: '--_cr-top',
      right: '--_cr-right',
      bottom: '--_cr-bottom',
      left: '--_cr-left'
    }, '%')

    const getIndex = type => [
      'top',
      'right',
      'bottom',
      'left'
    ].indexOf(type)
    const isDisabled = type => {
      return props.disabled ||
        (type === 'top' && props.disabledTop) ||
        (type === 'right' && props.disabledRight) ||
        (type === 'bottom' && props.disabledBottom) ||
        (type === 'left' && props.disabledLeft)
    }

    const toResize = () => styleResize.set({
      top: propValue.value[0],
      right: propValue.value[1],
      bottom: propValue.value[2],
      left: propValue.value[3]
    })
    const toMove = (directions, value) => {
      const code = getIndex(directions)
      const opposite = [2, 3, 0, 1][code]
      let move = old[code] + value

      if (!isDisabled(directions)) {
        if (move < 0) {
          move = 0
        } else if (!(100 - move - propValue.value[opposite] >= props.min)) {
          move = undefined
        }

        if (
          move !== undefined &&
          propValue.value[code] !== move
        ) {
          propValue.value[code] = move
          toResize()

          emitMove(directions, move)
        }
      }
    }

    const classList = computed(() => {
      return {
        'd-control-resize': true,
        'status-disabled': props.disabled,
        'status-disabled-top': props.disabled || props.disabledTop,
        'status-disabled-right': props.disabled || props.disabledRight,
        'status-disabled-bottom': props.disabled || props.disabledBottom,
        'status-disabled-left': props.disabled || props.disabledLeft
      }
    })

    const emitMove = (direction, value) => {
      context.emit('on-resize', {
        direction,
        value,
        coordinator: [...propValue.value]
      })
    }

    const onMousemove = event => {
      if (event.type === 'mouseup' || !event?.buttons) {
        event.$event.stop()
        classBody.set(false)
      } else {
        const x = 100 / rect.width * (event.clientX - client.x)
        const y = 100 / rect.height * (event.clientY - client.y)

        switch (type) {
          case 'top':
            toMove(type, y * (+1))
            break
          case 'right':
            toMove(type, x * (-1))
            break
          case 'right-top':
            toMove('top', y * (+1))
            toMove('right', x * (-1))
            break
          case 'right-bottom':
            toMove('bottom', y * (-1))
            toMove('right', x * (-1))
            break
          case 'bottom':
            toMove(type, y * (-1))
            break
          case 'left':
            toMove(type, x * (+1))
            break
          case 'left-top':
            toMove('top', y * (+1))
            toMove('left', x * (+1))
            break
          case 'left-bottom':
            toMove('bottom', y * (-1))
            toMove('left', x * (+1))
            break
          case 'center':
            toMove('top', y * (+1))
            toMove('right', x * (-1))
            toMove('bottom', y * (-1))
            toMove('left', x * (+1))
            break
        }
      }
    }
    const onMousedown = event => {
      type = event.target?.dataset?.value
      if (type && !props.disabled) {
        classBody.set(true)
        rect = resize.value.getBoundingClientRect()
        old = [...propValue.value]

        client.x = event.clientX
        client.y = event.clientY

        EventControl.init(document.body, onMousemove, ['mousemove', 'mouseup'])
          .setDomElement(resize.value)
          .go()
      }
    }

    watch(propValue, toResize, { deep: true })
    onMounted(async () => {
      await nextTick()
      toResize()
    })

    useAdmin('d-control-resize', context)

    return {
      resize,
      classList,
      onMousedown
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-control-resize {
  @include controlResizeInit;
}
</style>
