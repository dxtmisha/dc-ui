<template>
  <d-button-select
    :value="$route.path"
    :list="routers"
    appearance="text"
    size="small"
    adaptive="auto"
    :lowercase="true"
    :dense="true"
    icon="drag_indicator"
    menu-size="compact"
    @on-input="onInput"
  />
</template>

<script>
import router from '@/router'
import DButtonSelect from '@/components/DButtonSelect'

export default {
  name: 'InteractiveDemoRouter',
  components: { DButtonSelect },
  computed: {
    routers () {
      return this.$menu()
    }
  },
  methods: {
    onInput ({ value }) {
      router.push(value)
    }
  }
}
</script>

<style lang="scss">

</style>
