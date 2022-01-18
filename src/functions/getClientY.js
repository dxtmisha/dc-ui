export default function getClientY (event) {
  return event?.targetTouches?.[0].clientY || event?.clientY
}
