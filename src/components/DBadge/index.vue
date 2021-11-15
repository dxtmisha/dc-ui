<template>
  <span v-bind="binds">
    <template v-if="!dot">
      <d-icon-item
        v-if="icon"
        class="d-badge__icon"
        :icon="icon"
      />
      <template v-else-if="text">{{ text }}</template>
    </template>
  </span>
</template>

<script>
import DIconItem from '@/components/DIconItem'
import { props } from '@/components/DBadge/props'
import { toRefs } from 'vue'
import { useAdmin } from '@/tool/use/useAdmin'
import { useColor } from '@/tool/use/useColors'
import { useWatch } from '@/tool/use/useWatch'
import { useText } from '@/components/DBadge/useText'

export default {
  name: 'DBadge',
  components: { DIconItem },
  props,
  setup (props) {
    const {
      value,
      max,
      dot,
      hide,
      left,
      bottom,
      palette,
      color,
      alignment,
      size,
      shape,
      outline
    } = toRefs(props)

    const { text } = useText(value, max)
    const { classColor } = useColor(color, palette)

    const binds = useWatch([
      dot,
      hide,
      left,
      bottom,
      classColor,
      alignment,
      size,
      shape,
      outline
    ], data => {
      const valueSize = dot.value ? 'dot' : size.value

      data.value = {
        class: {
          'd-badge': true,
          'status-hide': hide.value,
          ...classColor.value,
          'position-left': left.value,
          'position-bottom': bottom.value,
          [`alignment-${alignment.value}`]: alignment.value,
          [`size-${valueSize}`]: valueSize,
          [`shape-${shape.value}`]: shape.value,
          'option-outline': outline.value
        },
        style: { '--_bg--ol-color': outline }
      }
    })

    useAdmin('d-badge')

    return {
      text,
      binds
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-badge {
  @include badgeInit;
}
</style>
