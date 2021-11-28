<template>
  <component
    :is="tag"
    v-if="!hide"
    v-bind="binds"
    @click="onClick"
  >
    <d-icon v-if="thumbnail" v-bind="bindThumbnail"/>
    <d-icon v-else-if="icon" v-bind="bindIcon"/>
    <d-icon v-if="iconTrailing" v-bind="bindTrailing"/>
    <div
      v-if="textShort"
      class="d-list-item__text-short"
    >
      {{ textShort }}
    </div>
    <div
      v-if="text"
      class="d-list-item__text"
    >
      <template v-if="prefix || suffix || description || underline">
        <div class="d-list-item__title">
          <span v-if="prefix" class="d-list-item__prefix">{{ prefix }}</span>
          <span class="d-list-item__main" v-html="propText"/>
          <span v-if="suffix" class="d-list-item__suffix">{{ suffix }}</span>
        </div>
        <div
          v-if="description"
          class="d-list-item__description"
          v-html="description"
        />
      </template>
      <template v-else>{{ text }}</template>
    </div>
    <d-badge
      v-if="bindBadge"
      v-bind="bindBadge"
      :hide="disabled"
    />
    <d-progress
      v-if="progress && !disabled"
      :visible="progress"
      :bottom="true"
    />
    <d-ripple v-if="ripple && !disabled"/>
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
import DBadge from '@/components/DBadge'
import DIcon from '@/components/DIcon'
import DProgress from '@/--components/DProgress'
import DRipple from '@/--components/DRipple'
import { props } from '@/--components/DListItem/props'
import { reactive, toRefs } from 'vue'
import { setupBadge } from '@/--components/DBadge/setupBadge'
import { setupIcon } from '@/--components/DIcon/setupIcon'
import { useAdmin } from '@/--uses/useAdmin'
import { useColor } from '@/--uses/useColor'
import { useWatch } from '@/--uses/useWatch'

export default {
  name: 'DListItem',
  components: {
    DProgress,
    DBadge,
    DIcon,
    DRipple
  },
  props,
  emits: ['on-click'],
  setup (props, context) {
    const {
      item,
      value,
      thumbnail,
      icon,
      iconTrailing,
      text,
      underline,
      backgroundColor,
      focus,
      selected,
      disabled,
      palette,
      color,
      appearance,
      size,
      shape,
      adaptive,
      navigationRail,
      dense,
      border,
      iconReadonly,
      iconAnimationShow,
      iconBackground
    } = toRefs(props)

    const propAdaptive = useWatch([
      text,
      adaptive
    ], data => {
      data.value = text.value || 'default' in context.slots ? adaptive.value : 'icon'
    })
    const propText = useWatch([text, underline], data => {
      data.value = underline.value
        ? text.value.toString().replace(
          new RegExp(`(${underline.value})`, 'ig'),
          subtext => `<span class="d-list-item__underline">${subtext}</span>`
        )
        : text.value
    })

    const {
      bindThumbnail,
      bindIcon,
      bindTrailing
    } = setupIcon(
      'd-list-item__icon li',
      reactive({
        ...toRefs(props),
        active: selected,
        hide: undefined,
        animationShow: iconAnimationShow,
        background: iconBackground,
        iconStatic: iconReadonly
      })
    )
    const { bindBadge } = setupBadge(props)

    const { classColor } = useColor(color, palette)
    const binds = useWatch([
      thumbnail,
      icon,
      iconTrailing,
      backgroundColor,
      focus,
      selected,
      disabled,
      classColor,
      appearance,
      size,
      shape,
      propAdaptive,
      navigationRail,
      dense,
      border
    ], data => {
      data.value = {
        class: {
          'd-list-item a-static': true,
          'value-thumbnail': thumbnail.value,
          'value-icon': icon.value,
          'value-trailing': iconTrailing.value,
          'value-background': backgroundColor.value,
          'status-focus': focus.value,
          'status-selected': selected.value,
          'status-disabled': disabled.value,
          ...classColor.value,
          [`appearance-${appearance.value}`]: appearance.value,
          [`size-${size.value}`]: size.value,
          [`shape-${shape.value}`]: shape.value,
          [`adaptive-${propAdaptive.value}`]: propAdaptive.value,
          [`navigation-rail-${navigationRail.value}`]: navigationRail.value,
          'option-dense': dense.value,
          'option-border': border.value
        },
        style: {
          '--_li-background-color': backgroundColor.value
        },
        'data-value': value.value
      }
    })

    const onClick = () => context.emit('on-click', {
      item: item.value,
      value: value.value,
      selected: !selected.value
    })

    useAdmin('d-list-item')

    return {
      propText,
      bindBadge,
      bindThumbnail,
      bindIcon,
      bindTrailing,
      binds,
      onClick
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
