export default function goFunction (item) {
  return typeof item === 'function' ? item() : item
}
