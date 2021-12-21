<template>
  <div :class="classList">
    <div class="d-time-picker__title">{{ text['Select Time'] }}</div>
    <div class="d-time-picker__content">
      <div class="d-time-picker__input">
        <div class="d-time-picker__field">
          <d-input
            ref="hour"
            v-bind="bindInput"
            name="hour"
            :value="hours12"
            :min="hoursMin"
            :max="hoursMax"
            :selected="typeSelected === 'hour'"
            :readonly="propSwitchClock"
            :helper-message="textHour"
            @on-input="onInput"
          />
          <span class="d-time-picker__colon">:</span>
          <d-input
            ref="minute"
            v-bind="bindInput"
            name="minute"
            :value="minutes"
            :min="minutesMin"
            :max="minutesMax"
            :selected="typeSelected === 'minute'"
            :readonly="propSwitchClock"
            :helper-message="textMinute"
            @on-input="onInput"
          />
          <d-button-group
            v-if="type12"
            v-bind="bindAmPm"
            :selected="amPm"
            @onInput="onAmPm"
          />
        </div>
      </div>
      <d-motion-transform
        class="d-time-picker__panel"
        :open="!propSwitchClock"
        adaptive="panel"
        :animation-show="false"
        :auto-close="false"
        :bottom="true"
      >
        <template v-slot:head>
          <div class="d-time-picker__clock-dial">
            <d-clock-face
              :select="clockSelect"
              :min="clockMin"
              :max="clockMax"
              :type="clockType"
              @on-input="onInput"
              @on-change="onChange"
            />
          </div>
        </template>
      </d-motion-transform>
    </div>
    <d-actions
      v-bind="bindActions"
      @onClick="onOk"
      @onManagement="onSwitchClock"
    />
  </div>
</template>

<script>
import DActions from '@/--components/DActions'
import DButtonGroup from '@/--components/DButtonGroup'
import DClockFace from '@/components/DClockFace'
import DInput from '@/components/DInput'
import DMotionTransform from '@/components/DMotionTransform'
import { props } from './props'
import { computed, ref, toRefs } from 'vue'
import Translation from '@/classes/Translation'
import useAdmin from '@/uses/useAdmin'
import useDateTime from '@/uses/useDateTime'
import useWatch from '@/uses/useWatch'
import useColor from '@/uses/useColor'

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

    const palette = useColor(props)
    const hour = ref(undefined)
    const minute = ref(undefined)
    const text = computed(() => {
      const text = Translation.getByList([
        'AM',
        'Cancel',
        'Hour',
        'Minute',
        'Ok',
        'PM',
        'Select Time'
      ])

      if (Intl && 'DisplayNames' in Intl) {
        const display = new Intl.DisplayNames(props.locales, { type: 'dateTimeField' })
        const code = display.of('dayPeriod').split('/')

        text.AM = code[0]
        text.PM = code[1]
      }

      return text
    })

    const typeSelected = ref('hour')
    const propSwitchClock = useWatch(switchClock, data => {
      data.value = switchClock.value
    })

    const textHour = computed(() => propSwitchClock.value ? undefined : text.value.Hour)
    const textMinute = computed(() => propSwitchClock.value ? undefined : text.value.Minute)

    const
      {
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

    const classList = computed(() => {
      return {
        'd-time-picker': true,
        'status-switch-clock': propSwitchClock.value,
        ...palette.value
      }
    })

    const onClickField = event => {
      typeSelected.value = event.target.name

      if (!propSwitchClock.value) {
        toSelect()
      }
    }
    const onInput = event => {
      const isHour = event.name === 'hour' || ['12', '24'].indexOf(event.clock) !== -1
      const max = isHour ? getMaxHours() : 59
      let value = parseInt(event.value) || 0

      if (
        value >= 0 &&
        value <= max
      ) {
        if (isHour) {
          if (type12.value && amPm.value === 'pm') {
            value += 12
          }

          getItemFocus().setHours(value)
        } else {
          getItemFocus().setMinutes(value)
        }

        updateDate()
        emit()
      }
    }
    const onChange = () => {
      if (typeSelected.value !== 'minute') {
        requestAnimationFrame(() => {
          typeSelected.value = 'minute'
          toSelect(true, false)
        })
      }
    }
    const onAmPm = ({ value }) => {
      if (amPm.value !== value) {
        let hour = parseInt(getHours())

        switch (value) {
          case 'am':
            hour -= 12
            break
          case 'pm':
            hour += 12
            break
        }

        getItemFocus().setHours(hour)
        updateDate()
        emit()
      }
    }
    const onSwitchClock = () => {
      propSwitchClock.value = !propSwitchClock.value

      if (!propSwitchClock.value) {
        toSelect(true)
      }
    }
    const onOk = ({ value }) => {
      switch (value) {
        case 'switch':
          onSwitchClock()
          break
        case 'cancel':
          resetDate()
          emit()
          break
        case 'ok':
          emit('on-change')
          break
      }
    }

    const bindInput = {
      on: { focus: onClickField },
      maxlength: 2,
      class: 'tp-field',
      type: 'number',
      appearance: 'basic',
      adaptive: 'block',
      align: 'center',
      size: 'interactive-display',
      cancel: false
    }
    const bindAmPm = computed(() => {
      return {
        class: 'd-time-picker__group',
        list: [
          {
            text: text.value.AM,
            value: 'am'
          },
          {
            text: text.value.PM,
            value: 'pm'
          }
        ],
        appearance: 'outlined',
        axis: 'y',
        landscape: true
      }
    })
    const bindActions = computed(() => {
      return {
        class: 'd-time-picker__button',
        barManagement: [{
          icon: props.iconSchedule,
          iconActive: props.iconSwitchActive,
          active: propSwitchClock.value,
          value: 'switch'
        }]
      }
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
      onClickField,
      onInput,
      onChange,
      onAmPm,
      onSwitchClock,
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
