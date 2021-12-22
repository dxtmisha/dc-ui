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
import DList from '@/components/DList'
import DWindow from '@/components/DWindow'
import { props } from './props'
import { computed, toRefs } from 'vue'
import attrList from '@/components/DList/attrList'
import attrWindow from '@/components/DWindow/attrWindow'
import useAdmin from '@/uses/useAdmin'
import useFocus from './useFocus'
import useObjectList from '@/uses/useObjectList'
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

    const bindList = attrList(props, {
      ...refs,
      list: propList,
      underline: search,
      group: propGroup,
      focus,
      selected: propSelected,
      menuAttrs: {
        ...refs,
        list: undefined,
        listInit: undefined,
        ajax: undefined,
        selected: propSelected
      }
    }, {
      adaptive: 'basic',
      dense: true,
      border: false
    })

    const bindWindow = attrWindow(props, {
      beforeOpening,
      opening,
      autoClose: computed(() => !props.multiple)
    }, {
      adaptive: 'auto'
    }, ['disabled'])

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
