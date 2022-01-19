<template>
  <div class="ui-sector">
    <nav/>
    <div class="ui-sector__main">
      <header>
        <span class="font:headline6 pr-4">dc-UI</span>
        <interactive-demo-router/>
        <div class="flex-grow"/>
        <interactive-demo-theme/>
        <interactive-demo-color/>
      </header>
      <main>
        <router-view/>
      </main>
      <footer>&copy; 2021 - 2022 dcode</footer>
    </div>
  </div>
</template>

<script>
import InteractiveDemoColor from '@/./components/InteractiveDemo/InteractiveDemoColor'
import InteractiveDemoRouter from '@/./components/InteractiveDemo/InteractiveDemoRouter'
import InteractiveDemoTheme from '@/./components/InteractiveDemo/InteractiveDemoTheme'

export default {
  name: 'App',
  components: {
    InteractiveDemoColor,
    InteractiveDemoRouter,
    InteractiveDemoTheme
  }
}
</script>
