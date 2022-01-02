<template>
  <table class="d-table">
    <tr class="d-table__headers">
      <th v-if="checkbox">
        <d-checkbox
          :ref="el => setCheckbox('all', el)"
          name="all"
          @on-input="onCheckbox"
        />
      </th>
      <th
        v-for="header in propHeaders"
        :key="header.value"
        v-bind="header.attrs"
        class="d-table__header"
        :align="header.align || align"
        :data-value="header.value"
      >
        {{ header.text }}
        <d-button
          v-if="header.sort"
          v-bind="bindButton"
          :class="{'status-sort': propSort === header.value}"
          :value="header.value"
          :icon-turn="propSort === header.value && propDest === -1"
          @on-click="onSort"
        />
      </th>
    </tr>
    <tr
      v-for="(item, key) in propItems"
      :key="key"
      class="d-table__items"
    >
      <td v-if="checkbox">
        <d-checkbox
          :ref="el => setCheckbox(key, el, item)"
          :name="`item-${key}`"
          @on-input="onCheckbox"
        />
      </td>
      <td
        v-for="header in propHeaders"
        :key="header.value"
        v-bind="header.attrs"
        class="d-table__item"
        :align="header.align || align"
      >
        <template v-if="header.value in $slots">
          <slot :name="header.value" :item="item"/>
        </template>
        <template v-else>{{ item[header.value] }}</template>
      </td>
    </tr>
  </table>
</template>

<script>
import DButton from '@/components/DButton'
import DCheckbox from '@/components/DCheckbox'
import { props } from './props'
import attrButton from '@/components/DButton/attrButton'
import useAdmin from '@/uses/useAdmin'
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
    const {
      checkboxItems,
      propSort,
      propDest,
      propHeaders,
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

    useAdmin('d-table', context)

    return {
      checkboxItems,
      propSort,
      propDest,
      propHeaders,
      propItems,
      bindButton,
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
