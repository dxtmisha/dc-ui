import { ref } from 'vue'

const DC_THEME = '__dcUi-theme'
const DC_THEME_DEFAULT = 'm2-baseline'

export const getTheme = (name = undefined) => {
  return localStorage.getItem(DC_THEME) || name || DC_THEME_DEFAULT
}

export const setTheme = (name) => {
  localStorage.setItem(DC_THEME, name)
  return name
}

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

  const value = ref(get())

  updateClass()

  return {
    value,
    get,
    set
  }
}
