<template>
  <a
    ref="link"
    :id="name"
    @click="onClick"
    v-html="text"
  />
</template>

<script>
import { props } from './props'
import { ref } from 'vue'
import useAdmin from '../../uses/useAdmin'
import useClipboard from '../../uses/useClipboard'

export default {
  name: 'DAnchorTo',
  props,
  setup (props, context) {
    const link = ref(undefined)
    const {
      writeText
    } = useClipboard()

    useAdmin('d-anchor-to', context)

    return {
      link,
      onClick: event => {
        if (event.altKey) {
          writeText(`${location.origin}${location.pathname}#${props.name}`)
        }
      }
    }
  }
}
</script>

<style lang="scss"/>
