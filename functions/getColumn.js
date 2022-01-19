import forEach from './forEach'

export default function getColumn (array, column) {
  return forEach(array, item => item?.[column])
}
