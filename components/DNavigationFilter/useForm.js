import Translation from '../../classes/Translation'
import { computed } from 'vue'

export default function useForm (props) {
  const translations = Translation.getByList([
    'Clear Filters',
    'Show results'
  ])

  return computed(() => {
    return {
      bar: [
        {
          class: 'd-navigation-filter__clear window-static',
          ellipsis: true,
          text: translations['Clear Filters'],
          type: 'button',
          value: 'clear'
        }
      ],
      submit: {
        text: translations['Show results'],
        class: 'd-navigation-filter__submit'
      },
      actionsAttrs: {
        align: 'center',
        buttonAdaptive: 'block'
      },
      ...(props.formAttrs || {})
    }
  })
}
