<template>
  <d-button-select
    v-bind="binds"
    @on-input="onClick"
  />
</template>

<script>
import DButtonSelect from '@/components/DButtonSelect'
import { props } from './props'
import { reactive, toRefs } from 'vue'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DCardMenu',
  components: { DButtonSelect },
  props,
  emits: ['on-click'],
  setup (props, context) {
    const refs = toRefs(props)
    const binds = reactive({
      selected: refs.selected,
      list: refs.list,
      listInit: refs.listInit,
      translation: refs.translation,
      keyText: refs.keyText,
      keyValue: refs.keyValue,
      ajax: refs.ajax,
      request: refs.request,
      cache: refs.cache,
      readonly: true,
      appearance: 'text',
      size: refs.size,
      shape: refs.shape,
      adaptive: 'icon',
      icon: refs.iconMore,
      iconArrowDown: undefined,
      menuAppearance: refs.menuAppearance,
      menuSize: refs.menuSize,
      menuShape: refs.menuShape,
      menuWidth: refs.menuWidth
    })

    const onClick = event => context.emit('on-click', event)

    useAdmin('d-card-menu', context)

    return {
      binds,
      onClick
    }
  }
}
</script>

<style lang="scss"></style>
