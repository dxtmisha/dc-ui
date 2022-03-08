import goFunction from '../functions/goFunction'

export const defaultInit = function (name) {
  const defaultData = (prop, key = name) => window?.__DUI_GLOBAL?.[key]?.[prop]

  return (alias, defaultValue = undefined) =>
    () => defaultData(alias) || goFunction(defaultValue) || defaultData(alias, 'global')
}

export const validator = function (values) {
  return (value) => values.indexOf(value) !== -1
}

export const validatorAdaptive = validator([
  'auto',
  'auto-small',
  'auto-medium',
  'auto-large',
  'auto-extra',
  'auto-desktop',
  'basic',
  'icon',
  'block'
])

export const validatorAlign = validator([
  'center',
  'left',
  'right'
])

export const validatorAxis = validator([
  'x',
  'y'
])

export const validatorShape = validator([
  'basic',
  'rounded',
  'pill',
  'tile'
])

export const validatorSize = validator([
  'small',
  'medium',
  'large'
])
