import useStyleList from '@/--uses/useStyleList'
import useClass from '@/uses/useClass'

export default function useClasses (
  transform,
  content,
  context,
  propOpen
) {
  const classStatic = useClass(content, 'status-static')
  const classOpen = useClass(content, 'status-open')
  const classWindowOpen = useClass(content, 'status-window-open')

  const styleTransform = useStyleList(transform, {
    height: '--_mt-height',
    width: '--_mt-width'
  }, 'px')
  const styleContent = useStyleList(content, {
    contentScale: {
      name: '--_mt__cn-scale',
      unit: undefined
    },
    contentTop: '--_mt__cn-top',
    contentLeft: '--_mt__cn-left',
    contentHeight: {
      name: '--_mt__cn-height',
      unit: undefined
    },
    bodyHeight: '--_mt__bd-height',
    width: '--_mt__hd-width',
    scale: {
      name: '--_mt__hd-scale',
      unit: undefined
    }
  }, 'px')

  const reset = () => {
    if (!propOpen.value) {
      context.emit('on-close')
    }

    styleTransform.reset(!propOpen.value)
    styleContent.reset()
  }

  return {
    classStatic,
    classOpen,
    classWindowOpen,
    styleTransform,
    styleContent,
    reset
  }
}
