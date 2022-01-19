import getRandom from '../../../../functions/getRandom'

export const action = [
  {
    icon: 'content_cut',
    value: 'cut'
  },
  {
    icon: 'content_copy',
    value: 'copy'
  },
  {
    icon: 'content_paste',
    value: 'paste'
  }
]

export const bar = [
  {
    icon: 'notifications',
    value: 'notifications'
  },
  {
    icon: 'chat',
    value: 'chat',
    badge: 16
  }
]

export const bottomNavigation = [
  {
    text: 'Favorites',
    icon: 'favorite',
    value: 'favorites',
    href: '#favorites'
  },
  {
    text: 'Music',
    icon: 'music_note',
    value: 'music',
    href: '#music'
  },
  {
    text: 'Places',
    icon: 'place',
    value: 'places',
    href: '#places'
  },
  {
    text: 'News',
    icon: 'newspaper',
    value: 'news',
    href: '#news'
  }
]

export const menu = [
  {
    html: `
<div class="flex flex-col items-center justify-center pt-8 px-4 pb-12">
    <div class="w-32 h-32 rounded-full" style="background-image: url(${require('@/assets/images/image-10.jpeg')})"></div>
    <div class="font:headline6 pt-4">Loretta Kelley</div>
    <div class="font:body2 pt-1 opacity-60">+7 (902) 334-33-33</div>
</div>
`
  },
  {
    text: 'Home',
    value: 'home',
    icon: 'home',
    href: '#home'
  },
  {
    text: 'Find friends',
    value: 'find_friends',
    icon: 'people',
    href: '#find_friends'
  },
  {
    text: 'Notifications',
    value: 'notifications',
    icon: 'notifications',
    href: '#notifications'
  },
  {
    text: 'Messages',
    value: 'messages',
    icon: 'message',
    list: {
      inbox: 'Inbox',
      sent: 'Sent',
      trash: 'Trash',
      draft: 'Drafts'
    }
  },
  {
    text: 'Profile',
    value: 'profile',
    icon: 'account_circle'
  },
  {
    line: true
  },
  {
    subtitle: 'Others'
  },
  {
    text: 'Help and feedback',
    value: 'help_and_feedback',
    icon: 'help'
  },
  {
    text: 'Support',
    value: 'support',
    icon: 'support'
  },
  {
    text: 'History',
    value: 'history',
    icon: 'history'
  },
  {
    text: 'Chat',
    value: 'chat',
    icon: 'chat',
    menu: [
      {
        text: 'Joseph Fox',
        value: 'image-01',
        thumbnail: require('@/assets/images/image-01.jpeg')
      },
      {
        text: 'Joseph Johnson',
        value: 'image-02',
        thumbnail: require('@/assets/images/image-02.jpeg')
      },
      {
        text: 'Vera Campbell',
        value: 'image-03',
        thumbnail: require('@/assets/images/image-03.jpeg')
      },
      {
        text: 'Patricia Edwards',
        value: 'image-04',
        thumbnail: require('@/assets/images/image-04.jpeg')
      },
      {
        text: 'More',
        value: 'more',
        menu: [
          {
            text: 'Frederick Mitchell',
            value: 'image-05',
            thumbnail: require('@/assets/images/image-05.jpeg')
          },
          {
            text: 'Roberto Reeves',
            value: 'image-06',
            thumbnail: require('@/assets/images/image-06.jpeg')
          },
          {
            text: 'Julie Bowman',
            value: 'image-07',
            thumbnail: require('@/assets/images/image-07.jpeg')
          },
          {
            text: 'Roberta Collier',
            value: 'image-08',
            thumbnail: require('@/assets/images/image-08.jpeg')
          },
          {
            text: 'Armando Schwartz',
            value: 'image-09',
            thumbnail: require('@/assets/images/image-09.jpeg')
          },
          {
            text: 'Christopher Daniels',
            value: 'image-10',
            thumbnail: require('@/assets/images/image-10.jpeg')
          },
          {
            text: 'Brenda Thompson',
            value: 'image-11',
            thumbnail: require('@/assets/images/image-11.jpeg')
          },
          {
            text: 'Phyllis Webb',
            value: 'image-12',
            thumbnail: require('@/assets/images/image-12.jpeg')
          }
        ]
      }
    ],
    menuProps: { size: 'large' }
  },
  { space: true },
  {
    text: 'Setting',
    value: 'setting',
    icon: 'settings'
  },
  {
    text: 'Interactive demo',
    value: 'interactive-demo',
    icon: 'show_chart'
  }
]

export const menuMin = [
  {
    text: 'Home',
    value: 'home',
    icon: 'home',
    href: '#home'
  },
  {
    text: 'Find friends',
    value: 'find_friends',
    icon: 'people',
    href: '#find_friends'
  },
  {
    text: 'Notifications',
    value: 'notifications',
    icon: 'notifications',
    href: '#notifications'
  },
  {
    text: 'Profile',
    value: 'profile',
    icon: 'account_circle'
  }
]

export const menuSimplified = [
  {
    text: 'Home',
    icon: 'home',
    value: 'home',
    href: '#home'
  },
  {
    text: 'Find friends',
    value: 'find_friends',
    href: '#find_friends'
  },
  {
    text: 'Messages',
    value: 'messages',
    menu: {
      inbox: 'Inbox',
      sent: 'Sent',
      trash: 'Trash',
      draft: 'Drafts'
    }
  },
  {
    text: 'Profile',
    value: 'profile'
  }
]

export const page = [
  {
    icon: 'keyboard_arrow_left',
    text: 'Left',
    href: '#page-left',
    value: 'page-left',
    readonly: true
  },
  {
    text: '1',
    href: '#page-1',
    value: 'page-1'
  },
  {
    text: '2',
    href: '#page-2',
    value: 'page-2'
  },
  {
    text: '3',
    href: '#page-3',
    value: 'page-3'
  },
  {
    text: '4',
    href: '#page-4',
    value: 'page-4'
  },
  {
    text: '5',
    href: '#page-5',
    value: 'page-5'
  },
  {
    icon: 'keyboard_arrow_down',
    text: 'Down',
    href: '#page-down',
    value: 'page-down',
    menu: {
      6: '6',
      7: '7',
      8: '8',
      9: '9'
    },
    menuProps: {}
  },
  {
    iconTrailing: 'keyboard_arrow_right',
    text: 'Right',
    href: '#page-right',
    value: 'page-right',
    readonly: true
  }
]

export const tableHeaders = [
  {
    text: 'Name',
    value: 'name',
    sort: true
  },
  {
    text: 'Policy',
    value: 'policy',
    align: 'right',
    sort: true
  },
  {
    text: 'Status',
    value: 'status',
    sort: true
  },
  {
    text: 'City',
    value: 'city',
    sort: true
  }
]

export const tableItems = (count = 128 * 2) => {
  const items = []
  const status = [
    'Approved',
    'Awaiting Approval',
    'Rejected',
    'Early Stages'
  ]
  const colors = [
    'material-green',
    'material-amber',
    'material-red',
    'material-blue'
  ]
  const names = [
    'Renee Jenkins',
    'Andrea Harvey',
    'Carl Jenkins',
    'Joyce Hall',
    'Walter Estrada',
    'Benjamin Brown',
    'Jamie Robinson',
    'Dean Munoz',
    'Hazel Pope',
    'Mary Barber',
    'Nina Hopkins',
    'Sally Harvey',
    'Dwight McCoy',
    'Jessica Gomez',
    'Larry Henderson',
    'Gregory Hill',
    'Michael Williams',
    'Потапов Андрей',
    'Тихомирова Ярослава',
    'Галкина Злата',
    'Жданов Дмитрий',
    'Сомов Андрей',
    'Федотов Кирилл',
    'Савельев Мирон',
    'Королев Александр',
    'Ермолов Александр',
    'Боброва Любовь'
  ]
  const city = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose'
  ]
  const icons = [
    'lock_open',
    'lock',
    'arrow_drop_down',
    'search',
    'home',
    'delete',
    require('@/assets/images/thumbnails/image-01-icon.jpeg'),
    require('@/assets/images/thumbnails/image-02-icon.jpeg'),
    require('@/assets/images/thumbnails/image-03-icon.jpeg'),
    require('@/assets/images/thumbnails/image-04-icon.jpeg'),
    require('@/assets/images/thumbnails/image-05-icon.jpeg'),
    require('@/assets/images/thumbnails/image-06-icon.jpeg'),
    require('@/assets/images/thumbnails/image-07-icon.jpeg'),
    require('@/assets/images/thumbnails/image-08-icon.jpeg'),
    require('@/assets/images/thumbnails/image-09-icon.jpeg'),
    require('@/assets/images/thumbnails/image-10-icon.jpeg'),
    require('@/assets/images/thumbnails/image-11-icon.jpeg'),
    require('@/assets/images/thumbnails/image-12-icon.jpeg')
  ]

  for (let i = 0; i < count; i++) {
    const itemStatus = getRandom(0, 3)

    items.push({
      icon: icons[getRandom(0, icons.length - 1)],
      status: status[itemStatus],
      color: colors[itemStatus],
      name: names[getRandom(0, names.length - 1)],
      id: 10001 + i,
      value: 10001 + i,
      policy: `$${getRandom(10, 99)}00.00`,
      city: city[getRandom(0, city.length - 1)],
      age: getRandom(18, 64)
    })
  }

  return items
}

export const tableCards = (count = 3) => {
  const items = []
  const names = [
    'Renee Jenkins',
    'Andrea Harvey',
    'Carl Jenkins',
    'Christopher Hill',
    'Sherry Wolfe',
    'Jessie Lee',
    'Андрианов Илья Матвеевич'
  ]
  const descriptions = [
    'Ceteros assentior omittantur cum ad',
    'Tation delenit percipitur at vix',
    'Per cu iracundia splendide',
    'Sale liber et vel',
    'Ceteros assentior omittantur cum ad'
  ]
  const images = [
    require('@/assets/images/image-01.jpeg'),
    require('@/assets/images/image-02.jpeg'),
    require('@/assets/images/image-03.jpeg'),
    require('@/assets/images/image-04.jpeg'),
    require('@/assets/images/image-05.jpeg'),
    require('@/assets/images/image-06.jpeg'),
    require('@/assets/images/image-07.jpeg'),
    require('@/assets/images/image-08.jpeg'),
    require('@/assets/images/image-09.jpeg'),
    require('@/assets/images/image-11.jpeg')
  ]
  const texts = [
    'Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui.',
    'Vix paulo sanctus scripserit ex, te iriure insolens voluptatum qui.',
    'Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui.',
    'Eu cum iuvaret debitis voluptatibus, esse perfecto reformidans id has.',
    'Vix paulo sanctus scripserit ex, te iriure insolens voluptatum qui.',
    'Solum vituperata definitiones te vis, vis alia falli doming ea.',
    'Vix paulo sanctus scripserit ex, te iriure insolens voluptatum qui.'
  ]

  for (let i = 0; i < count; i++) {
    items.push({
      title: names[getRandom(0, names.length - 1)],
      description: descriptions[getRandom(0, 4)],
      text: texts[getRandom(0, texts.length - 1)],
      bar: [{ text: 'Order now' }],
      barAction: [
        { icon: 'favorite' },
        { icon: 'share' }
      ],
      thumbnail: images[getRandom(0, images.length - 1)]
    })
  }

  return items
}
