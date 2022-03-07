export const filter = [
  {
    section: 'basic',
    fields: [
      { subtitle: 'Product Type' },
      {
        name: 'motion_picture',
        text: 'Motion Picture & Television Filter',
        component: 'd-checkbox'
      },
      {
        name: 'screw_in',
        text: 'Screw-In Filters',
        component: 'd-checkbox'
      },
      { space: true },
      {
        name: 'size',
        text: 'Size',
        list: [
          { value: undefined },
          { value: '25mm' },
          { value: '27mm' },
          { value: '28mm' },
          { value: '30mm' },
          { value: '34mm' },
          { value: '37mm' },
          { value: '40mm' },
          { value: '43mm' }
        ],
        component: 'd-select'
      },
      {
        buttonAdaptive: 'block',
        name: 'density',
        text: 'Density',
        list: [
          { value: 0.3 },
          { value: 0.6 },
          { value: 0.9 },
          { value: 1 },
          { value: 1.2 },
          { value: 2 }
        ],
        component: 'd-select-filter'
      }
    ]
  }
]
