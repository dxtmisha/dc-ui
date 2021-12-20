<template>
  <div :class="classList">
    <slot/>
    <template
      v-for="item in bar"
      :key="item.value"
    >
      <d-menu
        v-if="item.menu"
        v-bind="item.menu"
        :selected="propSelected"
        @on-input="onInput"
        v-slot:default="{classList, onClick, progress}"
      >
        <d-button
          v-bind="item.bind"
          :class="classList"
          :progress="progress"
          @click="onClick"
        />
      </d-menu>
      <d-button
        v-else
        v-bind="item.bind"
        :selected="item.selected.value"
        @on-click="onInput"
      />
    </template>
  </div>
</template>

<script>
import DButton from '@/--components/DButton'
import DMenu from '@/--components/DMenu'
import { props } from './props'
import { computed, ref, watch } from 'vue'
import isSelected from '@/functions/isSelected'
import useObjectList from '@/--uses/useObjectList'
import useSelected from '@/--components/DMenu/useSelected'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DButtonGroup',
  components: {
    DButton,
    DMenu
  },
  props,
  emits: ['on-input'],
  setup (props, context) {
    const {
      object,
      propList
    } = useObjectList(props)

    const {
      propSelected,
      cancel,
      onInput
    } = useSelected(
      props,
      object,
      context
    )

    const bar = computed(() => {
      const list = []

      propList.value.forEach((item, index) => {
        let menu

        if ('menu' in item) {
          menu = {
            list: item.menu,
            listInit: false,
            multiple: props.multiple,
            maxlength: props.maxlength,
            axis: props.axis === 'y' ? 'x' : 'y',
            ...props.attrsMenu,
            ...item?.menuProps
          }
        }

        list.push({
          value: item?.value || index,
          selected: ref(isSelected(item.value, propSelected.value)),
          bind: {
            item,
            class: 'd-button-group__item bg-item notranslate',
            palette: props.palette,
            color: props.color,
            tag: 'a',
            readonly: props.readonly,
            appearance: props.appearance,
            size: props.size,
            shape: 'tile',
            adaptive: props.adaptive,
            lowercase: props.lowercase,
            dense: props.dense,
            ripple: props.ripple,
            translate: 'no',
            ...props.attrsButton,
            ...item
          },
          menu
        })
      })

      return list
    })

    const classList = computed(() => {
      return {
        'd-button-group': true,
        [`appearance-${props.appearance}`]: props.appearance,
        [`axis-${props.axis}`]: props.axis,
        [`shape-${props.shape}`]: props.shape,
        'option-landscape': props.landscape,
        'status-disabled': props.disabled
      }
    })

    watch(propSelected, () => bar.value.forEach(item => {
      item.selected.value = isSelected(item.value, propSelected.value)
    }))

    useAdmin('d-button-group', context)

    return {
      bar,
      propSelected,
      classList,
      cancel,
      onInput
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-button-group {
  @include buttonGroupInit;
}
</style>
