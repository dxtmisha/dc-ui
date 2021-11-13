<template>
  <d-window
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
        :selected="selectedByValue"
        :group="this.objectList.group"
        @on-click="onInput"
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

export default {
  name: 'DMenu',
  components: {
    DList,
    DWindow
  },
  inheritAttrs: false,
  props,
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

    const bindList = readonly({
      ...context.attrs,
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
      attrsMenu: {
        ...props,
        ...context.attrs,
        list: undefined,
        listInit: false,
        ajax: undefined,
        request: undefined,
        selected: selectedByValue.value
      }
    })

    return {
      open,
      progress,
      objectList,
      ifSelected,
      selectedByItem,
      selectedByName,
      selectedByValue,
      bindList,
      initFetch,
      updateSelected,
      onInput
    }
  },
  methods: {
    async onOpen (event) {
      await this.initFetch(event.toOpen)

      this.open = event.toOpen
      this.$emit('onOpen', event)
    }
  }
}
</script>

<style lang="scss"></style>
