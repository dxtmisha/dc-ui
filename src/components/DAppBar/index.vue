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
          <span v-if="text" class="d-app-bar__text">{{ text }}</span>
          <span v-if="textShort" class="d-app-bar__short">{{ textShort }}</span>
        </template>
      </div>
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
          :selected="selected"
        />
        <div class="d-app-bar__spacer"/>
        <d-list
          v-bind="bindList"
          class="d-app-bar__bar"
          :list="propBar"
          :selected="selected"
        />
      </template>
    </div>
    <div class="d-app-bar__content"></div>
  </div>
</template>

<script>
import DButton from '@/components/DButton'
import DList from '@/components/DList'
import { props } from './props'
import { computed, ref } from 'vue'
import useAction from '@/components/DAppBar/useAction'
import useAdmin from '@/uses/useAdmin'
import useBar from './useBar'
import useColor from '@/uses/useColor'

export default {
  name: 'DAppBar',
  components: {
    DButton,
    DList
  },
  props,
  setup (props, context) {
    const app = ref(undefined)

    const {
      propBar,
      propBarMenu,
      propBarAction,
      bindList
    } = useBar(props)
    const { propAction } = useAction(app, props)

    const palette = useColor(props)
    const binds = computed(() => {
      return {
        class: {
          'd-app-bar': true,
          'status-action': propAction.value,
          [`appearance-${props.appearance}`]: props.appearance,
          [`scroll-${props.scroll}`]: props.scroll,
          [`size-${props.size}`]: props.size,
          [`shape-${props.shape}`]: props.shape,
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
      bindList,
      binds
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
