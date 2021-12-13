<template>
  <div :class="classList">
    <d-top
      v-if="multiple && propSwitchDate"
      class="d-date-picker__management"
      @on-click="onOk"
    />
    <div class="d-date-picker__head">
      <div class="d-date-picker__title">{{ text[multiple ? 'Selected range' : 'Select date'] }}</div>
      <div class="d-date-picker__selected">
        <div class="d-date-picker__spacer" v-html="textValue"/>
        <d-button
          :icon="iconEdit"
          :icon-active="iconCalendar"
          :active="!propSwitchDate"
          appearance="text"
          shape="pill"
          @click="onSwitch"
        />
      </div>
    </div>
    <div class="d-date-picker__content">
      <d-motion-transform
        ref="motion"
        :open="!propSwitchDate"
        adaptive="panel"
        :animation-show="false"
        :auto-close="false"
        :bottom="true"
      >
        <template v-slot:head>
          <div class="d-date-picker__body">
            <component
              :is="multiple ? 'd-calendar-multiple' : 'd-calendar-select'"
              :value="propValue"
              :min="min"
              :max="max"
              :locales="locales"
              :shape="shape"
              :adaptive="adaptive"
              @on-input="onSelected"
            />
          </div>
        </template>
        <template v-slot:default>
          <div v-if="!propSwitchDate" class="d-date-picker__input">
            <d-input
              ref="inputIn"
              class="d-date-picker__input__item"
              type="date"
              :text="text[multiple ? 'Depart' : 'Enter date']"
              :value="valueFocus"
              :cancel="false"
              @on-change="onInput"
            />
            <d-input
              v-if="multiple"
              ref="inputOut"
              class="d-date-picker__input__item"
              type="date"
              :text="text.Return"
              :value="valueSecondary"
              :cancel="false"
              @on-change="onInput"
            />
          </div>
        </template>
      </d-motion-transform>
      <d-actions
        v-if="!multiple || !propSwitchDate"
        class="d-date-picker__management"
        @onClick="onOk"
      />
    </div>
  </div>
</template>

<script>
import DActions from '@/components/DActions'
import DButton from '@/components/DButton'
import DCalendarMultiple from '@/components/DCalendarMultiple'
import DCalendarSelect from '@/components/DCalendarSelect'
import DInput from '@/components/DInput'
import DMotionTransform from '@/components/DMotionTransform'
import DTop from '@/components/DTop'
import { props } from './props'
import { computed, ref, toRefs } from 'vue'
import Translation from '@/classes/Translation'
import useAdmin from '@/uses/useAdmin'
import useDateTime from '@/uses/useDateTime'
import useWatch from '@/uses/useWatch'
import useColor from '@/uses/useColor'

export default {
  name: 'DDatePicker',
  components: {
    DActions,
    DInput,
    DButton,
    DCalendarMultiple,
    DCalendarSelect,
    DMotionTransform,
    DTop
  },
  props,
  setup (props, context) {
    const { switchDate } = toRefs(props)

    const inputIn = ref(undefined)
    const inputOut = ref(undefined)

    const {
      propValue,
      valueFocus,
      valueSecondary,
      objectFocus,
      objectSecondary,
      resetDate,
      emit
    } = useDateTime(
      'date',
      props,
      context
    )

    const palette = useColor(props)
    const text = Translation.getByList([
      'Cancel',
      'Depart',
      'End',
      'Enter date',
      'Ok',
      'Return',
      'Save',
      'Select date',
      'Selected range',
      'Start'
    ])
    const textValue = computed(() => {
      if (props.multiple) {
        const className = 'd-date-picker__null'
        let start = `<span class="${className}">${text.Start}</span>`
        let end = `<span class="${className}">${text.End}</span>`
        let minus = `<span class="${className}">-</span>`

        if (valueFocus.value) {
          start = objectFocus.value.toLocaleString(undefined, {
            month: 'short',
            day: 'numeric'
          })
        }

        if (valueSecondary.value) {
          minus = '-'
          end = objectSecondary.value.toLocaleString(undefined, {
            month: 'short',
            day: 'numeric'
          })
        }

        return `${start} ${minus} ${end}`
      } else {
        return objectFocus.value.toLocaleString(undefined, {
          month: 'short',
          weekday: 'short',
          day: 'numeric'
        })
      }
    })

    const propSwitchDate = useWatch(switchDate, data => {
      data.value = switchDate.value
    })

    const classList = computed(() => {
      return {
        'd-date-picker': true,
        [`adaptive-${props.adaptive}`]: props.adaptive,
        'option-multiple': props.multiple,
        ...palette.value
      }
    })

    const onSwitch = () => {
      propSwitchDate.value = !propSwitchDate.value
    }
    const onSelected = ({ value }) => {
      propValue.value = value
      emit()
    }
    const onInput = event => {
      console.log('event', event)
      if (event.validation) {
        if (props.multiple) {
          const valueIn = inputIn.value?.propValue
          const valueOut = inputOut.value?.propValue

          if (
            valueIn &&
            valueOut
          ) {
            propValue.value = [valueIn, valueOut].sort()
          } else if (valueIn) {
            propValue.value = [valueIn]
          } else {
            propValue.value = undefined
          }
        } else {
          propValue.value = inputIn.value.propValue
        }
        emit()
      }
    }
    const onOk = ({ value }) => {
      switch (value) {
        case 'cancel':
          resetDate()
          emit()
          break
        case 'ok':
          emit('on-change')
          break
      }
    }

    useAdmin('d-date-picker', context)

    return {
      inputIn,
      inputOut,
      propValue,
      valueFocus,
      valueSecondary,
      text,
      textValue,
      propSwitchDate,
      classList,
      onSwitch,
      onSelected,
      onInput,
      onOk
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-date-picker {
  @include datePickerInit;
}
</style>
