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
  />
</template>

<script>
import DButtonSelect from '../../../components/DButtonSelect'

export default {
  name: 'InteractiveDemoRouter',
  components: { DButtonSelect },
  computed: {
    routers () {
      return this.$menu()
    }
  }
}
</script>

<style lang="scss">

</style>
