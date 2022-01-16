<template>
  <div v-if="propList" class="d-data">
    <d-data-item
      v-if="headers"
      :adaptive="adaptive"
      :border="true"
      :class="classHeaders"
      :item="propHeaders"
      :parameters="propParameters"
      class="d-data__headers"
      icon=" "
      size="header"
    />
    <d-data-item
      v-for="item in propList"
      :key="item.value"
      v-bind="item"
      icon=" "
    >
      <template
        v-for="(html, name) in $slots"
        :key="name"
        v-slot:[name]="{ item }"
      >
        <slot :name="name" :item="item"/>
      </template>
    </d-data-item>
  </div>
</template>

<script>
import DDataItem from '@/components/DDataItem'
import { props } from '@/components/DData/props'
import { computed } from 'vue'
import forEach from '@/functions/forEach'
import useAdmin from '@/uses/useAdmin'
import useItems from './useItems'
import useHeaders from './useHeaders'

export default {
  name: 'DData',
  components: { DDataItem },
  props,
  setup (props, context) {
    const propHeaders = useHeaders(props)
    const propParameters = computed(() => {
      if (props.headers) {
        const parameters = []
        forEach(propHeaders.value, (item, index) => {
          if (['name', 'text'].indexOf(index) === -1) {
            parameters.push(index)
          }
        })

        return parameters
      } else {
        return props.parameters
      }
    })

    const propList = useItems(props, propParameters)

    const classHeaders = computed(() => {
      return { 'option-sticky': props.sticky }
    })

    useAdmin('d-data', context)

    return {
      propHeaders,
      propParameters,
      propList,
      classHeaders
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-data {
  @include dataInit;
}
</style>
