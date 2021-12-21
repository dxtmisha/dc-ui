<template>
  <div ref="app" v-bind="binds">
    <div class="d-app-bar__body">
      <template v-if="attrsMenu || barNavigation">
        <d-menu
          v-bind="attrsMenu"
          :list="barNavigation"
          :selected="propSelected"
        >
          <template v-slot:default="{ classList, open, progress, onClick }">
            <div class="d-app-bar__navigation">
              <d-button
                :class="classList"
                :icon="iconNavigation"
                :icon-active="iconClose"
                :active="open || propAction"
                :progress="progress"
                appearance="text"
                size="medium"
                shape="pill"
                :icon-turn="open || propAction"
                @click="onNavigation($event, onClick)"
              />
            </div>
          </template>
        </d-menu>
      </template>
      <div v-else-if="navigation" class="d-app-bar__navigation">
        <d-button
          value="navigation"
          :icon="iconNavigation"
          :icon-active="iconClose"
          :active="open || propAction"
          appearance="text"
          size="medium"
          shape="pill"
          :icon-turn="open || propAction"
          @on-click="onNavigation($event, set)"
        />
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
        <keep-alive>
          <d-list
            v-bind="bindList"
            class="d-app-bar__action"
            :list="propBarAction"
          />
        </keep-alive>
      </template>
      <template v-else>
        <slot
          classTitle="d-app-bar__title"
          classSpacer="d-app-bar__spacer"
          classAction="d-app-bar__action"
          classMenu="d-app-bar__menu"
        />
        <keep-alive>
          <d-list
            v-if="propBarMenu.length"
            v-bind="bindList"
            class="d-app-bar__menu"
            :list="propBarMenu"
            :selected="propSelected"
            @on-click="set"
          />
        </keep-alive>
        <template v-if="propBar.length">
          <div class="d-app-bar__spacer"/>
          <keep-alive>
            <d-list
              v-bind="bindList"
              class="d-app-bar__bar"
              :list="propBar"
              :selected="propSelected"
              @on-click="set"
            />
          </keep-alive>
        </template>
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
import DList from '@/--components/DList'
import DMenu from '@/--components/DMenu'
import DMotionAxis from '@/components/DMotionAxis'
import DMotionTransform from '@/components/DMotionTransform'
import { props } from './props'
import { computed, ref } from 'vue'
import useAction from './useAction'
import useAdmin from '@/uses/useAdmin'
import useBar from './useBar'
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

    const isText = computed(() => props.text || props.textShort || props.textAction)

    useScroll(app, props)

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
          'option-transform': props.transform
        },
        style: {
          '--_ab-width': props.width,
          '--_ab-transform': props.transform ? `${props.transform}px` : null,
          '--_ab-background-image': props.src ? `url(${props.src})` : null
        }
      }
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
      propSelected,
      propShow,
      propSlots,
      contentSelected,
      directions,
      bindList,
      binds,
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
