<template>
  <div class="d-button-group" :class="classList">
    <slot/>
    <template
      v-for="item in bar"
      :key="item.value"
    >
      <d-menu
        v-if="item.menu"
        v-bind="item.menu"
        @on-input="onInput"
        v-slot:default="{classList, onClick, progress}"
      >
        <d-button
          v-bind="item.bind"
          :class="classList"
          :progress="progress"
          @click="onClick"
        />
      </d-menu>
      <d-button
        v-else
        v-bind="item.bind"
        @on-click="onInput"
      />
    </template>
  </div>
</template>

<script>
import DButton from '@/components/DButton'
import DMenu from '@/--components/DMenu'
import { props } from './props'
import { computed } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useBar from './useBar'
import useObjectList from '@/uses/useObjectList'
import useSelected from '@/--components/DMenu/useSelected'

export default {
  name: 'DButtonGroup',
  components: {
    DButton,
    DMenu
  },
  props,
  emits: ['on-input'],
  setup (props, context) {
    const {
      object,
      propList
    } = useObjectList(props)

    const {
      propSelected,
      cancel,
      onInput
    } = useSelected(
      props,
      object,
      context
    )

    const bar = useBar(
      props,
      propList,
      propSelected
    )

    const classList = computed(() => {
      return {
        'status-disabled': props.disabled,
        [`appearance-${props.appearance}`]: props.appearance,
        [`axis-${props.axis}`]: props.axis,
        [`shape-${props.shape}`]: props.shape,
        'option-landscape': props.landscape,
        'option-button-shape': props.buttonShape && props.buttonShape !== 'tile'
      }
    })

    useAdmin('d-button-group', context)

    return {
      bar,
      classList,
      cancel,
      onInput
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-button-group {
  @include buttonGroupInit;
}
</style>
