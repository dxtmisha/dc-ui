<template>
  <div v-if="propList" class="d-data">
    <div v-if="headers" :class="classHeaders" class="d-data__headers">
      <d-data-item v-bind="bindHeaders"/>
    </div>
    <d-data-item
      v-for="item in propList"
      :key="item.value"
      v-bind="item"
      icon=" "
      @on-open="onOpen"
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
  emits: ['on-open'],
  setup (props, context) {
    const propHeaders = useHeaders(props)
    const propParameters = computed(() => {
      if (props.headers) {
        const parameters = []
        forEach(propHeaders.value, (item, index) => {
          if (['icon', 'name', 'text'].indexOf(index) === -1) {
            parameters.push(index)
          }
        })

        return parameters
      } else {
        return props.parameters
      }
    })

    const {
      propList,
      bindHeaders
    } = useItems(
      props,
      propHeaders,
      propParameters
    )

    const classHeaders = computed(() => {
      return { 'option-sticky': props.sticky }
    })

    const onOpen = event => context.emit('on-open', event)

    useAdmin('d-data', context)

    return {
      propHeaders,
      propParameters,
      propList,
      bindHeaders,
      classHeaders,
      onOpen
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
