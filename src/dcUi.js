import Translation from './classes/Translation'
import { useTheme } from './uses/useTheme'
import forEach from './functions/forEach'

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
        value: path,
        to: path
      })
    }
  })

  return data
}

export default {
  install (app, options) {
    app.config.globalProperties.$theme = useTheme(options?.theme, options?.options)
    app.config.globalProperties.$translate = Translation
    app.config.globalProperties.$menu = () => menu
  }
}
