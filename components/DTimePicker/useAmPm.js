import { computed } from 'vue'

export default function useAmPm (
  text,
  amPm,
  getItemFocus,
  getHours,
  updateDate,
  emit
) {
  const bindAmPm = computed(() => {
    return {
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
      selected: amPm.value,
      axis: 'y',
      buttonAppearance: 'outlined',
      buttonLowercase: true
    }
  })

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

  return {
    bindAmPm,
    onAmPm
  }
}
