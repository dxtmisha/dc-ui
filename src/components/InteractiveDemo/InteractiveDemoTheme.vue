<template>
  <d-button-select
    :icon="icon"
    :list="list"
    :lowercase="true"
    :title="text.Theme"
    :value="valueTheme"
    adaptive="auto"
    appearance="text"
    name="theme"
    size="small"
    @on-input="onInput"
  />
</template>

<script>
import DButtonSelect from '../../../components/DButtonSelect'

export default {
  name: 'InteractiveDemoTheme',
  components: { DButtonSelect },
  props: {
    list: {
      type: Object,
      default: () => {
        return {
          m2: { subtitle: 'Material 2' },
          'm2-baseline': {
            text: 'Material 2: baseline',
            icon: 'light_mode'
          },
          'm2-dark': {
            text: 'Material 2: dark',
            icon: 'dark_mode'
          },
          'm2-auto': {
            text: 'Material 2: auto',
            icon: 'model_training'
          },
          'm3-line': { line: true },
          m3: { subtitle: 'Material 3' },
          'm3-baseline': {
            text: 'Material 3: baseline',
            icon: 'light_mode'
          },
          'm3-dark': {
            text: 'Material 3: dark',
            icon: 'dark_mode'
          },
          'm3-auto': {
            text: 'Material 3: auto',
            icon: 'model_training'
          }
        }
      }
    }
  },
  data () {
    return {
      text: {
        Theme: this.$translate.get('Theme')
      }
    }
  },
  computed: {
    valueTheme () {
      return this.$theme.value.value || 'm2-baseline'
    },
    icon () {
      return this.list[this.valueTheme]?.icon || 'style'
    }
  },
  methods: {
    onInput (event) {
      this.$theme.set(event.value)
    }
  }
}
</script>

<style lang="scss">

</style>
