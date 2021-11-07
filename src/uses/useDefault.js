export const defaultInit = function (name) {
  const defaultData = (prop, key = name) => window?.__DUI_GLOBAL?.[key]?.[prop]

  return (alias, defaultValue = undefined) =>
    () => defaultData(alias) || defaultData(alias, 'global') || defaultValue
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
