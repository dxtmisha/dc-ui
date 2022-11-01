import { computed } from 'vue'
import Translation from '../../classes/Translation'

export default function useText (props, propSwitchClock) {
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
      try {
        const display = new Intl.DisplayNames(props.locales, { type: 'dateTimeField' })
        const code = display.of('dayPeriod').split('/')

        text.AM = code[0]
        text.PM = code[1]
      } catch (e) {
      }
    }

    return text
  })
  const textHour = computed(() => propSwitchClock.value ? undefined : text.value.Hour)
  const textMinute = computed(() => propSwitchClock.value ? undefined : text.value.Minute)

  return {
    text,
    textHour,
    textMinute
  }
}
