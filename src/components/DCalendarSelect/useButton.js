import attrButton from '@/components/DButton/attrButton'

export default function useButton (props) {
  return attrButton({
    props,
    attrs: {
      appearance: 'text',
      size: 'small',
      dense: true,
      lowercase: true,
      ellipsis: true
    }
  })
}
