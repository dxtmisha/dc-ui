<template>
  <d-button-select
    :value="$route.path"
    :list="routers"
    appearance="text"
    size="small"
    :lowercase="true"
    :dense="true"
    menu-size="compact"
    @on-input="onInput"
  />
</template>

<script>
import router, { routes } from '@/router'
import DButtonSelect from '@/components/DButtonSelect'

export default {
  name: 'InteractiveDemoRouter',
  components: { DButtonSelect },
  computed: {
    routers () {
      const routers = []

      routes.forEach(item => routers.push({
        text: item.name,
        value: item.path
      }))

      return routers
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
