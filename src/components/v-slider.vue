<template>
  <!-- v-if="showInfo === false" -->
    <div  class="v-slider style-slider" >
      
        <v-slider-info
        :showInfo="showInfo"
        :info="questionnaires[activeIndex]"
        :Tg="Tg"
        @showInformation="showInformation"
        v-if="showInfo"/>
        <!-- :freeMode= "{
              enabled: true, 
              sticky: true 
            }" -->
        <swiper 
            :initialSlide = activeIndex
            :loop= "true"
            :slidesPerView="1"
            :spaceBetween="30" 
            :pagination="{
                dynamicBullets: true,
                clickable: true,
            }"
            :navigation= "true"
            :modules= "modules" 
    
            @transitionEnd="onSlideNoStop"
            @slideChange="onSlideChange"
            @doubleClick="onDoubleClick"
            
            class="mySwiper style-slider"
            v-if="showInfo === false">
            <swiper-slide  v-for="(questionnaire, index) in questionnaires"
                v-bind:key="index">
                <div class="slider">
                  <!-- :poster="require('../../pkg/images/vigeoOff.jpg') " -->
                    <!-- <img  :src= "foto.img" alt="non"> -->

                  <video v-if="questionnaire.images[0].name.split('.').pop() == 'webm'"
                  class="style-slider slider-img"
                  controls loop
                  :poster="require('../../pkg/images/vigeoOff.jpg')"
                  @canplay="updatePaused(index, $event)" @playing="updatePaused(index, $event)" 
                  >
                      <source :src=questionnaire.images[0].url type="video/webm" />
                  </video>
                  <img v-else
                  class=" style-slider slider-img" :src= questionnaire.images[0].url  alt="non">
                  <!-- require('../../pkg/images/' + questionnaire.images1[0]) -->
                <!-- <img class=" style-slider" :src= " require('../assets/foto/' + foto.img) " alt="non"> -->
                  <div class="info">
                      <h1>{{ questionnaire.title }}</h1>
                      <svg @click="showInformation(true)"
                        viewBox="0 0 1024.00 1024.00"  
                        class="info_more " 
                        xmlns="http://www.w3.org/2000/svg"  
                        stroke-width="102.4">
                        <path  d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z" />
                        </svg>
                      <p v-html="questionnaire.previe"></p>
                        
                  </div>
                </div>
            </swiper-slide>
        </swiper>
    
    </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
// пока что либо free-mode либо зацикленный слайд, настроить можно, 
// но скорее всего придется прописывать перелистывание слайдов и устанавливать события
// (муторно, и не факт что нужно)

import '../assets/styles/style.css';

// import required modules
import { Pagination, FreeMode, Navigation } from 'swiper';

import vSliderInfo from './v-slider-info.vue'
export default {
  name: 'vSlider',
  data () {
    return {
      showInfo :false,
      activeIndex : 0,
      onChoose: false,
      videoElement: null,
      paused: null
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    vSliderInfo,
  },
  props: {
    questionnaires: {
        type: Object,
        default: () => {}
    },
    Tg:{
        type: Object,
        default: () => {}
    },
  },
  setup() {
    const onDoubleClick = () => {
        // console.log('onDoubleClick');
        // console.log(event);
    };
    const onSlideChange = () => {
        // console.log('slide change');
        // swiper.slideTo( индекс , скорость , runCallbacks )
    };
    return {
      modules: [ Pagination, FreeMode, Navigation],
      onSlideChange,
      onDoubleClick,
    };
  },
  computed:{
    swiper() {
      return this.$refs.Swiper.swiper
    }
  },
  mounted() {
    // console.log(this);
    // console.log('swiper', this.swiper);
  },
  beforeCreate(){
    // console.log(this.workers)
  },
  methods:{
    updatePaused(index, event) {
      this.videoElement = event.target;
      this.paused = index;
    },
    showInformation(showInfo){
        this.showInfo = showInfo
    },
    onSlideNoStop(swiper){
        // console.log(swiper.realIndex);
        if ( !isNaN(swiper.realIndex)){
          this.activeIndex = swiper.realIndex;
        }
        else{
          swiper.realIndex = this.activeIndex;
        }
        // console.log(swiper.realIndex);
    },
  },
  watch:{
    activeIndex(){
      if (this.videoElement != null){
        if (this.activeIndex != this.paused){
        this.videoElement.pause();
        }
      }
    },
    // onChoose(){
    //   if (this.onChoose == true){
    //     console.log(this.fotos[this.activeIndex].title);
    //     this.Tg.sendData(this.fotos[this.activeIndex].title);
    //   }
    // },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
