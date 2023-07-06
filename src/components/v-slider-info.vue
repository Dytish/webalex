<template>
  
    <div  class="v-slider-info">
      
      <div class="slider" >
        <img class=" style-slider" :src= " require('../assets/foto/' + info.img) " alt="non">
          <!-- <img class=" style-slider" :src= "info.img" alt="non"> -->
        <div class="info">
          <div class="dop-info">
          <h1>{{ info.title }}</h1>
          <p> {{ info.previe }} </p>
        </div>
          <Transition name="info">
          <div class="dop-info"
          v-if="showDopInfo">
            <hr class="hr-shelf">
            <a href="@Mi28df">dsadasdas</a>
            <p> {{ info.info }}</p>
            <a href="https://t.me/Mi28df">dsadasdas</a>
          </div>
        </Transition>
          <svg @click="showInformation(!showInfo)"
          viewBox="0 0 1024.00 1024.00"  
          class="info_more " 
          xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"
            stroke-width="102.4">
          <path  d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z" />
        </svg>
        </div>
        </div>
  
    </div>
 
</template>

<script>



import '../assets/styles/style.css';

export default {
  name: 'vSliderInfo',
  data () {
    return {
      showDopInfo: false,
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
      this.showDopInfo = showInfo;
      setTimeout(() => {
        this.$emit('showInformation', showInfo);
      }, 300);
      
    }
  },
  mounted() {
    this.showDopInfo = this.showInfo;
  },
  
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
