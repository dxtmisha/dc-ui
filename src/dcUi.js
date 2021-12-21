import Translation from '@/classes/Translation'
import { useTheme } from '@/uses/useTheme'
import forEach from '@/functions/forEach'

let menu

export const getRoutes = function (list) {
  const data = []
  menu = []

  forEach(list, (item, name) => {
    if (
      ('subtitle' in item) ||
      ('line' in item) ||
      ('space' in item)
    ) {
      menu.push(item)
    } else {
      const path = `/${name}`

      data.push({
        path,
        name,
        component: item
      })
      menu.push({
        text: name,
        value: path
      })
    }
  })

  return data
}

export default {
  install (app, options) {
    window.__DUI_GLOBAL = options?.options || {}

    app.config.globalProperties.$theme = useTheme(options?.theme)
    app.config.globalProperties.$translate = Translation
    app.config.globalProperties.$menu = () => menu
  }
}
