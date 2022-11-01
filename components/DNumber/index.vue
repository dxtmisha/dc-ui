<template>
  <span class="d-number">{{ number }}</span>
</template>

<script>
import { props } from './props'
import { computed } from 'vue'
import useAdmin from '../../uses/useAdmin'
import Geo from '../../classes/Geo'

export default {
  name: 'DNumber',
  props,
  setup (props, context) {
    const number = computed(() => new Geo(props.locales).getNumber(props.value, props.options))

    useAdmin('d-number', context)

    return {
      number
    }
  }
}
</script>

<style lang="scss"/>
