import { computed } from 'vue'
import Translation from '../../classes/Translation'

export default function usePagination (props, bindButton) {
  const maxPage = computed(() => Math.ceil(props.count / props.rows))
  const translations = Translation.getByList([
    '[item] of [count]',
    'Back',
    'First',
    'Last',
    'Next',
    'Show more'
  ])

  const info = computed(() => {
    const max = props.value * props.rows
    const item = (max - props.rows + 1) + '-' + (max < props.count ? max : props.count)

    return translations['[item] of [count]']
      .toString()
      .replace('[item]', item)
      .replace('[count]', props.count)
  })

  const more = computed(() => {
    return {
      ...bindButton,
      text: translations['Show more'],
      title: translations['Show more'],
      value: props.value + 1,
      hide: props.value === maxPage.value
    }
  })

  const back = computed(() => {
    return {
      ...bindButton,
      text: translations.Back,
      title: translations.Back,
      icon: props.iconChevronLeft,
      value: props.value - 1,
      disabled: props.value <= 1
    }
  })

  const next = computed(() => {
    return {
      ...bindButton,
      text: translations.Next,
      title: translations.Next,
      icon: props.iconChevronRight,
      value: props.value + 1,
      disabled: props.value >= maxPage.value
    }
  })

  const first = computed(() => {
    return {
      ...bindButton,
      text: translations.First,
      title: translations.First,
      icon: props.iconFirst,
      value: 1,
      disabled: props.value <= 1
    }
  })

  const last = computed(() => {
    return {
      ...bindButton,
      text: translations.Last,
      title: translations.Last,
      icon: props.iconLast,
      value: maxPage.value,
      disabled: props.value >= maxPage.value
    }
  })

  const pagination = computed(() => {
    const data = []
    let length = props.value - Math.floor(props.length / 2)

    if (length + props.length > maxPage.value) {
      length = maxPage.value - props.length + 1
    }

    if (length < 1) {
      length = 1
    }

    for (let i = length; i < length + props.length; i++) {
      if (i <= maxPage.value) {
        data.push({
          ...bindButton,
          text: i,
          value: i,
          selected: props.value === i
        })
      }
    }

    return data
  })

  return {
    maxPage,
    info,
    more,
    back,
    next,
    first,
    last,
    pagination
  }
}
