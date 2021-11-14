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
    @onOpen="onOpen"
  >
    <template v-slot:control="binds">
      <slot
        v-bind="binds"
        :if-selected="ifSelected"
        :value="selectedByValue"
        :selected="selectedByValue"
        :selected-item="selectedByItem"
        :selected-name="selectedByName"
        :open="open"
        :progress="progress"
      />
    </template>
    <template v-slot:window>
      <d-list
        ref="list"
        v-bind="bindList"
        class="d-menu__list"
        :list="objectList.get()"
        :focus="focusValue"
        :selected="selectedByValue"
        :group="objectList.group"
        @on-click="onInput"
        @on-group="onGroup"
      >
        <slot name="list"/>
      </d-list>
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
      // Status
      disabled,

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
      updateSelected,
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

    const bindList = readonly({
      ...context.attrs,
      selected: selectedByValue,
      disabled,
      palette,
      color,
      tag,
      appearance,
      size,
      shape,
      groupShow,
      ripple,
      adaptive: 'basic',
      attrsMenu: props
    })

    return {
      menu,
      list,
      open,
      progress,
      objectList,
      ifSelected,
      selectedByItem,
      selectedByName,
      selectedByValue,
      bindList,
      focusValue,
      initFetch,
      updateSelected,
      focusGo,
      previous,
      next,
      onInput
    }
  },
  methods: {
    async onOpen (event) {
      await this.initFetch(event.toOpen)

      this.open = event.toOpen
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
