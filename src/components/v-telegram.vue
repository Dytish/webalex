<template>
  <div class="v-telegram">
    <v-slider
    :onChoose="onChoose" />
    <!-- <img :src="img" alt="non"> -->
    <button class="choose" @click="onChoose = true">choose</button>
  </div>
</template>

<script>
import vSlider from './v-slider.vue'

import '../assets/styles/style.css';

export default {
  name: 'vTelegram',
  data () {
    return {
      onChoose: false,
      img: null,
    }
  },
  components: {
    vSlider
  },
  props: {
    msg: String
  },
  beforeCreate(){
    // this.$store.dispatch('getWorkers').then(() => {
    //   // this.getBots(bot.res);
    //   // this.img = JSON.parse(localStorage.getItem("logo"));
    //   this.img = localStorage.getItem("workers");
    //   this.loading = false;
    //     })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
