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
import { useFocus } from '@/components/DMenu/useFocus'
import { useObjectList } from '@/uses/useObjectList'
import { useSelected } from '@/components/DMenu/useSelected'
import { useShifted } from '@/components/DMenu/useShifted'

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
      ajax,
      request,
      cache,
      multiple,
      maxlength,
      selected,
      disabled,
      palette,
      color,
      tag,
      appearance,
      size,
      shape,
      ripple
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
      cancel,
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
      multiple,
      propSelected,
      disabled,
      object,
      beforeOpening,
      onInput
    )

    const bindList = readonly({
      class: 'd-menu__list',
      list: buffer,
      group,
      menu: readonly({
        translation,
        keyText,
        keyValue,
        multiple,
        maxlength
      }),
      focus,
      selected: propSelected,
      underline: search,
      palette,
      color,
      tag,
      appearance,
      size,
      shape,
      adaptive: 'basic',
      border: false,
      ripple
    })

    return {
      elWindow,
      elMenu,
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
