<template>
  <div :class="classList">
    <div class="d-time-picker__title">{{ text['Select Time'] }}</div>
  </div>
</template>

<script>
import { props } from './props'
import { computed, toRefs } from 'vue'
import useWatch from '@/uses/useWatch'

export default {
  name: 'DTimePicker',
  props,
  setup (props) {
    const { switchClock } = toRefs(props)

    const propSwitchClock = useWatch(switchClock, data => {
      data.value = switchClock.value
    })

    const classList = computed(() => {
      return {
        'd-time-picker': true,
        'status-switch-clock': propSwitchClock.value
      }
    })

    return {
      classList
    }
  },
  computed: {
    text () {
      return this.$translate.list([
        'AM',
        'Cancel',
        'Hour',
        'Minute',
        'Ok',
        'PM',
        'Select Time'
      ])
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-time-picker {
  @include timePickerInit;
}
</style>
