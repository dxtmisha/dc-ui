<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 pt-8">
    <div v-for="{icon, list, name} in list" :key="name" class="pt-8">
      <div class="flex items-center pb-4">
        <d-icon :icon="icon" :background="true" size="medium"/>
        <span class="ml-4">{{ name }}</span>
      </div>
      <div v-for="item in (list)" :key="item" class="pl-14">
        <router-link :to="item">{{ item }}</router-link>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
import DIcon from '../../components/DIcon'

export default {
  name: 'HomeView',
  components: { DIcon },
  setup () {
    const list = [
      {
        icon: 'grid_view',
        name: 'Components',
        list: [
          'd-alert',
          'd-badge',
          'd-banner',
          'd-button',
          'd-button-group',
          'd-button-select',
          'd-button-sort',
          'd-icon',
          'd-icon-item',
          'd-list',
          'd-list-item',
          'd-menu',
          'd-snackbar',
          'd-tooltip'
        ]
      },
      {
        icon: 'input',
        name: 'Form',
        list: [
          'd-avatar',
          'd-carcass-field',
          'd-carcass-message',
          'd-checkbox',
          'd-clipboard',
          'd-date',
          'd-drop',
          'd-file',
          'd-form',
          'd-input',
          'd-mask',
          'd-phone',
          'd-select',
          'd-select-filter',
          'd-select-value',
          'd-slider',
          'd-slider-picker',
          'd-textarea',
          'd-textarea-autosize',
          'd-time'
        ]
      },
      {
        icon: 'near_me',
        name: 'Navigation',
        list: [
          'd-actions',
          'd-anchor',
          'd-anchor-to',
          'd-app-bar',
          'd-bottom-navigation',
          'd-breadcrumbs',
          'd-dialog',
          'd-navigation',
          'd-navigation-filter',
          'd-tab',
          'd-tab-picker',
          'd-top'
        ]
      },
      {
        icon: 'table_rows',
        name: 'Data and Table',
        list: [
          'd-data',
          'd-data-item',
          'd-data-picker',
          'd-pagination',
          'd-table',
          'd-table-picker'
        ]
      },
      {
        icon: 'calendar_today',
        name: 'Date',
        list: [
          'd-calendar',
          'd-calendar-multiple',
          'd-calendar-select',
          'd-clock-face',
          'd-date-picker',
          'd-time-picker'
        ]
      },
      {
        icon: 'dashboard_customize',
        name: 'Card',
        list: [
          'd-card',
          'd-card-media',
          'd-card-menu',
          'd-card-text',
          'd-card-title'
        ]
      },
      {
        icon: 'crop_original',
        name: 'Images',
        list: [
          'd-images',
          'd-images-bar',
          'd-redaction-file'
        ]
      },
      {
        icon: 'repeat',
        name: 'Control',
        list: [
          'd-control-position',
          'd-control-resize',
          'd-control-selection'
        ]
      },
      {
        icon: 'animation',
        name: 'Motion',
        list: [
          'd-motion-axis',
          'd-motion-cell',
          'd-motion-scroll',
          'd-motion-sticky',
          'd-motion-transform'
        ]
      },
      {
        icon: 'money',
        name: 'Intl',
        list: [
          'd-currency',
          'd-date-format',
          'd-display',
          'd-list-format',
          'd-number',
          'd-unit'
        ]
      },
      {
        icon: 'alt_route',
        name: 'Other',
        list: [
          'd-progress',
          'd-ripple',
          'd-scrollbar',
          'd-skeleton',
          'd-window'
        ]
      }
    ]

    return {
      list
    }
  }
}
</script>

<style lang="scss">

</style>
