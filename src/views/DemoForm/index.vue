<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds, on }"
  >
    <d-form
      v-bind="binds"
      id="id-file"
      :fields="fields"
      :admin="true"
      class-fields="grid-cols-3"
      @on-submit="on"
      @on-validity="on"
    />
  </interactive-demo>
</template>

<script>
import DForm from '../../../components/DForm'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsForm } from './options'
import form from '@/media/demo/data/form'

export default {
  name: 'DemoForm',
  components: {
    DForm,
    InteractiveDemo
  },
  setup () {
    const options = optionsForm
    const fields = form

    return {
      options,
      fields
    }
  }
}
</script>

<style lang="scss"></style>
