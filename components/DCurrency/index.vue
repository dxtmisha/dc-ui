<template>
  <span class="d-currency">{{ number }}</span>
</template>

<script>
import { props } from './props'
import { computed } from 'vue'
import useAdmin from '../../uses/useAdmin'
import Geo from '../../classes/Geo'

export default {
  name: 'DCurrency',
  props,
  setup (props, context) {
    const number = computed(() => new Geo(props.locales).getCurrency(
      props.value,
      props.currency,
      props.display,
      props.options
    ))

    useAdmin('d-currency', context)

    return {
      number
    }
  }
}
</script>

<style lang="scss"/>
