<template>
  <d-tooltip
    :text="text['Primary color']"
    :indent="4"
  >
    <template v-slot:control="{ classList, onMouseover, onMouseout }">
      <d-button-select
        :class="`${classList} interactive-demo--color`"
        :value="$theme.color.primary"
        name="primary"
        :list="list"
        appearance="text-color"
        size="small"
        adaptive="icon"
        icon="format_color_fill"
        menu-size="compact"
        @on-input="onInput"
        @mouseover="onMouseover"
        @mouseout="onMouseout"
      />
    </template>
  </d-tooltip>
  <d-tooltip
    :text="text['Secondary color']"
    :indent="4"
  >
    <template v-slot:control="{ classList, onMouseover, onMouseout }">
      <d-button-select
        :class="`${classList} interactive-demo--color`"
        :value="$theme.color.secondary"
        name="secondary"
        :list="list"
        appearance="text-color"
        palette="secondary"
        size="small"
        adaptive="icon"
        icon="format_color_fill"
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
import color from '@/media/demo/list/color'

export default {
  name: 'InteractiveDemoColor',
  components: {
    DButtonSelect,
    DTooltip
  },
  props: {
    list: {
      type: Object,
      default: () => color
    }
  },
  data () {
    return {
      text: this.$translate.getByList([
        'Primary color',
        'Secondary color'
      ])
    }
  },
  methods: {
    onInput ({
      name,
      value
    }) {
      this.$theme.color[name] = value
    }
  }
}
</script>

<style lang="scss">
.interactive-demo--color {
  --ic-radius: 0px;
}
</style>
