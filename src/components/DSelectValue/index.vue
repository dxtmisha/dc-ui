<template>
  <div class="d-select-value" :class="classList">
    <template v-if="multiple">
      <div class="d-select-value__body">
        <d-button
          v-for="item in propValue"
          v-bind="bindButton"
          :key="item.value"
          class="d-select-value__item it-item"
          :item="item"
          :text="item.text"
          @on-click="onClick"
          @on-trailing="onClick"
        />
      </div>
    </template>
    <template v-else>{{ propValue?.[0]?.text }}</template>
  </div>
</template>

<script>
import DButton from '@/components/DButton'
import { props } from './props'
import { computed } from 'vue'
import attrButton from '@/components/DButton/attrButton'
import useAdmin from '@/uses/useAdmin'
import useColor from '@/uses/useColor'

export default {
  name: 'DSelectValue',
  components: { DButton },
  props,
  emits: ['on-click', 'on-trailing'],
  setup (props, context) {
    const propIcon = computed(() => props.cancel && !props.disabled ? props.iconCancel : undefined)
    const propValue = computed(() => !props.value
      ? undefined
      : Array.isArray(props.value) ? props.value : [props.value])

    const palette = useColor(props)
    const classList = computed(() => {
      return {
        'option-multiple': props.multiple,
        ...palette.value
      }
    })

    const bindButton = attrButton(props, {
      iconTrailing: propIcon
    }, {
      tag: 'span',
      adaptive: 'basic',
      align: 'left',
      lowercase: true,
      iconReadonly: true
    }, ['disabled'])

    const onClick = event => context.emit(event.type, event)

    useAdmin('d-select-value', context)

    return {
      propIcon,
      propValue,
      bindButton,
      classList,
      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-select-value {
  @include selectValueInit;
}
</style>
