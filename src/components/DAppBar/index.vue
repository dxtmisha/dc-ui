<template>
  <div ref="app" v-bind="binds">
    <div class="d-app-bar__body">
      <div class="d-app-bar__navigation">
        <d-button
          :icon="iconNavigation"
          :icon-active="iconClose"
          :active="open || propAction"
          appearance="text"
          size="medium"
          shape="pill"
          :icon-turn="open || propAction"
        />
      </div>
      <div class="d-app-bar__title">
        <span v-if="propAction && textAction" class="d-app-bar__text">{{ textAction }}</span>
        <template v-else>
          <a v-if="text" class="d-app-bar__text a-static" :href="href">{{ text }}</a>
          <a v-if="textShort" class="d-app-bar__short a-static" :href="href">{{ textShort }}</a>
        </template>
      </div>
      <slot
        classTitle="d-app-bar__title"
        classSpacer="d-app-bar__spacer"
        classAction="d-app-bar__action"
        classMenu="d-app-bar__menu"
      />
      <template v-if="propAction">
        <div class="d-app-bar__spacer"/>
        <d-list
          v-bind="bindList"
          class="d-app-bar__action"
          :list="propBarAction"
        />
      </template>
      <template v-else>
        <d-list
          v-bind="bindList"
          class="d-app-bar__menu"
          :list="propBarMenu"
          :selected="propSelected"
          @on-click="set"
        />
        <div class="d-app-bar__spacer"/>
        <d-list
          v-bind="bindList"
          class="d-app-bar__bar"
          :list="propBar"
          :selected="propSelected"
          @on-click="set"
        />
      </template>
    </div>
    <div v-if="propShow" class="d-app-bar__content">
      <d-motion-transform
        :open="!!contentSelected"
        :static-element="app"
        @on-open="onOpen"
        @on-close="onClose"
      >
        <template v-slot:head>
          <slot name="head"/>
        </template>
        <template v-slot:default>
          <d-motion-axis
            :selected="contentSelected"
            :transition="directions"
          >
            <template
              v-for="item in propSlots"
              :key="item.index"
              v-slot:[item.index]
            >
              <slot :name="item.index" :set="set"/>
            </template>
          </d-motion-axis>
        </template>
      </d-motion-transform>
    </div>
  </div>
</template>

<script>
import DButton from '@/components/DButton'
import DList from '@/components/DList'
import DMotionAxis from '@/components/DMotionAxis'
import DMotionTransform from '@/components/DMotionTransform'
import { props } from './props'
import { computed, ref } from 'vue'
import useAction from './useAction'
import useAdmin from '@/uses/useAdmin'
import useBar from './useBar'
import useColor from '@/uses/useColor'
import useScroll from './useScroll'
import useSelected from './useSelected'

export default {
  name: 'DAppBar',
  components: {
    DButton,
    DList,
    DMotionAxis,
    DMotionTransform
  },
  props,
  emits: ['on-click'],
  setup (props, context) {
    const app = ref(undefined)

    const {
      propBar,
      propBarMenu,
      propBarAction,
      bindList
    } = useBar(props)

    const {
      propSelected,
      propShow,
      propSlots,
      contentSelected,
      directions,
      set,
      onOpen,
      onClose
    } = useSelected(
      app,
      props,
      context,
      [propBar, propBarMenu]
    )

    const { propAction } = useAction(app, props)

    useScroll(app, props)

    const palette = useColor(props)
    const binds = computed(() => {
      return {
        class: {
          'd-app-bar': true,
          'status-short': props.textShort,
          'status-action': propAction.value,
          [`appearance-${props.appearance}`]: props.appearance,
          [`scroll-${props.scroll}`]: props.scroll,
          [`size-${props.size}`]: props.size,
          [`shape-${props.shape}`]: props.shape,
          'option-transform': props.transform,
          ...palette.value
        },
        style: {
          '--_ab-width': props.width,
          '--_ab-transform': props.transform ? `${props.transform}px` : null,
          '--_ab-background-image': props.src ? `url(${props.src})` : null
        }
      }
    })

    useAdmin('d-app-bar', context)

    return {
      app,
      propBar,
      propBarMenu,
      propBarAction,
      propAction,
      propSelected,
      propShow,
      propSlots,
      contentSelected,
      directions,
      bindList,
      binds,
      set,
      onOpen,
      onClose
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-app-bar {
  @include appBarInit;
}
</style>
