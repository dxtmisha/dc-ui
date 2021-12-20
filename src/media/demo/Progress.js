import { maxProgress } from '@/media/demo/data/max'
import { type2i, typeProgress } from '@/media/demo/data/type'
import { valueProgress } from '@/media/demo/data/value'

export const Progress = {
  progressValue: { list: valueProgress },

  progressIndeterminate: { list: type2i },
  progressMax: { list: maxProgress },
  progressType: { list: typeProgress },

  progress: {}
}
