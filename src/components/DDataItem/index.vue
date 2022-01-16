<template>
  <div v-bind="binds" class="d-data-item" :data-value="value">
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
        <div class="d-data-item__parameter">
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

<script>
import DIcon from '@/components/DIcon'
import DProgress from '@/components/DProgress'
import { props } from './props'
import { computed } from 'vue'
import attrProgress from '@/components/DProgress/attrProgress'
import useAdmin from '@/uses/useAdmin'
import useIcon from './useIcon'

export default {
  name: 'DDataItem',
  components: {
    DIcon,
    DProgress
  },
  props,
  setup (props, context) {
    const propText = computed(() => {
      const text = props.item?.name || props.item?.text || props.text

      return props.underline
        ? text.toString().replace(
          new RegExp(`(${props.underline})`, 'ig'),
          subtext => `<span class="d-data-item__underline">${subtext}</span>`
        )
        : text
    })

    const {
      isProgress,
      bindProgress
    } = attrProgress(props)

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
          'option-border': props.border
        },
        style: {
          '--di-background-color': typeof props.backgroundColor === 'string' ? props.backgroundColor : null,
          '--di__tx-column': props.column
        }
      }
    })

    useAdmin('d-data-item', context)

    return {
      propText,
      isProgress,
      bindIcon,
      bindProgress,
      binds
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
