<template>
  <div :class="classList">
    <div class="d-navigation__body">
      <slot/>
      <d-motion-axis
        :selected="contentSelected || 'list'"
        :transition="directions"
      >
        <template v-slot:list>
          <slot name="list"/>
          <d-list
            v-bind="bindList"
            :list="propList"
            :selected="propSelected"
            @on-click="set"
          />
        </template>
        <template
          v-for="item in propSlots"
          :key="item.index"
          v-slot:[item.index]
        >
          <div v-if="back" class="d-navigation__item">
            <d-list-item
              v-bind="bindList"
              :text="item.text"
              :icon="iconChevronLeft"
              @on-click="set"
            />
          </div>
          <div class="d-navigation__content">
            <slot :name="item.index" :set="set"/>
          </div>
        </template>
      </d-motion-axis>
    </div>
  </div>
</template>

<script>
import DList from '@/components/DList'
import DListItem from '@/components/DListItem'
import DMotionAxis from '@/components/DMotionAxis'
import { props } from './props'
import { computed, ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useBar from './useBar'
import useSelected from '@/components/DAppBar/useSelected'

export default {
  name: 'DNavigation',
  components: {
    DList,
    DListItem,
    DMotionAxis
  },
  props,
  setup (props, context) {
    const app = ref(undefined)

    const {
      propList,
      bindList
    } = useBar(props)

    const {
      propSelected,
      propSlots,
      contentSelected,
      set
    } = useSelected(
      app,
      props,
      context,
      [propList]
    )

    const directions = computed(() => contentSelected.value ? 'next' : 'back')
    const classList = computed(() => {
      return {
        'd-navigation': true
      }
    })

    useAdmin('d-navigation', context)

    return {
      propList,
      propSelected,
      propSlots,
      contentSelected,
      directions,
      bindList,
      classList,
      set
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-navigation {
  @include navigationInit;
}
</style>
