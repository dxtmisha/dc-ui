<template>
  <d-tooltip
    ref="tooltip"
    :hide-after="tooltipHideAfter"
    :text="translation"
  >
    <template v-slot:control="{ classList }">
      <a
        :id="name"
        ref="link"
        :class="classList"
        @click="onClick"
      >
        {{ text }}
        <slot/>
      </a>
    </template>
  </d-tooltip>
</template>

<script>
import DTooltip from '../DTooltip'
import { props } from './props'
import { ref } from 'vue'
import Translation from '../../classes/Translation'
import useAdmin from '../../uses/useAdmin'
import useClipboard from '../../uses/useClipboard'

export default {
  name: 'DAnchorTo',
  components: { DTooltip },
  props,
  setup (props, context) {
    const link = ref(undefined)
    const tooltip = ref(undefined)

    const {
      writeText
    } = useClipboard()

    useAdmin('d-anchor-to', context)

    return {
      link,
      tooltip,
      onClick: event => {
        if (event.altKey) {
          writeText(`${location.origin}${location.pathname}#${props.name}`)
          tooltip.value.toggle(true)
        }
      },
      translation: Translation.get('Copied to the clipboard')
    }
  }
}
</script>

<style lang="scss"/>
