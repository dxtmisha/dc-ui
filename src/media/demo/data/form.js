export default [
  {
    class: 'col-span-1 grid-cols-1',
    text: 'Profile',
    section: 'profile',
    fields: [
      {
        class: 'col-span-1',
        name: 'avatar',
        text: 'Avatar',
        component: 'd-avatar'
      },
      {
        class: 'col-span-1',
        html: `
<div class="flex flex-col items-center justify-center pt-2 px-4 pb-2">
    <div class="font:headline6">Loretta Kelley</div>
    <div class="font:body2 pt-1 opacity-60">+7 (902) 334-33-33</div>
</div>
`
      }
    ]
  },
  {
    class: 'col-span-1 lg:col-span-2 grid-cols-2',
    text: '&nbsp;',
    section: 'basic-info',
    fields: [
      {
        class: 'col-span-1',
        name: 'first-name',
        text: 'First name',
        required: true
      },
      {
        class: 'col-span-1',
        name: 'last-name',
        text: 'Last name',
        required: true
      },
      {
        class: 'col-span-2',
        name: 'tittle',
        text: 'Tittle',
        helperMessage: 'Enter your tittle'
      },
      {
        class: 'col-span-2',
        name: 'birthday',
        text: 'Birthday',
        icon: 'cake',
        component: 'd-date'
      },
      {
        class: 'col-span-1',
        name: 'email',
        text: 'Email',
        icon: 'alternate_email',
        helperMessage: 'Enter your email',
        type: 'email',
        autocomplete: 'email',
        required: true
      },
      {
        class: 'col-span-1',
        name: 'phone',
        text: 'Phone number',
        mask: '+7 (***) ***-**-**',
        autocomplete: 'tel',
        required: true
      },
      {
        class: 'col-span-2',
        line: true
      },
      {
        class: 'col-span-2',
        subtitle: 'About me'
      },
      {
        class: 'col-span-2',
        name: 'biography',
        text: 'Biography',
        component: 'd-textarea'
      },
      {
        class: 'col-span-2',
        name: 'album',
        text: 'Album',
        required: true,
        component: 'd-file'
      },
      {
        class: 'col-span-2',
        line: true
      },
      {
        class: 'col-span-2',
        subtitle: 'Security'
      },
      {
        class: 'col-span-2',
        name: 'password',
        text: 'Password',
        icon: 'password',
        type: 'password'
      }
    ]
  }
]
