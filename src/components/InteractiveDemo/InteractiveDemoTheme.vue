<template>
  <d-button-select
    :icon="icon"
    :list="list"
    :lowercase="true"
    :title="text.Theme"
    :value="valueTheme"
    adaptive="auto"
    appearance="text"
    menu-size="compact"
    name="theme"
    size="small"
    @on-input="onInput"
  />
</template>

<script>
import DButtonSelect from '@/components/DButtonSelect'

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
          'm3-line': { line: true },
          m3: { subtitle: 'Material 3' },
          'm3-baseline': {
            text: 'Material 3: baseline',
            icon: 'light_mode'
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
