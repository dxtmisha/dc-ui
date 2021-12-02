<template>
  <header>
    <span class="font:headline6 pr-4">dcode UI</span>
    <interactive-demo-router/>
    <div class="flex-grow"/>
    <interactive-demo-theme/>
    <interactive-demo-color/>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>&copy; 2021 dcode</footer>
</template>

<script>
import InteractiveDemoColor from '@/components/InteractiveDemo/InteractiveDemoColor'
import InteractiveDemoRouter from '@/components/InteractiveDemo/InteractiveDemoRouter'
import InteractiveDemoTheme from '@/components/InteractiveDemo/InteractiveDemoTheme'

export default {
  name: 'App',
  components: {
    InteractiveDemoColor,
    InteractiveDemoRouter,
    InteractiveDemoTheme
  }
}
</script>
