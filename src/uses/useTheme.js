import { ref } from 'vue'

const DC_THEME = '__dcUi-theme'
const DC_THEME_COLOR = '__dcUi-theme-color'
const DC_THEME_DEFAULT = 'm2-baseline'

export const getTheme = (name = undefined) => {
  return localStorage.getItem(DC_THEME) || name || DC_THEME_DEFAULT
}

export const setTheme = (name) => {
  localStorage.setItem(DC_THEME, name)
  return name
}

export const getColor = (type) => localStorage.getItem(`${DC_THEME_COLOR}--${type}`)
export const setColor = (type, name) => localStorage.setItem(`${DC_THEME_COLOR}--${type}`, name)

export const useTheme = (themeDefault) => {
  const get = () => getTheme(themeDefault)
  const set = (theme) => {
    updateClass(theme)
    value.value = setTheme(theme)
  }
  const updateClass = (name = get()) => {
    document.body.classList.remove(`theme:${get()}`)
    document.body.classList.add(`theme:${name}`)
  }

  const updateColor = (type, name = undefined) => {
    document.body.classList.remove(`${type}:${getColor(type)}`)
    document.body.classList.add(`${type}:${name || getColor(type)}`)
  }

  const value = ref(get())
  const color = {
    get primary () {
      return getColor('primary')
    },
    set primary (name) {
      updateColor('primary', name)
      setColor('primary', name)
    },
    get secondary () {
      return getColor('secondary')
    },
    set secondary (name) {
      updateColor('secondary', name)
      setColor('secondary', name)
    },
    get tertiary () {
      return getColor('tertiary')
    },
    set tertiary (name) {
      updateColor('tertiary', name)
      setColor('tertiary', name)
    }
  }

  updateClass()
  updateColor('primary')
  updateColor('secondary')
  updateColor('tertiary')

  return {
    value,
    color,
    get,
    set
  }
}
