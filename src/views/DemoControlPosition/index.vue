<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <d-control-position
      v-bind="binds"
      id="id-control-position"
      :admin="true"
      @on-drop="on"
      @on-position="on"
    >
      <template v-slot:default="{ className, classNameClick, classNameDrop, classNamePosition }">
        <d-control-selection>
          <template v-slot:default="selection">
            <div class="demo-control-position">
              <div
                :class="`demo-control-position__item border ${className} ${classNameDrop}`"
                data-value="drop1"
              >
                <span>drop(1)</span>
              </div>
              <div
                :class="`demo-control-position__item border ${className} ${classNameDrop}`"
                data-value="drop2"
              >
                <span>drop(2)</span>
              </div>
              <div class="demo-control-position__space"/>
              <div
                v-for="item in list"
                :key="item"
                :class="`demo-control-position__item border ${className} ${classNameClick} ${classNamePosition} ${selection.className} ${selection.classNameClick}`"
                :data-value="item"
                @click="selection.onClick"
              >
                <span>{{ item }}</span>
              </div>
            </div>
          </template>
        </d-control-selection>
      </template>
    </d-control-position>
  </interactive-demo>
</template>

<script>
import DControlPosition from '../../../components/DControlPosition'
import DControlSelection from '../../../components/DControlSelection'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsControlPosition } from './options'

export default {
  name: 'DemoControlPosition',
  components: {
    DControlPosition,
    DControlSelection,
    InteractiveDemo
  },
  setup () {
    const options = optionsControlPosition
    const list = (() => {
      const list = []

      for (let i = 1; i <= 102; i++) {
        list.push(i)
      }

      return list
    })()

    return {
      options,
      list
    }
  },
  methods: {
    on (event) {
      console.warn('event', event)
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/color";
@import "../../styles/dimension";
@import "../../styles/flex";

.demo-control-position {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 8px;
  width: 100%;

  &__item {
    @include flexCenter;
    @include squared(100px);
    margin: 8px;

    &.status-dragged {
      background-color: varColor(--success-type1, --opacity-container-dragged);
    }
  }

  &__space {
    flex-basis: 100%;
  }
}
</style>
