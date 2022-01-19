import createElement from './../../functions/createElement'

export default function useItem (ripple) {
  const add = (x, y) => createElement(ripple.value, 'span', item => {
    item.onanimationend = () => item.classList.add('step-1')
    item.ontransitionend = () => ripple.value.removeChild(item)

    item.__step = 0
    item.style.setProperty('--_rp-x', `${x}px`)
    item.style.setProperty('--_rp-y', `${y}px`)
    item.classList.add('d-ripple__item')
  })

  return ({
    offsetX,
    offsetY
  }) => add(offsetX, offsetY)
}
