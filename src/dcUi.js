import Translation from '@/classes/Translation'
import { forEach } from '@/tool/functions'
import { useTheme } from '@/uses/useTheme'

export const getRoutes = function (list) {
  const data = []

  forEach(list, (item, name) => data.push({
    path: `/${name}`,
    name,
    component: item
  }))

  return data
}

export default {
  install (app, options) {
    window.__DUI_GLOBAL = options?.options || {}

    app.config.globalProperties.$theme = useTheme(options?.theme)
    app.config.globalProperties.$translate = Translation
  }
}
