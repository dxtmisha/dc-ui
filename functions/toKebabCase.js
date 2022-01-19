export default function toKebabCase (value) {
  return value
    .replace(/^[A-Z]./g, all => all.toLowerCase())
    .replace(/[A-Z]./g, all => `-${all.toLowerCase()}`)
}
