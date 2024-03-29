<template>
  <div
    ref="position"
    class="d-control-position"
    @mousedown="onMousedown"
    @transitionend="onTransitionend"
  >
    <slot
      :class-name="`d-control-position__item ${id}`"
      class-name-click="cp-click"
      class-name-drop="cp-drop"
      class-name-position="cp-position"
    />
    <div ref="square" class="d-control-position__square"/>
  </div>
</template>

<script>
import { props } from './props'
import { computed, ref } from 'vue'
import EventControl from '../../classes/EventControl'
import getClientX from './../../functions/getClientX'
import getClientY from './../../functions/getClientY'
import getIdElement from './../../functions/getIdElement'
import useAdmin from '../../uses/useAdmin'
import useDrop from './useDrop'
import usePosition from './usePosition'
import useSelection from './useSelection'
import useSquare from './useSquare'

export default {
  name: 'DControlPosition',
  props,
  emits: ['on-drop', 'on-position'],
  setup (props, context) {
    const id = `p--${getIdElement()}`
    const position = ref(undefined)
    const square = ref(undefined)

    const itemActive = ref(undefined)
    const itemSelection = ref(undefined)
    const itemStart = computed(() => itemSelection.value || [itemActive.value])
    const itemGo = ref(undefined)

    let focus, timeout
    const client = {
      x: 0,
      y: 0,
      drop: false
    }

    const {
      route,
      goSquare
    } = useSquare(
      id,
      position,
      square
    )

    const {
      getSelection,
      goSelection
    } = useSelection(
      id,
      position,
      square,
      itemActive,
      itemSelection
    )

    const {
      toDrop,
      resetDrop
    } = useDrop(
      id,
      itemGo,
      client,
      goSquare
    )

    const emit = () => {
      if (
        itemActive.value &&
        itemGo.value
      ) {
        const valueActive = itemActive.value.dataset?.value
        const valueTo = itemGo.value.dataset?.value
        const parameters = {
          active: itemActive.value,
          selection: itemSelection.value,
          to: itemGo.value,
          value: [valueActive, valueTo],
          valueSelection: getSelection(),
          route: route.value,
          valueActive,
          valueTo
        }

        setTimeout(() => context.emit(client.drop ? 'on-drop' : 'on-position', parameters), 240)
      }
    }

    const {
      getClick,
      findItem,
      toDo,
      toPosition,
      toNone,
      resetPosition,
      go,
      stop
    } = usePosition(
      id,
      position,
      square,
      itemActive,
      itemSelection,
      itemStart,
      itemGo,
      client,
      emit,
      goSquare,
      resetDrop
    )

    const toNewPosition = (values, {
      valueSelection,
      valueTo,
      route
    }) => {
      const items = values.filter(item => valueSelection.indexOf(item.value) !== -1)
      const newValues = values.filter(item => valueSelection.indexOf(item.value) === -1)

      if (valueTo) {
        newValues.splice(newValues.findIndex(item => item.value === valueTo) + !route, 0, ...items)
      } else {
        newValues.unshift(...items)
      }

      return newValues
    }

    const onMousemove = event => {
      const item = getClick(event.target)

      if (
        ['mouseup', 'contextmenu', 'touchend', 'touchcancel'].indexOf(event.type) !== -1 ||
        (!event?.buttons && !('touches' in event) && !('targetTouches' in event)) ||
        (!itemActive.value && (!item || item !== focus))
      ) {
        event.$event.stop()

        if (timeout) {
          clearTimeout(timeout)
          timeout = undefined
        } else {
          stop()
        }
      } else if (itemActive.value) {
        event.stopPropagation()

        const clientX = getClientX(event)
        const clientY = getClientY(event)

        const rect = position.value.getBoundingClientRect()
        const points = document.elementsFromPoint(clientX, clientY)
        const find = findItem(points)

        if (find) {
          toDrop(find)
          toPosition(find)
        } else if (points.indexOf(position.value) === -1) {
          resetPosition()
        } else {
          resetDrop()
        }

        toDo(clientX - rect.left, clientY - rect.top)
      }
    }
    const onMousedown = event => {
      if (!props.disabled) {
        event.preventDefault()
        event.stopPropagation()

        const item = getClick(event.target)

        if (item) {
          focus = item

          clearTimeout(timeout)
          timeout = setTimeout(() => {
            timeout = undefined

            go(
              item,
              getClientX(event),
              getClientY(event)
            )

            goSelection()
          }, 640)

          EventControl.init(document.body, onMousemove, [
            'mousemove',
            'mouseup',
            'contextmenu',
            'touchmove',
            'touchend',
            'touchcancel'
          ])
            .setDomElement(position.value)
            .go()
        }
      }
    }
    const onTransitionend = ({ propertyName }) => {
      if (propertyName === 'transform') {
        toNone()
      }
    }

    useAdmin('d-control-position', context)

    return {
      id,
      position,
      square,
      toNewPosition,
      onMousedown,
      onTransitionend
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-control-position {
  @include controlPositionInit;
}
</style>
