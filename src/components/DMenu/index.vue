<template>
  <d-window
    ref="window"
    class="d-menu"
    :before-opening="beforeOpening"
    :opening="opening"
    :disabled="disabled"
    :width="width"
    :axis="axis"
    :indent="indent"
    adaptive="auto"
    :auto-close="!multiple"
  >
    <template v-slot:control="binds">
      <slot
        v-bind="binds"
        :value="propSelected"
        :items="items"
        :names="names"
        :progress="progress"
      />
    </template>
    <template v-slot:window>
      <d-list
        ref="menu"
        v-bind="bindList"
        @on-click="onInput"
        @on-group="onGroup"
      />
    </template>
  </d-window>
</template>

<script>
import DList from '@/components/DList'
import DWindow from '@/components/DWindow'
import { props } from './props'
import { readonly, toRefs } from 'vue'
import useFocus from './useFocus'
import useObjectList from '@/uses/useObjectList'
import useSelected from './useSelected'
import useShifted from './useShifted'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DMenu',
  components: {
    DList,
    DWindow
  },
  props,
  emits: ['on-input'],
  setup (props, context) {
    const refs = toRefs(props)

    const {
      progress,
      object,
      propList,
      propGroup,
      beforeOpening,
      onGroup
    } = useObjectList(props)

    const {
      propSelected,
      items,
      names,
      cancel,
      onInput
    } = useSelected(
      props,
      object,
      context
    )

    const {
      menu,
      window,
      focus,
      search,
      opening
    } = useFocus(
      propSelected,
      object
    )

    const {
      previous,
      next
    } = useShifted(
      props,
      propSelected,
      object,
      beforeOpening,
      onInput
    )

    const bindList = readonly({
      class: 'd-menu__list',
      list: propList,
      underline: search,
      group: propGroup,
      menu: props,
      focus,
      selected: propSelected,
      palette: refs.palette,
      color: refs.color,
      tag: refs.tag,
      appearance: refs.appearance,
      size: refs.size,
      shape: refs.shape,
      adaptive: 'basic',
      border: false,
      ripple: refs.ripple
    })

    useAdmin('d-menu', context, menu)

    return {
      menu,
      window,
      progress,
      propSelected,
      items,
      names,
      bindList,
      previous,
      next,
      beforeOpening,
      opening,
      cancel,
      onInput,
      onGroup
    }
  }
}
</script>

<style lang="scss"></style>
