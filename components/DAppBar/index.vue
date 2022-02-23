<template>
  <div ref="app" v-bind="binds" class="d-app-bar">
    <div :style="styleBody" class="d-app-bar__body">
      <template v-if="menuAjax || barNavigation">
        <d-menu v-bind="bindMenu" @on-input="set">
          <template v-slot:default="{ classList, open, progress, onClick }">
            <div class="d-app-bar__navigation">
              <d-button
                v-bind="bindButton"
                :active="open || propAction"
                :class="classList"
                :icon-turn="open || propAction"
                :progress="progress"
                @click="onNavigation($event, onClick)"
              />
            </div>
          </template>
        </d-menu>
      </template>
      <div v-else-if="navigation" class="d-app-bar__navigation">
        <d-button v-bind="bindButton" @on-click="onNavigation($event, set)"/>
      </div>

      <div v-if="isText" class="d-app-bar__title">
        <span v-if="propAction && textAction" class="d-app-bar__text">{{ textAction }}</span>
        <template v-else>
          <a v-if="text" class="d-app-bar__text a-static" :href="href">{{ text }}</a>
          <a v-if="textShort" class="d-app-bar__short a-static" :href="href">{{ textShort }}</a>
        </template>
      </div>

      <template v-if="propAction">
        <div class="d-app-bar__spacer"/>
        <d-list v-bind="bindList" :list="propBarAction" class="d-app-bar__action"/>
      </template>
      <template v-else>
        <slot
          class-title="d-app-bar__title"
          class-spacer="d-app-bar__spacer"
          class-action="d-app-bar__action"
          class-menu="d-app-bar__menu"
        />
        <d-list
          v-if="propBarMenu.length"
          v-bind="bindList"
          :list="propBarMenu"
          class="d-app-bar__menu"
          @on-click="set"
        />
        <template v-if="propBar.length">
          <div class="d-app-bar__spacer"/>
          <d-list
            v-bind="bindList"
            :list="propBar"
            class="d-app-bar__bar"
            @on-click="set"
          />
        </template>
      </template>
    </div>

    <div v-if="propShow" class="d-app-bar__content">
      <d-motion-transform
        :ignore="app"
        :open="!!contentSelected"
        @on-open="onOpen"
        @on-close="onClose"
      >
        <template v-slot:head>
          <slot name="head"/>
        </template>
        <template v-slot:body>
          <d-motion-axis :selected="contentSelected" :transition="directions">
            <template v-for="item in propSlots" :key="item.index" v-slot:[item.index]>
              <slot :name="item.index" :set="set"/>
            </template>
          </d-motion-axis>
        </template>
      </d-motion-transform>
    </div>
  </div>
</template>

<script>
import DButton from '../DButton'
import DList from '../DList'
import DMenu from '../DMenu'
import DMotionAxis from '../DMotionAxis'
import DMotionTransform from '../DMotionTransform'
import { props } from './props'
import { computed, ref } from 'vue'
import useAction from './useAction'
import useAdmin from '../../uses/useAdmin'
import useBar from './useBar'
import useButton from './useButton'
import useList from './useList'
import useScroll from './useScroll'
import useSelected from './useSelected'

export default {
  name: 'DAppBar',
  components: {
    DButton,
    DList,
    DMenu,
    DMotionAxis,
    DMotionTransform
  },
  props,
  emits: ['on-click', 'on-action'],
  setup (props, context) {
    const app = ref(undefined)

    const isText = computed(() => props.text || props.textShort || props.textAction)

    const {
      propBar,
      propBarMenu,
      propBarAction
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

    const propAction = useAction(app, props)

    useScroll(app, props)

    const {
      bindList,
      bindMenu
    } = useList(props, propSelected)

    const bindButton = useButton(props, propAction)
    const binds = computed(() => {
      return {
        class: {
          'status-short': props.textShort,
          'status-action': propAction.value,
          [`appearance-${props.appearance}`]: props.appearance,
          [`scroll-${props.scroll}`]: props.scroll,
          [`size-${props.size}`]: props.size,
          [`shape-${props.shape}`]: props.shape,
          'option-transform': props.transform
        },
        style: {
          '--_ab-width': props.width,
          '--_ab-transform': props.transform ? `${props.transform}px` : null
        }
      }
    })
    const styleBody = computed(() => {
      return { 'background-image': props.src ? `url(${props.src})` : null }
    })

    const onNavigation = (event, on) => {
      if (propAction.value) {
        context.emit('on-action')
      } else {
        on(event)
      }
    }

    useAdmin('d-app-bar', context)

    return {
      app,

      isText,

      propBar,
      propBarMenu,
      propBarAction,
      propAction,
      propShow,
      propSlots,

      contentSelected,
      directions,

      bindButton,
      bindList,
      bindMenu,
      binds,
      styleBody,

      set,
      onNavigation,
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
