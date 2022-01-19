<template>
  <div
    ref="selection"
    class="d-control-selection"
    @mousedown="onMousedown"
  >
    <slot
      :class-name="`d-control-selection__item ${id}`"
      class-name-click="cs-click"
      :selected="propSelected"
      :on-click="onClick"
    />
    <div ref="square" class="d-control-selection__square"/>
  </div>
</template>

<script>
import { props } from './props'
import { ref, toRefs } from 'vue'
import getIdElement from './../../functions/getIdElement'
import useAdmin from './../../uses/useAdmin'
import useItem from './useItem'
import useSquare from './useSquare'
import useWatch from './../../uses/useWatch'

export default {
  name: 'DControlSelection',
  props,
  emits: ['on-selected'],
  setup (props, context) {
    const { selected } = toRefs(props)

    const id = `s--${getIdElement()}`
    const selection = ref(undefined)
    const square = ref(undefined)

    const propSelected = useWatch(selected, data => {
      data.value = props.selected || []
    }, [], props.selected || [])

    const {
      getItems,
      setSelected,
      reset,
      updateSelection,
      emit,
      onClick
    } = useItem(
      id,
      selection,
      props,
      context,
      propSelected
    )

    const { onMousedown } = useSquare(
      selection,
      square,
      props,
      propSelected,
      getItems,
      updateSelection,
      emit
    )

    useAdmin('d-control-selection', context)

    return {
      id,
      selection,
      square,
      propSelected,
      setSelected,
      reset,
      onClick,
      onMousedown
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-control-selection {
  @include controlSelectionInit;
}
</style>
