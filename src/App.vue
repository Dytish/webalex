<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <v-telegram/>
</template>

<script>
import vTelegram from './components/v-telegram.vue'

export default {
  name: 'App',
  components: {
    vTelegram
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
