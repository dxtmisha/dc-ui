export default [
  {
    class: 'basis-1/3',
    text: 'Profile',
    section: 'profile',
    fields: [
      {
        name: 'avatar',
        text: 'Avatar',
        component: 'd-avatar'
      },
      {
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
    class: 'basis-2/3',
    text: '&nbsp;',
    section: 'basic-info',
    fields: [
      {
        class: 'basis-1/3',
        name: 'first-name',
        text: 'First name',
        required: true
      },
      {
        class: 'basis-1/3',
        name: 'last-name',
        text: 'Last name',
        required: true
      },
      {
        name: 'tittle',
        text: 'Tittle',
        helperMessage: 'Enter your tittle'
      },
      {
        name: 'birthday',
        text: 'Birthday',
        icon: 'cake',
        component: 'd-date'
      },
      {
        class: 'basis-2',
        name: 'email',
        text: 'Email',
        icon: 'alternate_email',
        helperMessage: 'Enter your email',
        type: 'email',
        autocomplete: 'email',
        required: true
      },
      {
        class: 'basis-2',
        name: 'phone',
        text: 'Phone number',
        mask: '+7 (***) ***-**-**',
        autocomplete: 'tel',
        required: true
      },
      { line: true },
      { subtitle: 'About me' },
      {
        name: 'biography',
        text: 'Biography',
        component: 'd-textarea'
      },
      {
        name: 'album',
        text: 'Album',
        required: true,
        component: 'd-file'
      },
      { line: true },
      { subtitle: 'Security' },
      {
        class: 'basis-2',
        name: 'password',
        text: 'Password',
        icon: 'password',
        type: 'password'
      }
    ]
  }
]
