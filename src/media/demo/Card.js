import { adaptiveBasic } from '@/media/demo/data/adaptive'
import { helper1, quote2 } from '@/media/demo/data/text'

export const Card = {
  cardAppearance: {
    list: [
      ...adaptiveBasic,
      { value: 'basic' },
      { value: 'outlined' }
    ]
  },
  cardDescription: { message: helper1 },
  cardText: {
    default: true,
    message: quote2
  },
  cardTitle: {
    default: true,
    message: 'Interactive demo'
  }
}
