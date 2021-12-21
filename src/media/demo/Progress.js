import { type2i } from '@/media/demo/data/type'

export const Progress = {
  progress: {},
  progressIndeterminate: { list: type2i },
  progressMax: {
    list: [
      { value: undefined },
      {
        text: '50%',
        value: 50
      },
      {
        text: '100%',
        value: 100
      },
      {
        text: '250%',
        value: 250
      },
      {
        text: '300%',
        value: 300
      }
    ]
  },
  progressType: {
    list: [
      { value: undefined },
      { value: 'linear' },
      { value: 'circular' }
    ]
  },
  progressValue: {
    list: [
      { value: undefined },
      {
        text: '1%',
        value: 1
      },
      {
        text: '10%',
        value: 10
      },
      {
        text: '20%',
        value: 20
      },
      {
        text: '30%',
        value: 30
      },
      {
        text: '50%',
        value: 50
      },
      {
        text: '90%',
        value: 90
      },
      {
        text: '95%',
        value: 95
      },
      {
        text: '100%',
        value: 100
      }
    ]
  }
}
