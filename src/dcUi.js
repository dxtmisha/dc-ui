import Hash from '../classes/Hash'
import Translation from '../classes/Translation'
import forEach from '../functions/forEach'
import useTheme from '../uses/useTheme'

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
    Hash._init()
    setTimeout(() => Hash.set('new', 'value1'), 1000)
    app.config.globalProperties.$theme = useTheme(options?.theme, options?.options)
    app.config.globalProperties.$translate = Translation
    app.config.globalProperties.$menu = () => menu
  }
}
