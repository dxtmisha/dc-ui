import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DForm/props'

export const optionsForm = useProps(props, {
  ajax: {
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
  },
  options: {
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
  },
  values: {
    message: {
      'first-name': 'Loretta',
      'last-name': 'Kelley',
      email: 'email@gmail.com',
      phone: '+7 (902) 332-33-33',
      album: [
        {
          text: 'image-01',
          value: 'image-01',
          thumbnail: require('@/assets/images/image-01.jpeg')
        },
        {
          text: 'image-02',
          value: 'image-02',
          thumbnail: require('@/assets/images/image-02.jpeg')
        },
        {
          text: 'image-03',
          value: 'image-03',
          thumbnail: require('@/assets/images/image-03.jpeg')
        }
      ]
    }
  }
}, ['bar'])
