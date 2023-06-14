<template>
  <div class="v-telegram">
    <v-slider/>
  </div>
</template>

<script>
import vSlider from './v-slider.vue'
export default {
  name: 'vTelegram',
  components: {
    vSlider
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
