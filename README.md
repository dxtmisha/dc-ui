# Material design from @dxtmisha

Demo on [ui.f56go.com](http://ui.f56go.com).

## Install a Vue plugin

```
import dcode from 'dcode'
import dcode from 'dcode/init' // without component

Translation.init({
  'en-GB': [
    () => import('dcode/translations/dc-ui/en-GB.json'),
    () => import('...'),
    ...
  ],
  ...
})
  .then(() =>
    createApp(App)
      ...
      .use(dcode)
      .mount('#app')
  )
```

### Install style

```
@import "~dcode/design/m2-baseline/init";
@import "~dcode/design/m2-dark/init";

@include init();
@include initDark(); // dark theme (not necessary)
```
