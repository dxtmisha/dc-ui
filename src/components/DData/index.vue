<template>
  <div v-if="propList" class="d-data">
    <d-data-item
      v-for="item in propList"
      :key="item.value"
      v-bind="item"
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
import useAdmin from '@/uses/useAdmin'
import useItems from './useItems'

export default {
  name: 'DData',
  components: { DDataItem },
  props,
  setup (props, context) {
    const propList = useItems(props)

    useAdmin('d-data', context)

    return {
      propList
    }
  }
}
</script>

<style lang="scss"/>
