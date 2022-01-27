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
      let relative

      if (props.relative) {
        const today = new Date()
        const date = new Date(props.value)

        console.log(today - date)
      }

      return new Geo(props.locales).getDate(
        props.value,
        props.type,
        props.display,
        props.options
      )
    })

    useAdmin('d-date-format', context)

    return {
      date
    }
  }
}
</script>

<style lang="scss"/>
