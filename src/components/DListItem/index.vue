<template>
  <component
    :is="tag"
    :class="classList"
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
import DIcon from '@/components/DIcon'
import DRipple from '@/components/DRipple'
import { props } from '@/components/DListItem/props'
import { computed, toRefs } from 'vue'
import { useIcon } from './useIcon'

export default {
  name: 'DListItem',
  components: {
    DIcon,
    DRipple
  },
  props,
  setup (props, context) {
    const {
      // Values
      thumbnail,
      icon,

      // Status
      focus,
      selected,
      disabled,

      // Options
      appearance,
      navigationRail,
      size,
      shape,
      border
    } = toRefs(props)

    const {
      optionAdaptive,
      bindThumbnail,
      bindIcon,
      bindTrailing
    } = useIcon(props, context)

    const classList = computed(() => {
      return {
        'd-list-item a-static': true,
        'value-thumbnail': thumbnail.value,
        'value-icon': icon.value,
        'status-focus': focus.value,
        'status-selected': selected.value,
        'status-disabled': disabled.value,
        [`appearance-${appearance.value}`]: appearance.value,
        [`adaptive-${optionAdaptive.value}`]: optionAdaptive.value,
        [`navigation-rail-${navigationRail.value}`]: navigationRail.value,
        [`size-${size.value}`]: size.value,
        [`shape-${shape.value}`]: shape.value,
        'option-border': border.value
      }
    })

    return {
      bindThumbnail,
      bindIcon,
      bindTrailing,
      classList
    }
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
