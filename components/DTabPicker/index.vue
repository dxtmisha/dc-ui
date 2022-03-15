<template>
  <div ref="tab" class="d-tab-picker">
    <form novalidate @input="v = $event.target.validationMessage">
      <input required>
      <div v-if="v">{{ v }}</div>
      <button type="submit">ok</button>
    </form>
  </div>
</template>

<script>
import { props } from './props'
import useAdmin from '../../uses/useAdmin'
import { ref } from 'vue'

export default {
  name: 'DTabPicker',
  components: {},
  props,
  emit: [
    'on-click',
    'update:selected',
    'update:modelValue'
  ],
  setup (props, context) {
    useAdmin('d-tab-picker', context)

    return {
      v: ref('')
    }
  }
}
</script>

<style lang="scss"/>
