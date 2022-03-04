<template>
  <d-button-select
    v-bind="$props"
    :list="propList"
    :list-init="false"
    @on-input="onInput"
  />
</template>

<script>
import DButtonSelect from '../DButtonSelect'
import { props } from './props'
import useAdmin from '../../uses/useAdmin'
import useSort from './useSort'

export default {
  name: 'DButtonSort',
  components: { DButtonSelect },
  props,
  emits: ['on-input'],
  setup (props, context) {
    const {
      propValue,
      propDesc,
      propList
    } = useSort(props)

    const onInput = event => {
      if (!props.readonly) {
        if (propValue.value === event.value) {
          propDesc.value = !propDesc.value
        } else {
          propDesc.value = false
          propValue.value = event.value
        }
      }

      context.emit('on-input', {
        ...event,
        desc: propDesc.value
      })
    }

    useAdmin('d-button-sort', context)

    return {
      propList,
      onInput
    }
  }
}
</script>

<style lang="scss">

</style>
