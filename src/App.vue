<template>
  <!-- <img alt="Vue logo" :src= "require('../pkg/images/' + img) " > -->
  <!-- <img alt="Vue logo" :src= "require('./pkg/images/' + img) " > -->
  <!-- <img alt="Vue logo" :src= "require('./' + img)" > -->
  <v-telegram/>
</template>

<script>
import vTelegram from './components/v-telegram.vue'

export default {
  name: 'App',
  components: {
    vTelegram
  },
  data () {
  return {
    img: "logo.png"
  }
},
}
</script>

<style>
/* #app { */
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  /* margin-top: 60px; */
/* } */
</style>
