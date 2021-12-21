<template>
  <form
    ref="form"
    :class="classList"
    :method="method"
    autocomplete="off"
    novalidate
    @submit.prevent.stop="onSubmit"
  >
    <div class="d-form__fields">
      <div
        v-for="section in propFields"
        v-bind="section?.binds"
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
      <template v-slot:bar>
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
import DActions from '@/--components/DActions'
import DAlert from '@/--components/DAlert'
import DButton from '@/components/DButton'
import DCheckbox from '@/--components/DCheckbox'
import DDate from '@/--components/DDate'
import DFile from '@/--components/DFile'
import DInput from '@/--components/DInput'
import DSelect from '@/--components/DSelect'
import DSlider from '@/--components/DSlider'
import DTextarea from '@/--components/DTextarea'
import DTime from '@/--components/DTime'
import { props } from './props'
import { computed, ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useColor from '@/uses/useColor'
import useFields from './useFields'
import useValidity from './useValidity'

export default {
  name: 'DForm',
  components: {
    DActions,
    DAlert,
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

    const palette = useColor(props)
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

    const classList = computed(() => {
      return {
        'd-form': true,
        ...palette.value
      }
    })

    useAdmin('d-form', context)

    return {
      form,
      items,
      propFields,
      propProgress,
      propValues,
      alert,
      classList,
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
