<template>
  <header class="id-header">
    <interactive-demo-theme/>
  </header>
  <main class="id-main">
    <router-view/>
  </main>
</template>

<script>
import InteractiveDemoTheme from '@/--components/InteractiveDemo/InteractiveDemoTheme'

export default {
  name: 'App',
  components: { InteractiveDemoTheme }
}
</script>

<style lang="scss">
@import "styles/dimension";

.id-header {
  background-color: var(--background-type1);
  padding: dimension(2) dimension(4);
}
</style>
