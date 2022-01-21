<template>
  <d-button-select
    :list="list"
    :title="text['Primary color']"
    :value="$theme.color.primary"
    adaptive="icon"
    appearance="text-color"
    class="interactive-demo--color"
    icon="format_color_fill"
    menu-size="compact"
    name="primary"
    shape="basic"
    size="small"
    @on-input="onInput"
  />
  <d-button-select
    :list="list"
    :title="text['Secondary color']"
    :value="$theme.color.secondary"
    adaptive="icon"
    appearance="text-color"
    class="interactive-demo--color"
    icon="format_color_fill"
    menu-size="compact"
    name="secondary"
    palette="secondary"
    shape="basic"
    size="small"
    style="display: none"
    @on-input="onInput"
  />
</template>

<script>
import DButtonSelect from '../../../components/DButtonSelect'
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
