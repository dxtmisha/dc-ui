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
import DImagesItem from './../DImagesItem'
import { props } from './props'
import { computed, provide, ref, toRefs } from 'vue'
import List from './../../classes/List'
import forEach from './../../functions/forEach'
import isSelected from './../../functions/isSelected'
import useAdmin from './../../uses/useAdmin'
import useAppearance from './useAppearance'
import useWatch from './../../uses/useWatch'

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
    const propObject = computed(() => new List(
      props.list,
      props.listInit,
      props.translation,
      props.keyText,
      props.keyValue,
      false
    ).get())
    const propList = useWatch(propObject, () => forEach(propObject.value, item => {
      return {
        ...item,
        selected: computed(() => isSelected(item?.value, props.selected))
      }
    }), ['init'])

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
