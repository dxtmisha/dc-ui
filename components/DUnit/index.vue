<template>
  <span class="d-unit" v-html="number"/>
</template>

<script>
import { props } from './props'
import { computed } from 'vue'
import Geo from '../../classes/Geo'
import useAdmin from '../../uses/useAdmin'

export default {
  name: 'DUnit',
  props,
  setup (props, context) {
    const number = computed(() => new Geo(props.locales).getUnit(
      props.value,
      props.unit,
      props.display,
      props.options
    ))

    useAdmin('d-unit', context)

    return {
      number
    }
  }
}
</script>

<style lang="scss"/>
