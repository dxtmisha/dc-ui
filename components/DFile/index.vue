<template>
<div :class="classList" class="d-file">
  <input
    ref="input"
    v-bind="inputAttrs"
    :disabled="disabled"
    :name="`${name}[list]`"
    :readonly="readonly"
    :required="required"
    :value="json"
    class="d-file__input"
    type="text"
  >
  <div v-if="text" class="d-file__text">
    {{ text }}<span v-if="required" class="d-file__required"/>
  </div>
  <div class="d-file__body">
    <div
      v-show="!readonly && list.length < 1"
      class="d-file__image"
      :data-text="translation['Drag and drop files here']"
    >
      <d-drop
        ref="drop"
        :accept="accept"
        :disabled="propDisabled"
        multiple
        @on-drop="onDrop"
      />
    </div>
    <d-control-position
      v-show="list.length > 0"
      ref="position"
      v-slot:default="position"
      :disabled="propDisabled"
      @on-position="onPosition"
    >
      <d-control-selection
        ref="selection"
        v-slot:default="selection"
        :disabled="readonly"
        class="d-file__list"
        @on-selected="setSelected"
      >
        <d-images
          appearance="standard"
          size="128px"
          bar-display="above"
        >
          <d-images-item
            v-for="item in list"
            :key="item.value"
            v-bind="item"
            :class="classItem(position, selection)"
            @click="selection.onClick"
          />
        </d-images>
      </d-control-selection>
    </d-control-position>
    <div v-if="propValidationMessage" class="d-file__validation">{{ propValidationMessage }}</div>
    <div v-else-if="helperMessage" class="d-file__helper">{{ helperMessage }}</div>
    <d-actions
      v-if="!readonly"
      v-bind="actions"
      class="d-file__actions"
      @onClick="onActions"
    />
  </div>
  <d-file-edit
    v-if="isOne"
    :file="item"
    :open="edit"
    @onInput="onEdit"
  />
</div>
</template>

<script>
import DActions from '../DActions'
import DControlPosition from '../DControlPosition'
import DControlSelection from '../DControlSelection'
import DDrop from '../DDrop'
import DFileEdit from './DFileEdit'
import DImages from '../DImages'
import DImagesItem from '../DImagesItem'
import { props } from './props'
import { computed, nextTick, ref } from 'vue'
import Translation from '../../classes/Translation'
import forEach from './../../functions/forEach'
import useAdmin from '../../uses/useAdmin'
import useColor from '../../uses/useColor'
import useField from '../../uses/useField'
import useFile from './useFile'

export default {
  name: 'DFile',
  components: {
    DActions,
    DControlPosition,
    DControlSelection,
    DDrop,
    DFileEdit,
    DImagesItem,
    DImages
  },
  props,
  emits: [
    'on-input',
    'update:value',
    'update:modelValue'
  ],
  setup (props, context) {
    const input = ref(undefined)
    const drop = ref(undefined)
    const position = ref(undefined)
    const selection = ref(undefined)

    const palette = useColor(props)
    const edit = ref(false)

    const translation = Translation.getByList([
      'Drag and drop files here'
    ])

    const {
      propValidationMessage,
      propValue,
      checkValidity,
      setChange
    } = useField(
      input,
      undefined,
      props,
      context
    )

    const {
      files,
      propFocus,
      list,
      json,
      item,
      isSelected,
      isOne,
      setSelected,
      add,
      remove,
      updateKey
    } = useFile(
      selection,
      props,
      propValue,
      checkValidity
    )

    const propDisabled = computed(() => props.disabled || props.readonly)
    const actions = computed(() => {
      return {
        bar: [
          {
            icon: 'add',
            appearance: 'outlined-color',
            text: Translation.get('Add'),
            value: 'add',
            disabled: propDisabled.value || (
              props.max &&
              props.max <= propValue.value?.length
            ),
            shape: props.shape,
            type: 'button',
            class: ''
          }
        ],
        barAction: [
          {
            icon: 'edit',
            appearance: 'text',
            title: Translation.get('Edit'),
            value: 'edit',
            disabled: propDisabled.value || !isOne.value || item.value?.thumbnail === props.iconFile,
            shape: props.shape,
            type: 'button'
          },
          {
            palette: 'error',
            appearance: 'text-color',
            icon: 'delete',
            title: Translation.get('Delete'),
            value: 'delete',
            disabled: propDisabled.value || !isSelected.value,
            shape: props.shape,
            type: 'button'
          }
        ]
      }
    })

    const classList = computed(() => {
      return {
        'status-focus': item.value,
        'status-readonly': props.readonly,
        'status-disabled': props.disabled,
        [`adaptive-${props.adaptive}`]: props.adaptive,
        [`shape-${props.shape}`]: props.shape,
        ...palette.value
      }
    })
    /**
     * @param {Object.<string, string>} position
     * @param {Object.<string, string>} selection
     * @returns {string}
     */
    const classItem = (position, selection) => [
      position.className,
      position.classNameClick,
      position.classNamePosition,
      selection.className,
      selection.classNameClick
    ].join(' ')

    const onActions = ({ value }) => {
      switch (value) {
        case 'add':
          drop.value?.open()
          break
        case 'edit':
          edit.value = !edit.value
          break
        case 'delete':
          remove()
          break
      }
    }
    const onDrop = async ({ files }) => {
      const selected = []

      forEach(files, file => {
        selected.push(file.name)
        add(file)
      })

      await nextTick()
      selection.value.setSelected(selected)
    }
    const onEdit = coordinator => {
      if (coordinator !== -1 && propValue.value) {
        propValue.value.forEach(item => {
          if (item.value === propFocus.value) {
            item.coordinator = coordinator
          }
        })
      }

      edit.value = !edit.value
    }
    const onPosition = event => {
      propValue.value = position.value.toNewPosition(propValue.value, event)
      updateKey()
    }

    setChange()
    useAdmin('d-file', context)

    return {
      input,
      drop,
      position,
      selection,
      edit,
      translation,
      actions,
      propValidationMessage,
      files,
      propValue,
      propDisabled,
      list,
      json,
      item,
      isOne,
      classList,
      classItem,
      checkValidity,
      setChange,
      setSelected,
      onActions,
      onDrop,
      onEdit,
      onPosition
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-file {
  @include fileInit;
}
</style>
