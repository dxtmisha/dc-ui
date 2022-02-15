export default function getExp (value, pattern = ':value') {
  const data = typeof value === 'string'
    ? value.replace(/([[\]\\^$.?*+()])/, '\\$1')
    : value

  return new RegExp(pattern.replace(':value', data), 'ig')
}
