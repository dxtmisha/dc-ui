<template>
  <span class="d-display">{{ text }}</span>
</template>

<script>
import { props } from './props'
import { computed } from 'vue'
import Geo from '../../classes/Geo'
import useAdmin from '../../uses/useAdmin'

export default {
  name: 'DDisplay',
  props,
  setup (props, context) {
    const text = computed(() => new Geo(props.locales).getDisplay(
      props.code,
      props.type,
      props.display,
      props.options
    ))

    useAdmin('d-display', context)

    return {
      text
    }
  }

}
</script>

<style lang="scss"/>
