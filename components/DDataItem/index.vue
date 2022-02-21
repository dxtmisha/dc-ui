<template>
  <d-motion-transform
    :adaptive="propAdaptive"
    :class="classTransform"
    :data-value="item?.value"
    :open="open"
    class="d-data-item__transform cs-click cp-click cp-position"
    v-bind="transformAttrs"
    @on-open="onOpen"
  >
    <template v-slot:head>
      <div v-bind="binds" class="d-data-item panel-static" :data-value="value">
        <div class="d-data-item__icon">
          <d-icon v-if="bindIcon.icon" v-bind="bindIcon"/>
        </div>
        <div class="d-data-item__body">
          <div class="d-data-item__text">
            <template v-if="'text' in $slots">
              <slot :item="item" :text="propText" name="text"/>
            </template>
            <template v-else><span v-html="propText"/></template>
          </div>
          <template v-for="parameter in parameters" :key="parameter">
            <div :data-parameter="parameter" class="d-data-item__parameter">
              <template v-if="parameter in $slots">
                <slot :name="parameter" :item="item"/>
              </template>
              <template v-else>{{ item[parameter] }}</template>
            </div>
          </template>
        </div>
        <d-progress v-if="isProgress" v-bind="bindProgress" :bottom="true"/>
      </div>
    </template>
    <template v-slot:default>
      <d-top
        :bar="[]"
        :class="classTop"
        :iconClose="iconArrowBack"
        appearance="transparent"
        class="d-data-item__top"
        v-bind="topAttrs"
        @on-click="onTop"
      />
      <slot name="body" :item="item"/>
    </template>
  </d-motion-transform>
</template>

<script>
import DIcon from '../DIcon'
import DMotionTransform from '../DMotionTransform'
import DProgress from '../DProgress'
import DTop from '../DTop'
import { props } from './props'
import { computed } from 'vue'
import attrProgress from '../DProgress/attrProgress'
import useAdmin from '../../uses/useAdmin'
import useColor from '../../uses/useColor'
import useIcon from './useIcon'
import getExp from './../../functions/getExp'

export default {
  name: 'DDataItem',
  inheritAttrs: false,
  components: {
    DTop,
    DIcon,
    DMotionTransform,
    DProgress
  },
  props,
  emits: ['on-open', 'on-top'],
  setup (props, context) {
    const propText = computed(() => {
      const text = props.item?.name || props.item?.text || props.text

      return props.underline
        ? text.toString().replace(
          getExp(props.underline, '(:value)'),
          subtext => `<span class="d-data-item__underline">${subtext}</span>`
        )
        : text
    })
    const propAdaptive = computed(() => {
      switch (props.adaptive) {
        case 'basic':
        case 'minimum':
          return 'panel'
        default:
          return props.adaptive
      }
    })

    const {
      isProgress,
      bindProgress
    } = attrProgress(props)

    const palette = useColor(props)
    const bindIcon = useIcon(props)
    const binds = computed(() => {
      return {
        class: {
          'value-background': props.backgroundColor,
          'status-selected': props.selected,
          [`appearance-${props.appearance}`]: props.appearance,
          [`size-${props.size}`]: props.size,
          [`shape-${props.shape}`]: props.shape,
          [`adaptive-${props.adaptive}`]: props.adaptive,
          'option-header': props.header,
          'option-dense': props.dense,
          'option-border': props.border,
          ...palette.value,
          ...context?.attrs?.class
        },
        style: {
          '--di-background-color': typeof props.backgroundColor === 'string' ? props.backgroundColor : null,
          '--di__tx-column': props.column
        }
      }
    })
    const classTransform = computed(() => {
      return {
        [props.positionClass]: props.positionClass,
        [props.selectionClass]: props.selectionClass,
        'status-open': props.open
      }
    })
    const classTop = computed(() => {
      return { [`adaptive-${props.adaptive}`]: props.adaptive }
    })

    const onOpen = event => context.emit('on-open', event)
    const onTop = event => {
      if (event.value === 'cancel') {
        context.emit('on-open', { open: !props.open })
      } else {
        context.emit('on-top', event)
      }
    }

    useAdmin('d-data-item', context)

    return {
      propText,
      propAdaptive,
      isProgress,
      bindIcon,
      bindProgress,
      binds,
      classTransform,
      classTop,
      onOpen,
      onTop
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-data-item {
  @include dataItemInit;
}
</style>
