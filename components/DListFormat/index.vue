<template>
  <span class="d-list-format" v-html="text"/>
</template>

<script>
import { props } from './props'
import { computed } from 'vue'
import Geo from '../../classes/Geo'
import useAdmin from '../../uses/useAdmin'

export default {
  name: 'DListFormat',
  props,
  setup (props, context) {
    const text = computed(() => new Geo(props.locales).getListFormat(
      props.value,
      props.type,
      props.display,
      props.options
    ))

    useAdmin('d-list-format', context)

    return {
      text
    }
  }
}
</script>

<style lang="scss"/>
