<template>
  <div class="d-select-value" :class="classList">
    <template v-if="multiple">
      <div class="d-select-value__body">
        <d-button
          v-for="item in propValue"
          v-bind="bindButton"
          :key="item.value"
          :href="item?.href"
          :item="item"
          :text="item.text"
          class="d-select-value__item it-item"
          @on-click="onClick"
          @on-trailing="onClick"
        />
      </div>
    </template>
    <template v-else>{{ propValue?.[0]?.text }}</template>
  </div>
</template>

<script>
import DButton from './../DButton'
import { props } from './props'
import { computed } from 'vue'
import useAdmin from './../../uses/useAdmin'
import attrButton from './../DButton/attrButton'

export default {
  name: 'DSelectValue',
  components: { DButton },
  props,
  emits: ['on-click', 'on-trailing'],
  setup (props, context) {
    const propIcon = computed(() => props.cancel && !props.disabled ? props.iconCancel : undefined)
    const propValue = computed(() => !props.value
      ? undefined
      : Array.isArray(props.value) ? props.value : [props.value]
    )

    const bindButton = attrButton({
      props,
      items: {
        iconTrailing: propIcon
      },
      attrs: {
        adaptive: 'basic',
        lowercase: true,
        iconReadonly: true
      }
    })

    const classList = computed(() => {
      return { 'option-multiple': props.multiple }
    })

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
