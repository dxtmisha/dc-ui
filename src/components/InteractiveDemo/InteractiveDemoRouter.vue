<template>
  <d-button-select
    :dense="true"
    :list="routers"
    :lowercase="true"
    :value="$route.path"
    adaptive="auto"
    appearance="text"
    icon="drag_indicator"
    menu-size="compact"
    size="small"
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
