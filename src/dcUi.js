import Translation from '@/classes/Translation'
import { useTheme } from '@/uses/useTheme'

export default {
  install (app, options) {
    window.__DUI_GLOBAL = options?.options || {}

    app.config.globalProperties.$theme = useTheme(options?.theme)
    app.config.globalProperties.$translate = Translation
  }
}
