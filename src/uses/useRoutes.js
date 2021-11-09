import { forEach } from '@/uses/useObject'

export const getRoutes = function (list) {
  const data = []

  forEach(list, (item, name) => data.push({
    path: `/${name}`,
    name,
    component: item
  }))

  return data
}
