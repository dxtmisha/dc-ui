export const menu = [
  {
    html: `
<div class="flex"></div>
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
        thumbnail: require('@/assets/images/image-01.jpeg')
      },
      {
        text: 'Joseph Johnson',
        thumbnail: require('@/assets/images/image-02.jpeg')
      },
      {
        text: 'Vera Campbell',
        thumbnail: require('@/assets/images/image-03.jpeg')
      },
      {
        text: 'Patricia Edwards',
        thumbnail: require('@/assets/images/image-04.jpeg')
      },
      {
        text: 'Frederick Mitchell',
        thumbnail: require('@/assets/images/image-05.jpeg')
      },
      {
        text: 'Roberto Reeves',
        thumbnail: require('@/assets/images/image-06.jpeg')
      },
      {
        text: 'Julie Bowman',
        thumbnail: require('@/assets/images/image-07.jpeg')
      },
      {
        text: 'Roberta Collier',
        thumbnail: require('@/assets/images/image-08.jpeg')
      },
      {
        text: 'Armando Schwartz',
        thumbnail: require('@/assets/images/image-09.jpeg')
      },
      {
        text: 'Christopher Daniels',
        thumbnail: require('@/assets/images/image-10.jpeg')
      }
    ],
    attrsMenu: { size: 'large' }
  },
  {
    text: 'Setting',
    value: 'setting',
    icon: 'settings'
  }
]
