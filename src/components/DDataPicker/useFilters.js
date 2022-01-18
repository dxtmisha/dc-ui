import useWatch from '@/uses/useWatch'
import { computed, toRefs } from 'vue'
import forEach from '@/functions/forEach'
import getExp from '@/functions/getExp'
import isSelected from '@/functions/isSelected'

export default function useFilters (props, list, max) {
  const { filters } = toRefs(props)

  const filterCallback = item => {
    let all = 0
    let length = 0

    forEach(filters.value, (filter, index) => {
      let good = false

      if (index in item) {
        if (
          typeof filter !== 'string' ||
          !filter.match(/^(~|<|<=|=|=>|>|!)/)
        ) {
          good = isSelected(item[index], filter)
        } else {
          filter.replace(/^(~|<|<=|=|>=|>|!)([\s\S]+)/ig, (all, code, value) => {
            switch (code) {
              case '~':
                good = item[index].match(getExp(value))
                break
              case '<':
                good = item[index] < value
                break
              case '<=':
                good = item[index] <= value
                break
              case '=':
                good = item[index] = value
                break
              case '>=':
                good = item[index] >= value
                break
              case '>':
                good = item[index] > value
                break
              case '!':
                good = item[index] !== value
                break
            }
          })
        }
      }

      if (good) {
        all++
      }

      length++
    })

    return all === length
  }

  const propFilters = useWatch([filters, list], () => {
    return filters.value && list.value
      ? list.value.filter(typeof filters.value === 'function' ? filters.value : filterCallback)
      : list.value
  }, ['init'])
  const propFiltersMax = computed(() => filters.value && list.value ? propFilters.value.length : max.value)

  return {
    propFilters,
    propFiltersMax
  }
}
