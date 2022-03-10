<template>
  <div
    ref="navigation"
    v-bind="binds"
    class="d-navigation"
    @click="onClose"
  >
    <div ref="body" :class="classScroll" :style="styleScroll" class="d-navigation__body">
      <div v-if="title" class="d-navigation__title">
        {{ title }}
        <d-button
          v-if="close"
          :icon="iconClose"
          appearance="text"
          shape="pill"
          size="small"
          value="close"
          @on-click="set"
        />
      </div>
      <slot/>
      <d-motion-axis :selected="contentSelected || 'list'" :transition="directions">
        <template v-slot:list>
          <slot name="list"/>
          <d-list v-bind="bindList" class="d-navigation__list" @on-click="set"/>
        </template>

        <template
          v-for="{index, text} in propSlots"
          :key="index"
          v-slot:[index]
        >
          <div v-if="back" class="d-navigation__item">
            <d-list-item
              v-bind="bindList"
              :text="text"
              :selected="false"
              :navigation-rail="undefined"
              :icon="iconChevronLeft"
              @on-click="set"
            />
          </div>
          <div class="d-navigation__content">
            <slot :name="index" :set="set"/>
          </div>
        </template>
      </d-motion-axis>
    </div>
  </div>
</template>

<script>
import DButton from '../DButton'
import DList from '../DList'
import DListItem from '../DListItem'
import DMotionAxis from '../DMotionAxis'
import { props } from './props'
import { computed, ref } from 'vue'
import List from '../../classes/List'
import useAdmin from '../../uses/useAdmin'
import useList from './useList'
import useOpen from './useOpen'
import useScroll from '../../uses/useScroll'
import useSelected from '../DAppBar/useSelected'

export default {
  name: 'DNavigation',
  components: {
    DButton,
    DList,
    DListItem,
    DMotionAxis
  },
  props,
  emits: [
    'on-click',
    'on-close',
    'update:selected',
    'update:modelValue'
  ],
  setup (props, context) {
    const navigation = ref(undefined)
    const body = ref(undefined)

    const propList = computed(() => new List(
      props.list,
      props.listInit,
      props.translation,
      props.keyText,
      props.keyValue
    ).get())

    const {
      toClick,
      propSelected,
      propSlots,
      contentSelected,
      set
    } = useSelected(
      navigation,
      props,
      context,
      [propList]
    )

    const {
      show,
      onClose
    } = useOpen(
      navigation,
      body,
      props,
      context,
      toClick,
      set
    )

    const directions = computed(() => contentSelected.value ? 'next' : 'back')

    const bindList = useList(
      props,
      propList,
      propSelected
    )
    const binds = computed(() => {
      return {
        class: {
          [`appearance-${props.appearance}`]: props.appearance,
          [`shape-${props.shape}`]: props.shape,
          [`adaptive-${props.adaptive}`]: props.adaptive,
          [`navigation-rail-${props.navigationRail}`]: props.navigationRail,
          'option-right': props.right,
          'option-bottom': props.bottom
        },
        style: { '--_nv-width': props.width }
      }
    })
    const classScroll = useScroll()
    const styleScroll = computed(() => {
      return { 'background-image': props.src ? `url(${props.src})` : null }
    })

    useAdmin('d-navigation', context)

    return {
      navigation,
      body,
      propList,
      propSelected,
      propSlots,
      contentSelected,
      directions,
      bindList,
      binds,
      classScroll,
      styleScroll,
      set,
      show,
      onClose
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-navigation {
  @include navigationInit;
}
</style>
