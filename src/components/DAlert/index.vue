<template>
  <div
    :class="classList"
    role="alert"
  >
    <div class="d-alert__icon">
      <d-icon
        v-if="icon"
        :icon="icon"
        :size="size"
        :background="iconBackground"
      />
    </div>
    <div class="d-alert__content">
      <div v-if="text" class="d-alert__text" v-html="text"/>
      <div v-if="description" class="d-alert__description" v-html="description"/>
      <slot name="description"/>
    </div>
    <slot/>
    <d-button
      v-if="cancel"
      :icon="iconClose"
      size="small"
      shape="pill"
      appearance="text"
      @click="onHide"
    />
  </div>
</template>

<script>
import DButton from '@/components/DButton'
import DIcon from '@/components/DIcon'
import { props } from './props'
import { computed, toRefs } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useWatch from '@/uses/useWatch'
import useColor from '@/uses/useColor'

export default {
  name: 'DAlert',
  components: {
    DIcon,
    DButton
  },
  props,
  setup (props, context) {
    const { hide } = toRefs(props)

    const palette = useColor(props)
    const propHide = useWatch(hide, data => {
      data.value = hide.value
    }, [], hide.value)

    const classList = computed(() => {
      return {
        'd-alert': true,
        'status-hide': propHide.value,
        [`appearance-${props.appearance}`]: props.appearance,
        [`shape-${props.shape}`]: props.shape,
        [`border-${props.border}`]: props.border,
        'option-dense': props.dense,
        ...palette.value
      }
    })

    const onHide = () => {
      propHide.value = true
    }

    useAdmin('d-alert', context)

    return {
      classList,
      onHide
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-alert {
  @include alertInit;
}
</style>
