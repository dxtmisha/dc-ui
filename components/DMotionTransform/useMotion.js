import { nextTick, onMounted, ref, toRefs, watch } from 'vue'

const scaleElement = (
  element,
  size = {
    height: window.innerHeight,
    width: window.innerWidth
  }
) => {
  const rect = element.getBoundingClientRect()
  const height = rect.height
  const width = rect.width
  const scale = 1 / width * size.width
  const contentScale = 1 / size.width * width

  return {
    width,
    height,
    scale,
    contentScale,
    contentTop: rect.top - (contentScale * rect.top / (contentScale - 1)),
    contentLeft: rect.left - (contentScale * rect.left / (contentScale - 1)),
    contentHeight: (100 / size.height * height * scale) + '%'
  }
}

export default function useMotion (
  transform,
  content,
  head,
  body,
  props,
  propOpen,
  propShow,
  classStatic,
  classOpen,
  classWindowOpen,
  styleTransform,
  styleContent,
  reset,
  toggleEvent
) {
  const { open } = toRefs(props)
  const teleport = ref(false)

  const animation = () => getComputedStyle(transform.value).content === '"--ANIMATION--"' || props.animationShow
  const toggle = () => {
    const size = scaleElement(transform.value)
    styleTransform.set(size)
    styleContent.set(size)

    if (props.open) {
      teleport.value = props.open
    }
  }
  const panel = () => {
    classStatic.set(true)
    styleContent.set({
      contentHeight: `${head.value.offsetHeight}px`,
      bodyHeight: body.value.offsetHeight + (props.adaptive === 'section' ? head.value.offsetHeight : 0)
    })
  }

  const update = async () => {
    if (!!props.open !== propOpen.value) {
      propShow.value = true

      if (!propOpen.value) {
        await nextTick()
      }

      if (getComputedStyle(content.value).content === '"--WINDOW--"') {
        toggle()
      } else if (animation()) {
        panel()
      }

      toggleEvent()
    }
  }

  const onTransitionend = ({
    propertyName,
    target
  }) => {
    if (content.value === target) {
      switch (propertyName) {
        case 'height':
          classStatic.set(false)
          reset()
          break
        case 'transform':
          if (propOpen.value === false) {
            teleport.value = props.open
            reset()
          }

          break
      }
    }
  }

  watch(open, update)
  watch(propOpen, async (status) => {
    await nextTick()

    requestAnimationFrame(() => {
      classOpen.set(status && !teleport.value)
      classWindowOpen.set(status && teleport.value)
    })
  })

  onMounted(async () => {
    await nextTick()
    await update()
  })

  return {
    teleport,
    onTransitionend
  }
}
