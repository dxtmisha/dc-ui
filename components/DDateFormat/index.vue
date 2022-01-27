<template>
  <span class="d-currency">{{ date }}</span>
</template>

<script>
import { props } from './props'
import { computed } from 'vue'
import useAdmin from '../../uses/useAdmin'
import Geo from '../../classes/Geo'

export default {
  name: 'DDateFormat',
  props,
  setup (props, context) {
    const date = computed(() => {
      const relative = (new Date() - new Date(props.value)) / 1000 / 60 / 60 / 24

      if (
        props.relative &&
        relative <= props.relative
      ) {
        return new Geo(props.locales).getRelative(
          relative * -1,
          props.unit,
          props.display,
          props.numeric,
          props.options
        )
      } else {
        return new Geo(props.locales).getDate(
          props.value,
          props.type,
          props.display,
          props.options
        )
      }
    })

    useAdmin('d-date-format', context)

    return {
      date
    }
  }
}
</script>

<style lang="scss"/>
