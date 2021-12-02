<template>
  <d-tooltip
    :text="text.Theme"
    :indent="4"
  >
    <template v-slot:control="{ classList, onMouseover, onMouseout }">
      <d-button-select
        :class="classList"
        :value="valueTheme"
        name="theme"
        :list="list"
        appearance="text"
        size="small"
        adaptive="auto"
        :lowercase="true"
        :icon="icon"
        menu-size="compact"
        @on-input="onInput"
        @mouseover="onMouseover"
        @mouseout="onMouseout"
      />
    </template>
  </d-tooltip>
</template>

<script>
import DButtonSelect from '@/components/DButtonSelect'
import DTooltip from '@/components/DTooltip'

export default {
  name: 'InteractiveDemoTheme',
  components: {
    DButtonSelect,
    DTooltip
  },
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
          'm2-line': { line: true }
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
