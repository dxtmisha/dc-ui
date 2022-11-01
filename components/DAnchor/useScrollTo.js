import goScrollSmooth from '../../functions/goScrollSmooth'

export default function useScrollTo (props) {
  return element => goScrollSmooth(element, props)
}
