import Translation from './classes/Translation'
import useTheme from './uses/useTheme'

export default {
  install (app, options) {
    app.config.globalProperties.$theme = useTheme(options?.theme, options?.options)
    app.config.globalProperties.$translate = Translation
  }
}
