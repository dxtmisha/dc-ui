<template>
  <div :class="classList" class="d-date-picker">
    <d-top
      v-if="multiple && propSwitchDate"
      v-bind="topAttrs"
      class="d-date-picker__management"
      @on-click="onOk"
    />

    <div class="d-date-picker__head">
      <div class="d-date-picker__title">{{ text[multiple ? 'Selected range' : 'Select date'] }}</div>
      <div class="d-date-picker__selected">
        <div class="d-date-picker__spacer" v-html="textValue"/>
        <d-button
          :active="!propSwitchDate"
          :icon="iconEdit"
          :icon-active="iconCalendar"
          appearance="text"
          @click="onSwitch"
        />
      </div>
    </div>

    <div class="d-date-picker__content">
      <d-motion-transform
        ref="motion"
        :animation-show="false"
        :auto-close="false"
        :bottom="true"
        :open="!propSwitchDate"
        adaptive="panel"
      >
        <template v-slot:head>
          <div class="d-date-picker__body">
            <component
              :is="multiple ? 'd-calendar-multiple' : 'd-calendar-select'"
              v-bind="bindCalendar"
              :value="propValue"
              @on-input="onSelected"
            />
          </div>
        </template>

        <template v-slot:default>
          <div v-if="!propSwitchDate" class="d-date-picker__input">
            <d-input
              ref="inputIn"
              v-bind="inputAttrs"
              :cancel="false"
              :text="text[multiple ? 'Depart' : 'Enter date']"
              :value="valueFocus"
              class="d-date-picker__input__item"
              type="date"
              @on-change="onInput"
            />
            <d-input
              ref="inputOut"
              v-if="multiple"
              v-bind="inputAttrs"
              :cancel="false"
              :text="text.Return"
              :value="valueSecondary"
              class="d-date-picker__input__item"
              type="date"
              @on-change="onInput"
            />
          </div>
        </template>
      </d-motion-transform>

      <d-actions
        v-if="!multiple || !propSwitchDate"
        v-bind="actionsAttrs"
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
import attrCalendarSelect from '@/components/DCalendarSelect/attrCalendarSelect'
import useAdmin from '@/uses/useAdmin'
import useWatch from '@/uses/useWatch'
import useValue from './useValue'

export default {
  name: 'DDatePicker',
  components: {
    DActions,
    DButton,
    DCalendarMultiple,
    DCalendarSelect,
    DInput,
    DMotionTransform,
    DTop
  },
  props,
  setup (props, context) {
    const { switchDate } = toRefs(props)

    const inputIn = ref(undefined)
    const inputOut = ref(undefined)

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

    const {
      propValue,
      valueFocus,
      valueSecondary,
      textValue,
      onSelected,
      onInput,
      onOk
    } = useValue(
      inputIn,
      inputOut,
      props,
      context,
      text
    )

    const propSwitchDate = useWatch(switchDate, () => switchDate.value, ['init'])

    const bindCalendar = attrCalendarSelect({ props })
    const classList = computed(() => {
      return {
        [`adaptive-${props.calendarAdaptive}`]: props.calendarAdaptive,
        'option-multiple': props.multiple
      }
    })

    const onSwitch = () => {
      propSwitchDate.value = !propSwitchDate.value
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
      bindCalendar,
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
