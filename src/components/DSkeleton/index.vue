<template>
  <component
    ref="skeleton"
    :is="tag"
    :class="classList"
    class="d-skeleton"
  >
    <slot/>
  </component>
</template>

<script>
import { props } from './props'
import { computed, nextTick, ref, toRefs } from 'vue'
import forEach from './../../functions/forEach'
import useAdmin from './../../uses/useAdmin'
import useColor from './../../uses/useColor'
import useWatch from './../../uses/useWatch'

export default {
  name: 'DSkeleton',
  props,
  setup (props, context) {
    const { progress } = toRefs(props)
    const skeleton = ref(undefined)

    let time
    const propProgress = ref(undefined)

    const update = value => {
      forEach({
        'skeleton-text': props.itemText,
        'skeleton-secondary': props.itemSecondary,
        'skeleton-tertiary': props.itemTertiary,
        'skeleton-background': props.itemBackground,
        'skeleton-border': props.itemBorder
      }, (selector, className) => {
        skeleton.value.querySelectorAll(selector)?.forEach(item => item.classList.toggle(className, value))
      })
    }

    useWatch(progress, async () => {
      clearTimeout(time)

      await nextTick()
      update(progress.value)

      if (progress.value && props.delay) {
        setTimeout(() => {
          propProgress.value = true
        }, props.delay)
      } else {
        propProgress.value = progress.value
      }
    }, ['mounted'])

    const palette = useColor(props)
    const classList = computed(() => {
      return {
        [`appearance-${props.appearance}`]: props.appearance,
        'status-progress': propProgress.value,
        ...palette.value
      }
    })

    useAdmin('d-skeleton', context)

    return {
      skeleton,
      classList
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-skeleton {
  @include skeletonInit;
}
</style>
