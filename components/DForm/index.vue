<template>
  <form
    ref="form"
    :method="method"
    autocomplete="off"
    class="d-form"
    novalidate
    @submit.prevent.stop="onSubmit"
  >
    <div class="d-form__fields">
      <div
        v-for="{binds, class: className, fields, section, text} in propFields"
        v-bind="binds"
        :key="section"
        :class="className"
        class="d-form__section"
      >
        <div v-if="text" class="d-form__title" v-html="text"/>
        <template v-if="fields">
          <template
            v-for="item in (fields)"
            :key="item.name"
          >
            <div v-if="item?.html" class="d-form__html" v-html="item.html"/>
            <div v-else-if="item?.subtitle" class="d-form__subtitle" v-html="item.subtitle"/>
            <div v-else-if="item?.line" class="d-form__line"/>
            <div v-else-if="item?.space" class="d-form__space"/>
            <component
              v-else-if="item?.name"
              :ref="(el) => { if (el) items[item.name] = { item, el } }"
              :is="item?.component || 'd-input'"
              v-bind="item"
              class="d-form__item"
              :value="values?.[item.name]"
              :readonly="readonly"
              :disabled="disabled"
            />
          </template>
        </template>
      </div>
    </div>
    <d-alert v-if="alert.description" v-bind="alert"/>
    <d-actions :bar="bar">
      <template v-slot:default>
        <d-button
          v-bind="submit"
          :readonly="readonly"
          :disabled="disabled"
          :progress="propProgress"
        />
      </template>
    </d-actions>
  </form>
</template>

<script>
import DActions from '../DActions'
import DAlert from '../DAlert'
import DAvatar from '../DAvatar'
import DButton from '../DButton'
import DCheckbox from '../DCheckbox'
import DDate from '../DDate'
import DFile from '../DFile'
import DInput from '../DInput'
import DSelect from '../DSelect'
import DSlider from '../DSlider'
import DTextarea from '../DTextarea'
import DTime from '../DTime'
import { props } from './props'
import { computed, ref } from 'vue'
import useAdmin from '../../uses/useAdmin'
import useFields from './useFields'
import useValidity from './useValidity'

export default {
  name: 'DForm',
  components: {
    DActions,
    DAlert,
    DAvatar,
    DButton,
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
  emits: ['on-submit', 'on-validity'],
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
      request
    })

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

          const request = await fetch(props.ajax, props.ajax.toString().match(/http:\/\/localhost:/) ? undefined : init)
          const json = await request.json()

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
