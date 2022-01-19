<template>
  <d-window ref="window" v-bind="bindWindow" class="d-menu">
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
        class="d-menu__list"
        @on-click="onInput"
        @on-group="onGroup"
      />
    </template>
  </d-window>
</template>

<script>
import DList from './../DList'
import DWindow from './../DWindow'
import { props } from './props'
import { computed } from 'vue'
import attrItem from './../DListItem/attrItem'
import attrWindow from './../DWindow/attrWindow'
import useAdmin from './../../uses/useAdmin'
import useFocus from './useFocus'
import useObjectList from './../../uses/useObjectList'
import useSelected from './useSelected'
import useShifted from './useShifted'

export default {
  name: 'DMenu',
  components: {
    DList,
    DWindow
  },
  props,
  emits: ['on-input'],
  setup (props, context) {
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

    const bindList = attrItem({
      props,
      items: {
        focus,
        selected: propSelected
      },
      attrs: {
        list: propList,
        underline: search,
        group: propGroup,

        adaptive: 'basic',
        dense: true,
        border: false,
        menuAttrs: props
      }
    })

    const bindWindow = attrWindow({
      props,
      items: {
        beforeOpening,
        opening,
        autoClose: computed(() => !props.multiple)
      },
      attrs: { adaptive: 'auto' }
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
      bindWindow,

      previous,
      next,
      cancel,

      onInput,
      onGroup
    }
  }
}
</script>

<style lang="scss"></style>
