export default function getClientX (event) {
  return event?.targetTouches?.[0].clientX || event?.clientX
}
