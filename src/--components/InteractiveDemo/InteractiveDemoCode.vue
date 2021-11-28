<template>
  <div class="interactive-demo__code">{{ tag }}</div>
</template>

<script>
import { toRefs } from 'vue'
import { useWatch } from '@/--uses/useWatch'
import { forEach, toKebabCase } from '@/--tool/functions'

export default {
  name: 'InteractiveDemoCode',
  props: {
    options: Object
  },
  setup (props) {
    const { options } = toRefs(props)

    const propOptions = useWatch(options, data => {
      const values = []

      if (options.value) {
        forEach(options.value, (item, index) => {
          if (item === true) {
            values.push(toKebabCase(index))
          } else if (item) {
            if (typeof item === 'string' && item.length < 20) {
              values.push(`${toKebabCase(index)}="${item}"`)
            } else {
              values.push(`${toKebabCase(index)}="..."`)
            }
          }
        })
      }
      data.value = values.join(' ')
    }, ['go'], undefined, true)

    return { propOptions }
  },
  computed: {
    tag () {
      return `<${this.$route.name} ${this.propOptions}/>`
    }
  }
}
</script>

<style lang="scss"></style>
