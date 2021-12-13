<template>
  <form
    :class="classList"
    :method="method"
    autocomplete="off"
  >
    <div class="d-form__fields">
      <div
        v-for="section in fields"
        :key="section.section"
        class="d-form__section"
        :class="section?.class"
      >
        <div v-if="section?.text" class="d-form__title" v-html="section.text"/>
        <template v-if="section?.fields">
          <template
            v-for="item in section.fields"
            :key="item.name"
          >
            <div v-if="item?.html" class="d-form__html" v-html="item.html"/>
            <div v-else-if="item?.subtitle" class="d-form__subtitle" v-html="item.subtitle"/>
            <div v-else-if="item?.line" class="d-form__line"/>
            <div v-else-if="item?.space" class="d-form__space"/>
            <component
              v-else-if="item?.name"
              :is="item?.component || 'd-input'"
              v-bind="item"
              class="d-form__item"
            />
          </template>
        </template>
      </div>
    </div>
    <d-actions :bar="bar"/>
  </form>
</template>

<script>
import DActions from '@/components/DActions'
import DCheckbox from '@/components/DCheckbox'
import DDate from '@/components/DDate'
import DFile from '@/components/DFile'
import DInput from '@/components/DInput'
import DSelect from '@/components/DSelect'
import DSlider from '@/components/DSlider'
import DTextarea from '@/components/DTextarea'
import DTime from '@/components/DTime'
import { props } from './props'
import { computed } from 'vue'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DForm',
  components: {
    DActions,
    DCheckbox,
    DDate,
    DFile,
    DInput,
    DSelect,
    DSlider,
    DTextarea,
    DTime
  },
  props,
  emits: ['on-submit'],
  setup (props, context) {
    const classList = computed(() => {
      return {
        'd-form': true
      }
    })

    useAdmin('d-form', context)

    return {
      classList
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-form {
  @include formInit;
}
</style>
