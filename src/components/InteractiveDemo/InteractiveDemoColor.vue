<template>
  <d-button-select
    class="interactive-demo--color"
    :value="$theme.color.primary"
    name="primary"
    :title="text['Primary color']"
    :list="list"
    appearance="text-color"
    size="small"
    shape="basic"
    adaptive="icon"
    icon="format_color_fill"
    menu-size="compact"
    @on-input="onInput"
  />
  <d-button-select
    class="interactive-demo--color"
    :value="$theme.color.secondary"
    name="secondary"
    :title="text['Secondary color']"
    :list="list"
    appearance="text-color"
    palette="secondary"
    size="small"
    shape="basic"
    adaptive="icon"
    icon="format_color_fill"
    menu-size="compact"
    @on-input="onInput"
  />
</template>

<script>
import DButtonSelect from '@/components/DButtonSelect'
import color from '@/media/demo/data/color'

export default {
  name: 'InteractiveDemoColor',
  components: { DButtonSelect },
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
