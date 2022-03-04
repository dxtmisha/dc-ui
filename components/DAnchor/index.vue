<template>
  <d-tooltip v-if="copy" ref="tooltip" :text="translation">
    <template v-slot:control="{ classList, onMouseout }">
      <a
        :class="classList"
        :href="href"
        @mouseout="onMouseout"
        @click.prevent="onClick"
      >
        {{ text }}
        <slot/>
      </a>
    </template>
  </d-tooltip>
  <a v-else :href="href" @click.prevent="onClick">
    {{ text }}
    <slot/>
  </a>
</template>

<script>
import DTooltip from '../DTooltip'
import { props } from './props'
import { computed, nextTick, onMounted, ref } from 'vue'
import Translation from '../../classes/Translation'
import useAdmin from '../../uses/useAdmin'
import useScrollTo from './useScrollTo'
import useClipboard from '../../uses/useClipboard'

export default {
  name: 'DAnchor',
  components: { DTooltip },
  props,
  setup (props, context) {
    const tooltip = ref(undefined)
    const scrollTo = useScrollTo(props)
    const href = computed(() => `#${props.name}`)

    const getElement = () => document.getElementById(props.name)
    const {
      writeText
    } = useClipboard()

    onMounted(async () => {
      await nextTick()

      const element = getElement()

      if (element && location.hash === href.value) {
        scrollTo(element)
      }
    })

    useAdmin('d-anchor', context)

    return {
      tooltip,
      href,
      onClick: event => {
        const element = getElement()

        if (element) {
          if (props.copy && event.altKey) {
            writeText(`${location.origin}${location.pathname}${href.value}`)
            tooltip.value.toggle(true)
          }

          scrollTo(element)
          history.replaceState({}, '', href.value)
        }
      },
      translation: Translation.get('Copied to the clipboard')
    }
  }
}
</script>

<style lang="scss"/>
