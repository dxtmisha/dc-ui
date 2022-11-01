<template>
  <d-menu
    ref="menu"
    v-bind="bindMenu"
    @on-input="onClick"
  >
    <template v-slot:default="{ classList, onClick, progress }">
      <d-button
        v-bind="bindButton"
        :class="classList"
        :progress="progress"
        class="d-button-select__button"
        @click="onClick"
      />
    </template>
  </d-menu>
</template>

<script>
import DButton from '../DButton'
import DMenu from '../DMenu'
import { props } from './props'
import { toRefs } from 'vue'
import attrMenu from '../DMenu/attrMenu'
import attrButton from '../DButton/attrButton'
import useAdmin from '../../uses/useAdmin'

export default {
  name: 'DCardMenu',
  components: {
    DButton,
    DMenu
  },
  props,
  emits: ['on-click'],
  setup (props, context) {
    const { iconMore } = toRefs(props)

    const bindMenu = attrMenu({
      props,
      attrs: {
        readonly: true,
        tag: 'a'
      }
    })

    const bindButton = attrButton({
      props,
      attrs: { icon: iconMore }
    })

    const onClick = event => context.emit('on-click', event)

    useAdmin('d-card-menu', context)

    return {
      bindMenu,
      bindButton,
      onClick
    }
  }
}
</script>

<style lang="scss"></style>
