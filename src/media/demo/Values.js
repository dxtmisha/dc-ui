import { action, bar, menu, menuMin, menuSimplified } from '@/media/demo/data/list'
import { helper1, quote1, validation1 } from '@/media/demo/data/text'

export const Values = {
  ajax: { message: '/demo/request/menu.json' },
  backgroundColor: {
    list: [
      { value: undefined },
      {
        text: 'true',
        value: true
      },
      {
        text: 'red',
        value: '244,67,54',
        icon: '#F44336'
      },
      {
        text: 'blue',
        value: '33,150,243',
        icon: '#2196F3'
      },
      {
        text: 'green',
        value: '76,175,80',
        icon: '#4CAF50'
      },
      {
        text: 'yellow',
        value: '255,235,59',
        icon: '#FFEB3B'
      },
      {
        text: 'gray',
        value: '158,158,158',
        icon: '#9E9E9E'
      }
    ]
  },
  bar: {
    default: true,
    message: bar
  },
  barAction: {
    default: true,
    message: action
  },
  barMenu: {
    default: true,
    message: menuSimplified
  },
  barNavigation: {
    default: true,
    message: menu
  },
  cache: {},
  description: { message: quote1 },
  dot: {},
  counterValue: { message: 128 },
  element: {
    list: [
      { value: undefined },
      {
        text: 'window',
        value: window
      }
    ]
  },
  helperMessage: { message: helper1 },
  hour: { message: 15 },
  marks: {
    message: [
      { value: 0 },
      { value: 10 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      {
        text: '50%',
        value: 50
      },
      {
        text: 'x2 / 100%',
        value: 100,
        mark: 60
      },
      {
        text: 'x4 / 200%',
        value: 200,
        mark: 80
      },
      {
        text: 'x5 / 250%',
        value: 250,
        mark: 90
      },
      {
        text: 'x10 / 2500%',
        value: 250,
        mark: 100
      }]
  },
  mask: {
    list: [
      { value: undefined },
      { value: '+7 (***) ***-**-**' },
      { value: '**** **** **** ****' }
    ]
  },
  menu: { message: menuMin },
  minute: { message: 35 },
  prefix: { message: 'pr' },
  second: { message: 45 },
  suffix: { message: 'sf' },
  text: {
    default: true,
    message: 'Interactive demo'
  },
  textAction: {
    default: true,
    message: 'Action'
  },
  textShort: {
    default: true,
    message: 'Demo'
  },
  textTitle: { message: 'Interactive demo' },
  title: { message: 'Interactive demo' },
  underline: { message: 'demo' },
  value: {},
  values: {},
  validationMessage: { message: validation1 }
}
