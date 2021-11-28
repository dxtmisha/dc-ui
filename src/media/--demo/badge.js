import { iconList } from '@/media/--demo/icons'

export const badge = {
  // Values
  badgeIcon: {
    text: 'Icon',
    list: iconList
  },
  badge: {
    text: 'Value',
    list: [
      {
        text: '',
        value: undefined
      },
      {
        text: '8',
        value: 8
      },
      {
        text: '32',
        value: 32
      },
      {
        text: '128',
        value: 128
      },
      {
        text: 'Demo',
        value: 'Demo'
      },
      {
        text: 'Interactive demo',
        value: 'Interactive demo'
      }
    ]
  },
  dot: { text: 'Dot' },

  // Options
  outline: {
    text: 'Outline',
    list: [
      { value: undefined },
      {
        text: 'Red',
        value: '#F44336'
      },
      {
        text: 'Blue',
        value: '#2196F3'
      },
      {
        text: 'Green',
        value: '#4CAF50'
      },
      {
        text: 'Yellow',
        value: '#FFEB3B'
      },
      {
        text: 'Gray',
        value: '#9E9E9E'
      }
    ]
  }
}
