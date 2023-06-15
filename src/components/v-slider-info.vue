<template>
    <div  class="v-slider-info style-slider"
    v-bind:class="{ show: showInfo }">
      <div class="information "
        v-if="showInfo">
        <p class="info_more" @click="showInformation(!showInfo)">more</p>
        <p>{{ info }}</p>
      </div>
    </div>
</template>

<script>



import '../assets/styles/style.css';

export default {
  name: 'vSliderInfo',
  data () {
    return {
      fotos: ['color.png', 'vershiny_uedinenie.jpg', 'Рисунок1.jpg']
    }
  },
  components: {
  },
  props: {
    info: String,
    showInfo: Boolean
  },
  methods:{
    showInformation(showInfo){
        this.$emit('showInformation', showInfo)
    }
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
