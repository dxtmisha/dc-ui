<template>
  <div
    ref="snackbar"
    :class="classList"
    @transitionend="onTransition"
  >
    <div class="d-snackbar__body">
      <div class="d-snackbar__text">
        <d-icon
          v-if="icon"
          class="d-snackbar__icon"
          :icon="icon"
          size="small"
        />
        <span v-html="text"/>
        <slot/>
      </div>
      <d-actions
        class="d-snackbar__bar"
        :bar="action"
        size="small"
        @on-click="onClick"
      />
    </div>
  </div>
</template>

<script>
import DActions from '@/--components/DActions'
import DIcon from '@/components/DIcon'
import { props } from './props'
import { computed, nextTick, ref, toRefs } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useClass from '@/--uses/useClass'
import useColor from '@/--uses/useColor'
import useWatch from '@/uses/useWatch'

export default {
  name: 'DSnackbar',
  components: {
    DActions,
    DIcon
  },
  props,
  setup (props, context) {
    const {
      items,
      open
    } = toRefs(props)

    const snackbar = ref(undefined)
    const palette = useColor(props)

    const init = item => {
      return {
        bar: props.bar,
        ...item
      }
    }

    const classShow = useClass(snackbar, 'status-show')
    const propItems = useWatch([items, open], data => {
      data.value = []
      items.value.forEach(item => data.value.push(init(item)))

      if (open.value) {
        start()
      }
    }, ['mounted'])

    let timeout
    const icon = ref(undefined)
    const text = ref(undefined)
    const action = ref(undefined)

    const start = async () => {
      if (classShow.value === false) {
        const item = propItems.value.shift()

        if (item) {
          icon.value = item?.icon
          text.value = item?.text
          action.value = item?.bar

          await nextTick()

          classShow.set(true)
          timeout = setTimeout(end, props.timeout)
        }
      }
    }
    const end = () => {
      if (timeout) {
        clearTimeout(timeout)
        timeout = undefined

        classShow.set(false)
      }
    }
    const show = item => {
      propItems.value.push(init(item))
      start()
    }

    const classList = computed(() => {
      return {
        'd-snackbar': true,
        [`shape-${props.shape}`]: props.shape,
        [`align-${props.align}`]: props.align,
        ...palette.value
      }
    })

    const onTransition = async ({ propertyName }) => {
      if (
        classShow.value === false &&
        propertyName === 'visibility'
      ) {
        setTimeout(start, props.interspace)
      }
    }
    const onClick = event => {
      if (event.value === 'close') {
        end()
      } else {
        context.emit('on-click', event)
      }
    }

    useAdmin('d-snackbar', context)

    return {
      snackbar,
      icon,
      text,
      action,
      classList,
      show,
      onTransition,
      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-snackbar {
  @include snackbarInit
}
</style>
