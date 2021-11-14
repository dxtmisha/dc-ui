<template>
  <d-window
    ref="menu"
    class="d-menu"
    :open="open"
    :disabled="disabled"
    :axis="axis"
    :width="width"
    :indent="indent"
    adaptive="auto"
    :auto-close="!multiple"
    :width-by-control="axis === 'on'"
    @on-open="onOpen"
  >
    <template v-slot:control="binds">
      <slot v-bind="{ ...binds, ...bindControl }"/>
    </template>
    <template v-slot:window>
      <d-list
        ref="list"
        v-bind="bindList"
        class="d-menu__list"
        :list="objectList.get()"
        :group="objectList.group"
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
import { readonly, ref, toRefs } from 'vue'
import { setupList } from '@/components/DList/setupList'
import { useFocus } from '@/components/DMenu/useFocus'
import { useShifted } from '@/components/DMenu/useShifted'
import { useAdmin } from '@/uses/useAdmin'

export default {
  name: 'DMenu',
  components: {
    DList,
    DWindow
  },
  inheritAttrs: false,
  props,
  emits: ['on-input', 'on-open'],
  setup (props, context) {
    const {
      // Values
      multiple,
      maxlength,

      // Options
      palette,
      color,
      tag,
      appearance,
      size,
      shape,
      groupShow,
      ripple
    } = toRefs(props)

    const open = ref(false)

    const {
      progress,
      objectList,
      ifSelected,
      selectedByItem,
      selectedByName,
      selectedByValue,
      initFetch,
      onInput
    } = setupList(props, context)

    const {
      menu,
      list,
      focusValue,
      focusGo
    } = useFocus(
      context,
      objectList,
      selectedByValue,
      open
    )

    const {
      previous,
      next
    } = useShifted(
      props,
      objectList,
      selectedByValue,
      initFetch,
      onInput
    )

    const bindControl = readonly({
      ifSelected,
      value: selectedByValue,
      selected: selectedByValue,
      selectedItem: selectedByItem,
      selectedName: selectedByName,
      progress
    })
    const bindList = readonly({
      ...context.attrs,
      multiple,
      maxlength,
      focus: focusValue,
      selected: selectedByValue,
      palette,
      color,
      groupShow,
      tag,
      appearance,
      size,
      shape,
      adaptive: 'basic',
      ripple
    })

    useAdmin('d-menu')

    return {
      menu,
      list,
      open,
      objectList,
      bindControl,
      bindList,
      initFetch,
      focusGo,
      previous,
      next,
      onInput
    }
  },
  methods: {
    async onOpen (event) {
      await this.initFetch(event.open)

      this.open = event.open
      this.focusGo()
      this.$emit('on-open', event)
    },
    onGroup ({ group }) {
      this.objectList.setGroup(group)
    }
  }
}
</script>

<style lang="scss"></style>
