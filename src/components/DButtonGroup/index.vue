<template>
  <div :class="classList" class="d-button-group">
    <slot/>
    <template v-for="{bind, menu, value} in bar" :key="value">
      <d-menu
        v-if="menu"
        v-bind="menu"
        v-slot:default="{classList, onClick, progress}"
        @on-input="onInput"
      >
        <d-button
          v-bind="bind"
          :class="classList"
          :progress="progress"
          class="d-button-group__item bg-item notranslate"
          @click="onClick"
        />
      </d-menu>
      <d-button
        v-else
        v-bind="bind"
        class="d-button-group__item bg-item notranslate"
        @on-click="onInput"
      />
    </template>
  </div>
</template>

<script>
import DButton from './../DButton'
import DMenu from './../DMenu'
import { props } from './props'
import { computed } from 'vue'
import useAdmin from './../../uses/useAdmin'
import useBar from './useBar'
import useObjectList from './../../uses/useObjectList'
import useSelected from './../DMenu/useSelected'

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
        [`appearance-${props.buttonAppearance}`]: props.buttonAppearance,
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
