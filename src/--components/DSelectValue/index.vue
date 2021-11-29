<template>
  <div :class="classList">
    <template v-if="multiple">
      <div class="d-select-value__body">
        <d-button
          v-for="item in propValue"
          v-bind="attrsButton"
          :key="item.value"
          class="d-select-value__item it-item"
          :item="item"
          :text="item.text"
          :icon-trailing="propIcon"
          :disabled="disabled"
          tag="span"
          :appearance="appearance"
          :size="size"
          :shape="shape"
          :icon-readonly="cancel"
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
import { props } from '@/--components/DSelectValue/props'
import { toRefs } from 'vue'
import { useClasses } from '@/--uses/useClasses'
import { useColor } from '@/--uses/useColor'
import { useWatch } from '@/--uses/useWatch'

export default {
  name: 'DSelectValue',
  components: { DButton },
  props,
  emits: ['on-click', 'on-trailing'],
  setup (props, context) {
    const {
      value,
      multiple,
      disabled,
      color,
      palette,
      cancel
    } = toRefs(props)

    const propValue = useWatch([value, multiple], data => {
      data.value = !value.value
        ? undefined
        : Array.isArray(value.value) ? value.value : [value.value]
    })

    const propIcon = useWatch([disabled, cancel], data => {
      data.value = cancel.value && !disabled.value ? props.iconCancel : undefined
    })

    const classList = useClasses({
      'd-select-value': true,
      option: { multiple },
      ...useColor(color, palette)
    })

    const onClick = event => context.emit(event.type, event)

    return {
      propIcon,
      propValue,
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
