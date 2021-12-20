import { fileValue } from '@/--views/DemoFile/options'
import {
  disabled,
  options, palette, readonly,
  status,
  values
} from '@/media/--demo/options'

export const formValues = {
  value: 'values',
  message: {
    'first-name': 'Loretta',
    'last-name': 'Kelley',
    email: 'email@gmail.com',
    phone: '+7 (902) 332-33-33',
    album: fileValue.message
  }
}

export const formAjax = {
  value: 'ajax',
  list: [
    { value: undefined },
    {
      text: 'error',
      value: window.location.origin + '/demo/request/form-error.json'
    },
    {
      text: 'success',
      value: window.location.origin + '/demo/request/form-success.json'
    }
  ]
}

export const formOptions = {
  value: 'options',
  list: [
    { value: undefined },
    {
      text: 'basic',
      value: { appearance: 'basic' }
    },
    {
      text: 'classic',
      value: { appearance: 'classic' }
    },
    {
      text: 'classic + small',
      value: {
        appearance: 'classic',
        size: 'small'
      }
    },
    {
      text: 'filled',
      value: { appearance: 'filled' }
    },
    {
      text: 'outlined',
      value: { appearance: 'outlined' }
    },
    {
      text: 'outlined + small',
      value: {
        appearance: 'outlined',
        size: 'small'
      }
    }
  ]
}

export const optionsForm = {
  values,
  formValues,
  formAjax,

  status,
  readonly,
  disabled,

  options,
  palette,
  formOptions
}
