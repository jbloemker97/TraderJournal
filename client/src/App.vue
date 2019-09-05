<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/global/NavBar'
import Footer from './components/global/Footer'

export default {
  name: 'app',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>

</style>
