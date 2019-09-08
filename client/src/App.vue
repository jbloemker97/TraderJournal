<template>
  <div id="app">
    <NavBar />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Footer from './components/global/Footer';
import NavBar from './components/global/NavBar'

export default {
  name: 'app',
  components: {
    Footer,
    NavBar
  }
}
</script>

<style>

</style>
