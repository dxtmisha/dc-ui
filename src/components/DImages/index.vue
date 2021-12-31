<template>
  <div ref="images" v-bind="binds" class="d-images">
    <d-images-item
      v-for="item in propList"
      :key="item.value"
      v-bind="item"
    />
    <slot/>
  </div>
</template>

<script>
import DImagesItem from '@/components/DImagesItem'
import { props } from './props'
import { computed, provide, ref, toRefs } from 'vue'
import List from '@/classes/List'
import useAdmin from '@/uses/useAdmin'
import useAppearance from './useAppearance'

export default {
  name: 'DImages',
  components: { DImagesItem },
  props,
  setup (props, context) {
    const {
      barSize,
      barDisplay
    } = toRefs(props)

    const images = ref(undefined)
    const propList = computed(() => new List(
      props.list,
      props.listInit,
      props.translation,
      props.keyText,
      props.keyValue,
      false
    ).get())

    const {
      even,
      update
    } = useAppearance(
      images,
      props,
      propList
    )

    provide('barSize', barSize)
    provide('barDisplay', barDisplay)

    const binds = computed(() => {
      return {
        class: {
          [`appearance-${props.appearance}`]: props.appearance,
          'option-even': even.value
        },
        style: {
          '--im-size': props.size,
          '--im-gap': props.gap
        }
      }
    })

    useAdmin('d-images', context)

    return {
      images,
      propList,
      binds,
      update
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-images {
  @include imagesInit;
}
</style>
