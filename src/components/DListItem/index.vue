<template>
  <component
    :is="tag"
    :class="classList"
    :style="styleList"
    :data-value="value"
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
      :disabled="disabled"
    />
    <d-ripple
      v-if="ripple"
      :disabled="disabled"
    />
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
import DRipple from '@/components/DRipple'
import { props } from '@/components/DListItem/props'
import { computed, toRefs } from 'vue'
import { useIcon } from './useIcon'
import { useColor } from '@/uses/useColors'
import { setupBadge } from '@/components/DBadge/setupBadge'

export default {
  name: 'DListItem',
  components: {
    DBadge,
    DIcon,
    DRipple
  },
  props,
  setup (props, context) {
    const {
      // Values
      thumbnail,
      icon,
      iconTrailing,

      // Status
      focus,
      selected,
      disabled,

      // Options
      palette,
      color,
      appearance,
      navigationRail,
      size,
      shape,
      dense,
      backgroundColor,
      border
    } = toRefs(props)

    const { classColor } = useColor(color, palette)
    const {
      optionAdaptive,
      bindThumbnail,
      bindIcon,
      bindTrailing
    } = useIcon(props, context)
    const { bindBadge } = setupBadge(props)

    const classList = computed(() => {
      return {
        'd-list-item a-static': true,
        'value-thumbnail': thumbnail.value,
        'value-icon': icon.value,
        'value-trailing': iconTrailing.value,
        'status-focus': focus.value,
        'status-selected': selected.value,
        'status-disabled': disabled.value,
        ...classColor.value,
        [`appearance-${appearance.value}`]: appearance.value,
        [`adaptive-${optionAdaptive.value}`]: optionAdaptive.value,
        [`navigation-rail-${navigationRail.value}`]: navigationRail.value,
        [`size-${size.value}`]: size.value,
        [`shape-${shape.value}`]: shape.value,
        'option-dense': dense.value,
        'option-background': backgroundColor.value,
        'option-border': border.value
      }
    })
    const styleList = computed(() => {
      return {
        '--_li-background-color': backgroundColor.value
      }
    })

    return {
      bindThumbnail,
      bindIcon,
      bindTrailing,
      bindBadge,
      classList,
      styleList
    }
  },
  updated () {
    console.log('updated item')
  },
  methods: {
    onClick () {
      this.$emit('on-click', {
        item: this.item,
        value: this.value,
        selected: this.selected,
        toSelected: !this.selected
      })
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
