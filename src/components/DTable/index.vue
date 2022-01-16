<template>
  <table :class="classList" class="d-table">
    <tr class="d-table__headers">
      <th v-if="checkbox" class="d-table__checkbox">
        <div class="d-table__header__item">
          <d-checkbox
            :ref="el => setCheckbox('all', el)"
            name="all"
            @on-input="onCheckbox"
          />
        </div>
      </th>
      <th
        v-for="{align, attrs, sort, text, value} in propHeaders"
        :key="value"
        v-bind="attrs"
        class="d-table__header"
        :align="align"
        :data-value="value"
      >
        <div class="d-table__header__item">
          <span class="d-table__header__text">{{ text }}</span>
          <d-button
            v-if="sort"
            v-bind="bindButton"
            class="d-table__header__sort"
            :class="{'status-sort': propSort === value}"
            :value="value"
            :icon-turn="propSort === value && propDest === -1"
            @on-click="onSort"
          />
        </div>
      </th>
    </tr>
    <tr
      v-for="(item, key) in propItems"
      :key="item?.id || key"
      class="d-table__items"
    >
      <td v-if="checkbox" class="d-table__checkbox">
        <div class="d-table__header__item">
          <d-checkbox
            :ref="el => setCheckbox(key, el, item)"
            :name="`item-${key}`"
            @on-input="onCheckbox"
          />
        </div>
      </td>
      <td
        v-for="{align, attrs, value} in propHeaders"
        :key="value"
        v-bind="attrs"
        class="d-table__item"
        :align="align"
      >
        <template v-if="value in $slots">
          <slot :name="value" :item="item"/>
        </template>
        <template v-else>{{ item[value] }}</template>
      </td>
    </tr>
  </table>
</template>

<script>
import DButton from '@/components/DButton'
import DCheckbox from '@/components/DCheckbox'
import { props } from './props'
import { computed } from 'vue'
import attrButton from '@/components/DButton/attrButton'
import useAdmin from '@/uses/useAdmin'
import useHeaders from './useHeaders'
import useList from './useList'

export default {
  name: 'DTable',
  components: {
    DButton,
    DCheckbox
  },
  props,
  emits: ['on-input', 'on-sort'],
  setup (props, context) {
    const propHeaders = useHeaders(props)
    const {
      checkboxItems,
      propSort,
      propDest,
      propItems,
      setCheckbox,
      onCheckbox,
      onSort
    } = useList(props, context)

    const bindButton = attrButton({
      props,
      attrs: {
        appearance: 'text',
        size: 'small',
        shape: 'pill',
        adaptive: 'icon',
        lowercase: true,
        dense: true,
        icon: props.iconArrowDownWard
      }
    })

    const classList = computed(() => {
      return {
        [`size-${props.size}`]: props.size,
        'option-sticky': props.sticky,
        'option-dense': props.dense
      }
    })

    useAdmin('d-table', context)

    return {
      checkboxItems,
      propSort,
      propDest,
      propHeaders,
      propItems,
      bindButton,
      classList,
      setCheckbox,
      onCheckbox,
      onSort
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-table {
  @include tableInit
}
</style>
