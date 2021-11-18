<template>
  <component
    :is="tag"
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
      <template v-if="prefix || suffix || description">
        <div class="d-list-item__title">
          <span v-if="prefix" class="d-list-item__prefix">{{ prefix }}</span>
          <span class="d-list-item__main" v-html="text"/>
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
import DBadge from '@/--components/DBadge'
import DIcon from '@/components/DIcon'
import DRipple from '@/components/DRipple'
import { props } from '@/components/DListItem/props'
import { toRefs } from 'vue'
import { setupBadge } from '@/components/DBadge/setupBadge'
import { setupIcon } from '@/components/DIcon/setupIcon'
import { useAdmin } from '@/tool/use/useAdmin'
import { useColor } from '@/tool/use/useColor'
import { useWatch } from '@/tool/use/useWatch'

export default {
  name: 'DListItem',
  components: {
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
      iconActive,
      iconTrailing,
      badge,
      badgeIcon,
      text,
      backgroundColor,
      focus,
      selected,
      turn,
      disabled,
      palette,
      color,
      appearance,
      navigationRail,
      size,
      shape,
      adaptive,
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

    const {
      bindBadge
    } = setupBadge(
      badge,
      badgeIcon
    )

    const {
      bindThumbnail,
      bindIcon,
      bindTrailing
    } = setupIcon(
      'd-list-item__icon li',
      icon,
      iconActive,
      iconTrailing,
      thumbnail,
      selected,
      turn,
      disabled,
      undefined,
      size,
      undefined,
      iconAnimationShow,
      iconBackground,
      iconReadonly
    )

    const { classColor } = useColor(color, palette)

    const binds = useWatch([
      iconTrailing,
      backgroundColor,
      focus,
      selected,
      disabled,
      classColor,
      appearance,
      navigationRail,
      size,
      shape,
      propAdaptive,
      dense,
      border
    ], data => {
      data.value = {
        class: {
          'd-list-item a-static': true,
          'value-trailing': iconTrailing.value,
          'value-background': backgroundColor.value,
          'status-focus': focus.value,
          'status-selected': selected.value,
          'status-disabled': disabled.value,
          ...classColor.value,
          [`appearance-${appearance.value}`]: appearance.value,
          [`navigation-rail-${navigationRail.value}`]: navigationRail.value,
          [`size-${size.value}`]: size.value,
          [`shape-${shape.value}`]: shape.value,
          [`adaptive-${propAdaptive.value}`]: propAdaptive.value,
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
