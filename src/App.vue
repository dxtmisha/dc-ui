<template>
  <div class="ui-sector">
    <nav/>
    <div class="ui-sector__main">
      <header>
        <a href="/" class="a-static font:headline6 pr-4">dc-UI</a>
        <interactive-demo-router/>
        <div class="flex-grow"/>
        <interactive-demo-direction/>
        <interactive-demo-theme/>
        <interactive-demo-color/>
      </header>
      <main>
        <router-view/>
      </main>
      <footer>
        <d-clipboard class="ui-git" icon="lab-github" value="https://github.com/dxtmisha/dc-ui.git"/>
        <d-clipboard class="ui-git" icon="lab-npm" value="npm i dcode"/>
        <div class="ui-copy">
          <div>2021 - 2022 dxtmisha</div>
        </div>
      </footer>
    </div>
    <div class="ui-filter"/>
  </div>
</template>

<script>
import InteractiveDemoColor from '@/./components/InteractiveDemo/InteractiveDemoColor'
import InteractiveDemoDirection from '@/components/InteractiveDemo/InteractiveDemoDirection'
import InteractiveDemoRouter from '@/./components/InteractiveDemo/InteractiveDemoRouter'
import InteractiveDemoTheme from '@/./components/InteractiveDemo/InteractiveDemoTheme'
import DClipboard from '../components/DClipboard'

export default {
  name: 'App',
  components: {
    DClipboard,
    InteractiveDemoColor,
    InteractiveDemoDirection,
    InteractiveDemoRouter,
    InteractiveDemoTheme
  }
}
</script>
