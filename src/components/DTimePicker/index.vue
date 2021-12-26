<template>
  <div :class="classList" class="d-time-picker">
    <div class="d-time-picker__title">{{ text['Select Time'] }}</div>

    <div class="d-time-picker__content">
      <div class="d-time-picker__input">
        <div class="d-time-picker__field">
          <d-input
            ref="hour"
            v-bind="bindInput"
            :helper-message="textHour"
            :max="hoursMax"
            :min="hoursMin"
            :readonly="propSwitchClock"
            :selected="typeSelected === 'hour'"
            :value="hours12"
            name="hour"
            @on-input="onInput"
          />
          <span class="d-time-picker__colon">:</span>
          <d-input
            ref="minute"
            v-bind="bindInput"
            :helper-message="textMinute"
            :max="minutesMax"
            :min="minutesMin"
            :readonly="propSwitchClock"
            :selected="typeSelected === 'minute'"
            :value="minutes"
            name="minute"
            @on-input="onInput"
          />
          <d-button-group
            v-if="type12"
            v-bind="bindAmPm"
            class="d-time-picker__group"
            @onInput="onAmPm"
          />
        </div>
      </div>
      <d-motion-transform
        :animation-show="false"
        :auto-close="false"
        :bottom="true"
        :open="!propSwitchClock"
        adaptive="panel"
        class="d-time-picker__panel"
      >
        <template v-slot:head>
          <div class="d-time-picker__clock-dial">
            <d-clock-face
              :max="clockMax"
              :min="clockMin"
              :selected="clockSelect"
              :type="clockType"
              @on-input="onInput"
              @on-change="onChange"
            />
          </div>
        </template>
      </d-motion-transform>
    </div>

    <d-actions v-bind="bindActions" class="d-time-picker__button" @onClick="onOk"/>
  </div>
</template>

<script>
import DActions from '@/components/DActions'
import DButtonGroup from '@/components/DButtonGroup'
import DClockFace from '@/components/DClockFace'
import DInput from '@/components/DInput'
import DMotionTransform from '@/components/DMotionTransform'
import { props } from './props'
import { computed, ref, toRefs } from 'vue'
import useActions from './useActions'
import useAdmin from '@/uses/useAdmin'
import useAmPm from './useAmPm'
import useDateTime from '@/uses/useDateTime'
import useInput from './useInput'
import useText from './useText'
import useWatch from '@/uses/useWatch'

export default {
  name: 'DTimePicker',
  components: {
    DActions,
    DButtonGroup,
    DClockFace,
    DInput,
    DMotionTransform
  },
  props,
  emits: ['on-input', 'on-change'],
  setup (props, context) {
    const { switchClock } = toRefs(props)

    const hour = ref(undefined)
    const minute = ref(undefined)

    const typeSelected = ref('hour')
    const propSwitchClock = useWatch(switchClock, () => switchClock.value, ['init'])

    const {
      text,
      textHour,
      textMinute
    } = useText(props, propSwitchClock)

    const {
      propFormat,
      type12,
      hours12,
      hoursMin,
      hoursMax,
      amPm,
      minutes,
      minutesMin,
      minutesMax,
      getItemFocus,
      getMaxHours,
      getHours,
      updateDate,
      resetDate,
      emit
    } = useDateTime('time', props, context)

    const clockMin = computed(() => typeSelected.value === 'hour' ? hoursMin.value : minutesMin.value)
    const clockMax = computed(() => typeSelected.value === 'hour' ? hoursMax.value : minutesMax.value)
    const clockSelect = computed(() => parseInt(typeSelected.value === 'hour' ? hours12.value : minutes.value))
    const clockType = computed(() => typeSelected.value === 'hour' ? propFormat.value : 'minute')

    const getTypeSelected = () => typeSelected.value === 'hour' ? hour.value : minute.value

    const toSelect = (focus = false, select = true) => {
      const input = getTypeSelected()?.$refs.input

      if (focus) {
        input.focus()
      }

      if (select) {
        input.select()
      }
    }

    const {
      bindInput,
      onInput,
      onChange
    } = useInput(
      typeSelected,
      propSwitchClock,
      type12,
      amPm,
      getItemFocus,
      getMaxHours,
      updateDate,
      toSelect,
      emit
    )

    const {
      bindAmPm,
      onAmPm
    } = useAmPm(
      text,
      amPm,
      getItemFocus,
      getHours,
      updateDate,
      emit
    )

    const {
      bindActions,
      onOk
    } = useActions(
      props,
      propSwitchClock,
      resetDate,
      emit,
      toSelect
    )

    const classList = computed(() => {
      return { 'status-switch-clock': propSwitchClock.value }
    })

    useAdmin('d-time-picker', context)

    return {
      hour,
      minute,
      text,
      textHour,
      textMinute,
      typeSelected,
      propSwitchClock,
      type12,
      hours12,
      hoursMin,
      hoursMax,
      amPm,
      minutes,
      minutesMin,
      minutesMax,
      clockSelect,
      clockType,
      clockMin,
      clockMax,
      bindInput,
      bindAmPm,
      bindActions,
      classList,
      onInput,
      onChange,
      onAmPm,
      onOk
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-time-picker {
  @include timePickerInit;
}
</style>
