<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div>
      <div v-for="value in list" :key="value">
        {{ value }}
        <span class="opacity:surface-medium">=&gt; </span>
        <d-date-format
          id="id-date-format"
          :admin="true"
          :value="value"
          class="font-medium"
          v-bind="binds"
        />
      </div>
    </div>
  </interactive-demo>
</template>

<script>
import DDateFormat from '../../../components/DDateFormat'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsDateFormat } from './options'
import GeoDate from '../../../classes/GeoDate'

export default {
  name: 'DemoDateFormat',
  components: {
    DDateFormat,
    InteractiveDemo
  },
  setup () {
    const options = optionsDateFormat

    const date = new GeoDate()
    const object = date.getObject()

    const initHours = (hours) => {
      object.setHours(object.getHours() - hours)
      return object
    }
    const initDate = (day) => {
      object.setDate(object.getDate() - day)
      return object
    }

    const list = [
      date.toStandard(),
      date.toStandard(initHours(1)),
      date.toStandard(initHours(2)),
      date.toStandard(initHours(3)),
      date.toStandard(initDate(1)),
      date.toStandard(initDate(1)),
      date.toStandard(initDate(1)),
      date.toStandard(initDate(2)),
      date.toStandard(initDate(3)),
      date.toStandard(initDate(10)),
      date.toStandard(initDate(20)),
      date.toStandard(initDate(30))
    ]

    return {
      options,
      list
    }
  }
}
</script>

<style lang="scss">
.demo-actions {
  max-width: 640px;
  width: 100%;
}
</style>
