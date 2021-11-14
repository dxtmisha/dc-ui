<template>
  <interactive-demo-theme/>
  <main>
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
