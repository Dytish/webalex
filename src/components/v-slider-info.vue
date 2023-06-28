<template>
    <div  class="v-slider-info style-slider"
    v-bind:class="{ show: showInfo }">
    <div class="slider" 
    v-if="showInfo">
        <svg @click="showInformation(!showInfo)"
          viewBox="0 0 1024.00 1024.00"  
          class="info_more " 
          xmlns="http://www.w3.org/2000/svg" 
            stroke-width="102.4">
          <path  d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z" />
        </svg>
        <div class="info">
          <img class=" style-slider" :src= " require('../assets/foto/' + info.img) " alt="non">
            <h1>{{ info.title }}</h1>
            <p> {{ info.previe }} </p>
            <hr class="hr-shelf">
            <p> {{ info.info }}</p>
        </div>
        </div>
      <!-- <div class="information "
        v-if="showInfo">
        <p class="info_more" @click="showInformation(!showInfo)">more</p>
        <p class="info">{{ info.info }}</p>
      </div> -->
    </div>
</template>

<script>



import '../assets/styles/style.css';

export default {
  name: 'vSliderInfo',
  data () {
    return {
    }
  },
  components: {
  },
  props: {
    info: Object,
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
