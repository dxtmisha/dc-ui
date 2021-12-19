import { reactive, toRefs } from 'vue'

export default function setupButton (props, value = {}) {
  const refs = toRefs(props)
  const bindButton = reactive({
    item: value?.item,
    value: value?.value,
    text: value?.text,
    badge: value?.badge,

    active: value?.active,
    selected: value?.selected,
    turn: value?.turn,
    dragged: value?.dragged,
    readonly: value?.readonly,
    disabled: value?.disabled,
    hide: value?.hide,
    progress: value?.progress,

    palette: refs?.palette,
    color: refs?.color,
    tag: refs?.buttonTag,
    appearance: refs?.buttonAppearance,
    size: refs?.buttonSize,
    shape: refs?.buttonShape,
    align: refs?.buttonAlign,
    adaptive: refs?.buttonAdaptive,
    lowercase: refs?.buttonLowercase,
    ellipsis: refs?.buttonEllipsis,
    ripple: refs?.ripple,

    icon: value?.icon || refs?.icon,
    iconActive: value?.iconActive || refs?.iconActive,
    iconTrailing: value?.iconTrailing || refs?.iconTrailing,
    iconTurn: value?.iconTurn || refs?.iconTurn,
    iconReadonly: value?.iconReadonly || refs?.iconReadonly,
    iconHide: value?.iconHide || refs?.iconHide,
    iconAnimationShow: value?.iconAnimationShow || refs?.iconAnimationShow,
    iconBackground: value?.iconBackground || refs?.iconBackground
  })

  return { bindButton }
}
