# Material design from @dxtmisha

## Install a Vue plugin
```
import dcode from 'dcode'

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
@include initDark(); // Dark theme (not necessary)
```
