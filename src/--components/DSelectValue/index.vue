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
          :selected="item?.selected"
          :turn="item?.turn"
          :disabled="disabled"
          tag="span"
          :appearance="appearance"
          :size="size"
          :shape="shape"
          align="left"
          adaptive="basic"
          :lowercase="true"
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
import DButton from '@/--components/DButton'
import { props } from './props'
import { computed } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useColor from '@/--uses/useColor'

export default {
  name: 'DSelectValue',
  components: { DButton },
  props,
  emits: ['on-click', 'on-trailing'],
  setup (props, context) {
    const palette = useColor(props)
    const propIcon = computed(() => props.cancel && !props.disabled ? props.iconCancel : undefined)
    const propValue = computed(() => !props.value
      ? undefined
      : Array.isArray(props.value) ? props.value : [props.value])

    const classList = computed(() => {
      return {
        'd-select-value': true,
        'option-multiple': props.multiple,
        ...palette.value
      }
    })

    const onClick = event => context.emit(event.type, event)

    useAdmin('d-select-value', context)

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
