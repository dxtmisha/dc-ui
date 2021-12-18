export default [
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
  }
]
