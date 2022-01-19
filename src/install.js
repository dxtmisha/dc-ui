import { useTheme } from '@/uses/useTheme'
import Translation from '@/classes/Translation'

export default {
  install (app, options) {
    app.config.globalProperties.$theme = useTheme(options?.theme, options?.options)
    app.config.globalProperties.$translate = Translation
  }
}
