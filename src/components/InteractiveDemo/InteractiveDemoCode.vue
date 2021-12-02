<template>
  <div class="interactive-demo__code">{{ tag }}</div>
</template>

<script>
import { computed, toRefs } from 'vue'
import forEach from '@/functions/forEach'
import toKebabCase from '@/functions/toKebabCase'

export default {
  name: 'InteractiveDemoCode',
  props: {
    options: Object
  },
  setup (props) {
    const { options } = toRefs(props)

    const propOptions = computed(() => {
      const values = []

      if (options.value) {
        forEach(options.value, (item, index) => {
          if (item === true) {
            values.push(toKebabCase(index))
          } else if (item) {
            if (['number', 'string'].indexOf(typeof item) !== -1 && item.length < 20) {
              values.push(`${toKebabCase(index)}="${item}"`)
            } else {
              values.push(`${toKebabCase(index)}="..."`)
            }
          }
        })
      }
      return values.join(' ')
    })

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
