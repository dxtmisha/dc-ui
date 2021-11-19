<template>
  <d-window
    ref="elWindow"
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
        ref="elMenu"
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
import { props } from '@/components/DMenu/props'
import { readonly, toRefs } from 'vue'
import { useObjectList } from '@/uses/useObjectList'
import { useSelected } from '@/components/DMenu/useSelected'
import { useFocus } from '@/components/DMenu/useFocus'

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
      list,
      listInit,
      translation,
      keyText,
      keyValue,
      multiple,
      maxlength,
      selected,
      ajax,
      request,
      cache
    } = toRefs(props)

    const {
      object,
      buffer,
      progress,
      group,
      beforeOpening,
      onGroup
    } = useObjectList(
      list,
      listInit,
      translation,
      keyText,
      keyValue,
      ajax,
      request,
      cache
    )

    const {
      propSelected,
      items,
      names,
      onInput
    } = useSelected(
      listInit,
      multiple,
      maxlength,
      selected,
      object,
      context
    )

    const {
      elWindow,
      elMenu,
      focus,
      opening
    } = useFocus(
      propSelected,
      object
    )

    const bindList = readonly({
      class: 'd-menu__list',
      list: buffer,
      group,
      focus,
      selected: propSelected
    })

    return {
      elWindow,
      elMenu,
      progress,
      propSelected,
      items,
      names,
      bindList,
      beforeOpening,
      opening,
      onInput,
      onGroup
    }
  }
}
</script>

<style lang="scss"></style>
