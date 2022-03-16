<template>
  <div class="d-tab-picker">
    <d-tab
      ref="tab"
      :selected="propSelected"
      v-bind="bindTab"
      @on-click="onClick"
    />
    <d-motion-axis
      v-if="animationShow"
      :selected="propSelected"
      :transition="transition"
      class="d-tab-picker__body"
    >
      <template v-for="{value} in propList" :key="value" v-slot:[value]>
        <slot :name="value"/>
      </template>
    </d-motion-axis>
    <div v-else class="d-tab-picker__body">
      <slot :name="propSelected"/>
    </div>
  </div>
</template>

<script>
import DMotionAxis from '../DMotionAxis'
import DTab from '../DTab'
import { props } from './props'
import { computed, ref, toRefs } from 'vue'
import List from '../../classes/List'
import attrTab from '../DTab/attrTab'
import useAdmin from '../../uses/useAdmin'
import useWatch from '../../uses/useWatch'

export default {
  name: 'DTabPicker',
  components: {
    DMotionAxis,
    DTab
  },
  props,
  emit: [
    'on-click',
    'update:selected',
    'update:modelValue'
  ],
  setup (props, context) {
    const { selected } = toRefs(props)

    const propList = computed(() => new List(
      props.list,
      props.listInit,
      props.translation,
      props.keyText,
      props.keyValue
    ).get())

    const propSelected = useWatch(selected, () => selected.value, ['init'])
    const transition = ref('next')

    useAdmin('d-tab-picker', context)

    return {
      propList,
      propSelected,
      transition,

      bindTab: attrTab({
        props,
        items: {
          list: propList,
          listInit: false
        }
      }),
      onClick: ({
        direction,
        value
      }) => {
        transition.value = direction
        propSelected.value = value
      }
    }
  }
}
</script>

<style lang="scss"/>
