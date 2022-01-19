import { computed, ref } from 'vue'
import Geo from './../../classes/Geo'
import List from './../../classes/List'

export default function useFile (
  selection,
  props,
  propValue,
  checkValidity
) {
  const files = ref([])
  const object = () => new List(propValue.value)

  const propSelected = ref(undefined)
  const propFocus = ref(undefined)

  const getCoordinator = coordinator => {
    const geo = new Geo()
    const text = []

    if (coordinator) {
      coordinator.forEach(value => text.push(geo.getNumber(value)))
    }

    return text.join(', ')
  }

  const list = computed(() => {
    const list = []

    object().getAll().forEach(item => list.push({
      ...item,
      item,
      title: item.text,
      text: getCoordinator(item.coordinator),
      thumbnail: item.thumbnail || props.iconFile,
      src: item.thumbnail || props.iconFile
    }))

    return list
  })
  const json = computed(() => propValue.value?.length > 0 ? JSON.stringify(propValue.value) : undefined)
  const item = computed(() => list.value.find(item => propFocus.value === item.value))

  const isSelected = computed(() => propSelected.value?.length > 0)
  const isOne = computed(() => propSelected.value?.length === 1)

  const getName = file => file.name.replace(/\.[^.]+$/, '')
  const setSelected = ({
    selected,
    focus
  }) => {
    propSelected.value = selected
    propFocus.value = focus
  }

  const add = file => {
    const item = {
      text: getName(file),
      value: file.name,
      thumbnail: file.type.match(/^image\//) ? file : undefined,
      fileIndex: file
    }

    if (propValue.value) {
      if (!(
        props.max &&
        props.max <= propValue.value.length
      )) {
        propValue.value.push(item)
      }
    } else {
      propValue.value = [item]
    }

    requestAnimationFrame(() => checkValidity())

    files.value = [...files.value, file]
  }
  const remove = () => {
    const newValue = []
    const newFiles = []

    propValue.value.forEach(item => {
      if (propSelected.value.indexOf(item?.value) === -1) {
        newValue.push(item)

        if ('fileIndex' in item) {
          newFiles.push(item.fileIndex)
        }
      }
    })

    propValue.value = newValue
    files.value = newFiles

    requestAnimationFrame(() => checkValidity())
    selection.value.reset()
  }

  return {
    files,
    propSelected,
    propFocus,
    list,
    json,
    item,
    isSelected,
    isOne,
    setSelected,
    add,
    remove
  }
}
