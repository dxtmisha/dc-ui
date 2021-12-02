<template>
  <header>
    <div class="flex-grow"></div>
    <interactive-demo-color/>
    <interactive-demo-theme/>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<script>
import InteractiveDemoColor from '@/components/InteractiveDemo/InteractiveDemoColor'
import InteractiveDemoTheme from '@/components/InteractiveDemo/InteractiveDemoTheme'

export default {
  name: 'App',
  components: {
    InteractiveDemoColor,
    InteractiveDemoTheme
  }
}
</script>
