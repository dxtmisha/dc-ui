<template>
  <div class="d-pagination">
    <d-button
      v-if="showMore"
      v-bind="more"
      class="d-pagination__more"
      appearance="outlined"
      :shape="undefined"
      @on-click="onMore"
    />
    <div class="d-pagination__spacer"/>
    <template v-if="menu">
      <div class="d-pagination__text">{{ text['Rows per page'] }}</div>
      <div class="d-pagination__menu">
        <d-menu
          v-slot:default="{ classList, open, onClick }"
          :list="menu"
          :selected="rows"
          :readonly="true"
          @on-input="onRows"
        >
          <d-button
            v-bind="bindButton"
            :class="classList"
            :text="rows"
            :turn="open"
            appearance="outlined"
            :shape="undefined"
            adaptive="basic"
            :icon-trailing="iconArrowDown"
            @click="onClick"
          />
        </d-menu>
      </div>
    </template>
    <div v-if="showInfo" class="d-pagination__info">{{ info }}</div>
    <div class="d-pagination__navigation">
      <d-button v-bind="first" @on-click="onClick"/>
      <d-button v-bind="back" @on-click="onClick"/>
      <d-button
        v-for="page in pagination"
        :key="page.value"
        v-bind="page"
        @on-click="onClick"
      />
      <d-button v-bind="next" @on-click="onClick"/>
      <d-button v-bind="last" @on-click="onClick"/>
    </div>
  </div>
</template>

<script>
import DButton from '../DButton'
import DMenu from '../DMenu'
import { props } from './props'
import Translation from '../../classes/Translation'
import attrButton from '../DButton/attrButton'
import useAdmin from '../../uses/useAdmin'
import usePagination from './usePagination'

export default {
  name: 'DPagination',
  components: {
    DButton,
    DMenu
  },
  props,
  emits: ['on-click', 'on-more', 'on-rows'],
  setup (props, context) {
    const text = Translation.getByList(['Rows per page'])

    const bindButton = attrButton({
      props,
      attrs: {
        appearance: 'text',
        size: 'small',
        shape: 'pill',
        adaptive: 'icon',
        lowercase: true,
        dense: true
      }
    })

    const {
      maxPage,
      info,
      more,
      back,
      next,
      first,
      last,
      pagination
    } = usePagination(props, bindButton)

    const onClick = event => context.emit('on-click', event)
    const onMore = event => context.emit('on-more', event)
    const onRows = event => context.emit('on-rows', event)

    useAdmin('d-pagination', context)

    return {
      text,
      maxPage,
      info,
      more,
      back,
      next,
      first,
      last,
      pagination,
      bindButton,
      onClick,
      onMore,
      onRows
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-pagination {
  @include paginationInit;
}
</style>
