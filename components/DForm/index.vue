<template>
  <form
    ref="form"
    :method="method"
    autocomplete="off"
    class="d-form"
    novalidate
    @submit.prevent.stop="onSubmit"
  >
    <div :class="classFields" class="d-form__fields">
      <div
        v-for="{binds, class: className, fields, section} in propFields"
        v-bind="binds"
        :key="section"
        :class="className"
        class="d-form__section"
      >
        <template v-if="fields">
          <template
            v-for="item in (fields)"
            :key="item.name"
          >
            <div v-if="item?.html" :class="item?.class" class="d-form__html" v-html="item.html"/>
            <div v-else-if="item?.title" :class="item?.class" class="d-form__title" v-html="item.title"/>
            <div v-else-if="item?.subtitle" :class="item?.class" class="d-form__subtitle" v-html="item.subtitle"/>
            <div v-else-if="item?.line" :class="item?.class" class="d-form__line"/>
            <div v-else-if="item?.space" :class="item?.class" class="d-form__space"/>
            <component
              :is="item?.component || 'd-input'"
              v-else-if="item?.name"
              :ref="(el) => { if (el) items[item.name] = { item, el } }"
              :disabled="disabled"
              :readonly="readonly"
              :value="values?.[item.name]"
              class="d-form__item"
              v-bind="item"
            />
          </template>
        </template>
      </div>
    </div>
    <div v-if="alert.description" class="d-form__alert">
      <d-alert v-bind="alert"/>
    </div>
    <d-actions
      v-if="submit || bar"
      :bar="bar"
      v-bind="actionsAttrs"
      @on-click="onBar"
    >
      <template v-slot:default>
        <d-button
          v-if="submit"
          :disabled="disabled"
          :progress="propProgress"
          :readonly="readonly"
          v-bind="submit"
        />
      </template>
    </d-actions>
  </form>
</template>

<script>
import DActions from '../DActions'
import DAlert from '../DAlert'
import DButton from '../DButton'
import DCheckbox from '../DCheckbox'
import DInput from '../DInput'
import DSelect from '../DSelect'
import { props } from './props'
import { computed, defineAsyncComponent, ref } from 'vue'
import useAdmin from '../../uses/useAdmin'
import useFields from './useFields'
import useValidity from './useValidity'
import Api from '../../classes/Api'

export default {
  name: 'DForm',
  components: {
    DActions,
    DAlert,
    DAvatar: defineAsyncComponent(() => import('../DAvatar')),
    DButton,
    DCheckbox,
    DDate: defineAsyncComponent(() => import('../DDate')),
    DFile: defineAsyncComponent(() => import('../DFile')),
    DInput,
    DSelect,
    DSlider: defineAsyncComponent(() => import('../DSlider')),
    DTextarea: defineAsyncComponent(() => import('../DTextarea')),
    DTime: defineAsyncComponent(() => import('../DTime'))
  },
  props,
  emits: ['on-bar', 'on-submit', 'on-validity'],
  setup (props, context) {
    const form = ref(undefined)

    const {
      propFields,
      propProgress,
      propValues,
      files,
      items,
      getBody,
      update
    } = useFields(props)

    const {
      propValidationMessage,
      success,
      error,
      checkValidity,
      setValidity
    } = useValidity(
      form,
      items,
      context
    )

    const alert = computed(() => {
      return {
        description: error.value || success.value,
        palette: error.value ? 'error' : 'success',
        animationShow: true,
        icon: error.value ? props.iconError : props.iconSuccess
      }
    })

    const emit = (request = undefined) => context.emit('on-submit', {
      items: items.value,
      values: propValues.value,
      files: files.value,
      body: getBody(),
      success: success.value,
      error: error.value,
      validationMessage: propValidationMessage.value,
      request,
      setValidity
    })

    const onBar = event => context.emit('on-bar', event)
    const onSubmit = async () => {
      if (checkValidity()) {
        update()

        if (props.ajax) {
          propProgress.value = true

          const init = {
            method: props.method,
            body: getBody(),
            ...props.request
          }

          const json = await Api.response(
            props.ajax,
            window.location.origin.match(/http:\/\/localhost:/) ? undefined : init
          )

          setValidity(json)
          emit(json)

          propProgress.value = false
        } else {
          emit()
        }
      }
    }

    useAdmin('d-form', context)

    return {
      form,
      items,
      propFields,
      propProgress,
      propValues,
      alert,
      update,
      setValidity,
      onBar,
      onSubmit
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
