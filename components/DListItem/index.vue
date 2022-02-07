<template>
  <component
    ref="main"
    :is="tag"
    v-if="!hide"
    v-bind="binds"
    class="d-list-item a-static"
    @click="onClick"
  >
    <d-icon v-if="thumbnail" v-bind="bindThumbnail" class="d-list-item__icon li-thumbnail"/>
    <d-icon v-else-if="icon" v-bind="bindIcon" class="d-list-item__icon li-icon"/>
    <d-icon v-if="iconTrailing" v-bind="bindTrailing" class="d-list-item__icon li-trailing"/>

    <div v-if="textShort" class="d-list-item__text-short">{{ textShort }}</div>
    <div v-if="text" class="d-list-item__text">
      <template v-if="prefix || suffix || description || underline">
        <div class="d-list-item__title">
          <span v-if="prefix" class="d-list-item__prefix">{{ prefix }}</span>
          <span class="d-list-item__main" v-html="propText"/>
          <span v-if="suffix" class="d-list-item__suffix">{{ suffix }}</span>
        </div>
        <div v-if="description" class="d-list-item__description" v-html="description"/>
      </template>
      <template v-else>{{ text }}</template>
    </div>

    <d-badge v-if="badge" v-bind="bindBadge"/>
    <d-progress v-if="isProgress" v-bind="bindProgress" :bottom="true"/>
    <d-ripple v-if="isRipple"/>

    <slot
      class-name="d-list-item__text"
      :item="item"
      :value="value"
      :text="text"
      :focus="focus"
      :selected="selected"
    />
  </component>
</template>

<script>
import DBadge from '../DBadge'
import DIcon from '../DIcon'
import DProgress from '../DProgress'
import DRipple from '../DRipple'
import { props } from './props'
import { computed } from 'vue'
import getExp from './../../functions/getExp'
import attrBadge from '../DBadge/attrBadge'
import attrProgress from '../DProgress/attrProgress'
import attrRipple from '../DRipple/attrRipple'
import useAdmin from '../../uses/useAdmin'
import useColor from '../../uses/useColor'
import useIcon from './useIcon'

export default {
  name: 'DListItem',
  components: {
    DBadge,
    DIcon,
    DProgress,
    DRipple
  },
  props,
  emits: ['on-click'],
  setup (props, context) {
    const propValue = computed(() => props.value || props.item?.value)
    const propText = computed(() => props.underline
      ? props.text.toString().replace(
        getExp(props.underline, '(:value)'),
        subtext => `<span class="d-list-item__underline">${subtext}</span>`
      )
      : props.text)
    const propAdaptive = computed(() => props.text || 'default' in context.slots ? props.adaptive : 'icon')

    const bindBadge = attrBadge(props)

    const {
      bindThumbnail,
      bindIcon,
      bindTrailing
    } = useIcon(props)

    const {
      isProgress,
      bindProgress
    } = attrProgress(props)

    const isRipple = attrRipple(props)

    const palette = useColor(props)
    const binds = computed(() => {
      return {
        class: {
          'value-thumbnail': props.thumbnail,
          'value-icon': props.icon,
          'value-trailing': props.iconTrailing,
          'value-background': props.backgroundColor,
          'status-focus': props.focus,
          'status-selected': props.selected,
          'status-disabled': props.disabled,
          [`appearance-${props.appearance}`]: props.appearance,
          [`size-${props.size}`]: props.size,
          [`shape-${props.shape}`]: props.shape,
          [`align-${props.align}`]: props.align,
          [`adaptive-${propAdaptive.value}`]: propAdaptive.value,
          [`navigation-rail-${props.navigationRail}`]: props.navigationRail,
          'option-dense': props.dense,
          'option-border': props.border,
          ...palette.value
        },
        style: { '--_li-background-color': typeof props.backgroundColor === 'string' ? props.backgroundColor : null },
        'data-value': propValue.value
      }
    })

    useAdmin('d-list-item', context, propValue)

    return {
      isRipple,
      isProgress,

      propText,
      propValue,
      bindBadge,
      bindThumbnail,
      bindIcon,
      bindTrailing,
      bindProgress,
      binds
    }
  },
  methods: {
    onClick (event) {
      if (this.to && this?.$router) {
        event.preventDefault()
        event.stopPropagation()
        this.$router.push(this.to)
      } else {
        this.$emit('on-click', {
          item: this.item,
          value: this.propValue,
          selected: !this.selected
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-list-item {
  @include listItemInit;
}
</style>
