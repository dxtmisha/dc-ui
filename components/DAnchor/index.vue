<template>
  <a :href="href" @click.prevent="onClick">
    {{ text }}
    <slot/>
  </a>
</template>

<script>
import { props } from './props'
import { computed, nextTick, onMounted } from 'vue'
import useAdmin from '../../uses/useAdmin'
import useScrollTo from './useScrollTo'
import useClipboard from '../../uses/useClipboard'

export default {
  name: 'DAnchor',
  props,
  setup (props, context) {
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
      href,
      onClick: event => {
        const element = getElement()

        if (element) {
          if (event.altKey) {
            writeText(`${location.origin}${location.pathname}${href.value}`)
          }

          scrollTo(element)
          history.replaceState({}, '', href.value)
        }
      }
    }
  }
}
</script>

<style lang="scss"/>
