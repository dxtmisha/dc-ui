<template>
  <div class="d-clipboard">
    <d-icon
      v-if="icon"
      :background="iconBackground"
      :icon="icon"
      class="d-clipboard__icon"
    />
    <input ref="input" :value="value" class="d-clipboard__input" readonly/>
    <d-tooltip :active="tooltip" :text="translation['Copied to the clipboard']">
      <template v-slot:control="{ classList, onMouseout }">
        <d-button
          :class="classList"
          :icon="iconCopy"
          appearance="text"
          class="d-clipboard__button"
          size="small"
          @click="onClick"
          @mouseout="onMouseout"
        />
      </template>
    </d-tooltip>
  </div>
</template>

<script>
import DButton from '../DButton'
import DIcon from '../DIcon'
import DTooltip from '../DTooltip'
import { props } from './props'
import { ref } from 'vue'
import Translation from '../../classes/Translation'
import useAdmin from '../../uses/useAdmin'
import useClipboard from '../../uses/useClipboard'

export default {
  name: 'DClipboard',
  components: {
    DButton,
    DIcon,
    DTooltip
  },
  props,
  emits: ['on-clipboard'],
  setup (props, context) {
    const translation = Translation.getByList(['Copied to the clipboard'])
    const input = ref(undefined)
    const tooltip = ref(false)

    const {
      clipboardInit
    } = useClipboard()

    const onClick = () => {
      clipboardInit(input.value)

      context.emit('on-clipboard', { value: props.value })
      tooltip.value = true
    }

    useAdmin('d-clipboard', context)

    return {
      translation,
      input,
      tooltip,
      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-clipboard {
  @include clipboardInit;
}
</style>
