<template>
  <div ref="breadcrumbs" :class="classList" class="d-breadcrumbs">
    <d-button
      v-if="propList.length > 1"
      :icon="iconChevronLeft"
      appearance="text"
      class="d-breadcrumbs__black"
      size="small"
      @click="onBlack"
    />
    <div
      v-for="item in propList"
      :key="item.value"
      class="d-breadcrumbs__item"
    >
      <d-icon class="d-breadcrumbs__separator" :icon="iconChevronRight"/>
      <a :href="item?.href" class="d-breadcrumbs__link a-static" @click="onClick($event, item)">
        <d-icon v-if="item?.icon" :icon="item.icon" class="d-breadcrumbs__icon"/>
        <span v-if="item?.text" class="d-breadcrumbs__text" v-html="item.text"/>
      </a>
    </div>
  </div>
</template>

<script>
import DButton from '../DButton'
import DIcon from '../DIcon'
import { props } from './props'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import List from '../../classes/List'
import useAdmin from '../../uses/useAdmin'

export default {
  name: 'DBreadcrumbs',
  components: {
    DButton,
    DIcon
  },
  props,
  setup (props, context) {
    const router = useRouter()
    const breadcrumbs = ref(undefined)
    const propList = computed(() => new List(
      props.list,
      props.listInit,
      props.translation,
      props.keyText,
      props.keyValue,
      false
    ).get())

    const classList = computed(() => {
      return {
        [`adaptive-${props.adaptive}`]: props.adaptive
      }
    })

    const onBlack = () => {
      breadcrumbs.value.querySelector('.d-breadcrumbs__item:nth-last-child(2) a')?.click()
    }
    const onClick = (event, item) => {
      if (item?.to) {
        event.preventDefault()
        router.push(item.to)
      }
    }

    useAdmin('d-breadcrumbs', context)

    return {
      breadcrumbs,
      propList,
      classList,
      onBlack,
      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-breadcrumbs {
  @include breadcrumbsInit;
}
</style>
