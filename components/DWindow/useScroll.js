import useClass from '../../uses/useClass'
import { ref } from 'vue'

const app = document.querySelector('#app')
const classBody = useClass(ref(document.body), 'd-window__block', false, undefined, false)

export default function useScroll () {
  let scrollTop

  return value => {
    if (value) {
      if (!document.body.classList.contains('d-window__block')) {
        scrollTop = document.documentElement.scrollTop
        classBody.set(true)

        if (scrollTop > 0) {
          requestAnimationFrame(() => {
            app.scrollTop = scrollTop
          })
        }
      }
    } else if (document.querySelectorAll('.d-window').length < 1) {
      scrollTop = app.scrollTop
      classBody.set(false)
      document.documentElement.scrollTop = scrollTop
    }
  }
}
