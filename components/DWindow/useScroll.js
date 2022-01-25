import { ref } from 'vue'
import useClass from '../../uses/useClass'

const app = document.querySelector('#app')
const classBody = useClass(ref(document.body), 'd-window__block', false, undefined, false)

export default function useScroll () {
  let scrollTop

  return value => {
    if (value) {
      if (!document.body.classList.contains('d-window__block')) {
        scrollTop = document.documentElement.scrollTop
        document.body.style.setProperty('height', document.body.offsetHeight + 'px')
        classBody.set(true)

        app.scrollTop = scrollTop
      }
    } else if (document.querySelectorAll('.d-window').length < 1) {
      scrollTop = app.scrollTop
      classBody.set(false)
      document.body.style.setProperty('height', null)
      document.documentElement.scrollTop = scrollTop
    }
  }
}
