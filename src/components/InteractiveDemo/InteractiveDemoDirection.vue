<template>
  <d-checkbox
    text="direction: rtl"
    @on-input="onInput"
  />
</template>

<script>
import DCheckbox from '../../../components/DCheckbox'

export default {
  name: 'InteractiveDemoDirection',
  components: { DCheckbox },
  props: {},
  data () {
    return {
      text: this.$translate.getByList([
        'Primary color',
        'Secondary color'
      ])
    }
  },
  methods: {
    onInput () {
      document.body.classList.toggle('d-direction-rtl')
    }
  }
}
</script>

<style lang="scss"/>
