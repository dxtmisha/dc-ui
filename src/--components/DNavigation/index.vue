<template>
  <div
    ref="navigation"
    v-bind="binds"
    @click="onClose"
  >
    <div
      ref="body"
      class="d-navigation__body"
      :class="classScroll"
    >
      <div v-if="title" class="d-navigation__title">
        {{ title }}
        <d-button
          v-if="close"
          value="close"
          :icon="iconClose"
          appearance="text"
          size="small"
          shape="pill"
          @on-click="set"
        />
      </div>
      <slot/>
      <d-motion-axis
        :selected="contentSelected || 'list'"
        :transition="directions"
      >
        <template v-slot:list>
          <slot name="list"/>
          <d-list
            v-bind="bindList"
            :list="propList"
            :selected="propSelected"
            @on-click="set"
          />
        </template>
        <template
          v-for="item in propSlots"
          :key="item.index"
          v-slot:[item.index]
        >
          <div v-if="back" class="d-navigation__item">
            <d-list-item
              v-bind="bindList"
              :text="item.text"
              :navigation-rail="undefined"
              :icon="iconChevronLeft"
              @on-click="set"
            />
          </div>
          <div class="d-navigation__content">
            <slot :name="item.index" :set="set"/>
          </div>
        </template>
      </d-motion-axis>
    </div>
  </div>
</template>

<script>
import DButton from '@/components/DButton'
import DList from '@/components/DList'
import DListItem from '@/components/DListItem'
import DMotionAxis from '@/components/DMotionAxis'
import { props } from './props'
import { computed, ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useBar from './useBar'
import useOpen from './useOpen'
import useScroll from '@/uses/useScroll'
import useSelected from '@/components/DAppBar/useSelected'

export default {
  name: 'DNavigation',
  components: {
    DButton,
    DList,
    DListItem,
    DMotionAxis
  },
  props,
  emits: ['on-click', 'on-close'],
  setup (props, context) {
    const navigation = ref(undefined)
    const body = ref(undefined)

    const {
      propList,
      bindList
    } = useBar(props)

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
    const binds = computed(() => {
      return {
        class: {
          'd-navigation': true,
          [`appearance-${props.appearance}`]: props.appearance,
          [`shape-${props.shape}`]: props.shape,
          [`adaptive-${props.adaptive}`]: props.adaptive,
          [`navigation-rail-${props.navigationRail}`]: props.navigationRail,
          'option-right': props.right
        },
        style: {
          '--_nv-width': props.width,
          '--_nv-background-image': props.src ? `url(${props.src})` : null
        }
      }
    })
    const classScroll = useScroll()

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
