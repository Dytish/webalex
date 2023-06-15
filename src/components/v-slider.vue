<template>
    <div  class="v-slider style-slider">
        <v-slider-info
        :showInfo="showInfo"
        :info="info"
        @showInformation="showInformation"/>
        <swiper 
            
            :freeMode="true"
            :loop='true'
            :slidesPerView="1"
            :spaceBetween="30" 
            :pagination="{
                dynamicBullets: true,
                clickable: true,
            }"
            :modules="modules" 
    
            @transitionEnd="onSlideNoStop"
            @slideChange="onSlideChange"
            @doubleClick="onDoubleClick"
            class="mySwiper style-slider">
            <swiper-slide  v-for="(foto, index) in fotos"
                v-bind:key="index">
                <!-- <p>{{ foto }}</p> -->
                <div class="slider">
                <img  :src= " require('../assets/foto/' + foto) " alt="non">
                <div class="info">
                    <h1>Name</h1>
                    <p>information</p>
                    <p class="info_more" @click="showInfo=true">more</p>
                </div>
                </div>
            </swiper-slide>
        </swiper>
        <button @click="onChoose">choose</button>
    </div>
</template>

<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
// пока что либо free-mode либо зацикленный слайд, настроить можно, 
// но скорее всего придется прописывать перелистывание слайдов и устанавливать события
// (муторно, и не факт что нужно)
import '../assets/styles/style.css';

// import required modules
import { Pagination, FreeMode } from 'swiper';

import vSliderInfo from './v-slider-info.vue'
export default {
  name: 'vSlider',
  data () {
    return {
      fotos: ['color.png', 'vershiny_uedinenie.jpg', 'Рисунок1.jpg', 'vershiny_uedinenie.jpg',],
      info: "information",
      showInfo :false,
      activeIndex :0,
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    vSliderInfo,
  },
  setup() {
    const onDoubleClick = () => {
        console.log('onDoubleClick');
        console.log(event);
    };
    const onSlideChange = () => {
        console.log('slide change');
        // swiper.slideTo( индекс , скорость , runCallbacks )
    };
    return {
      modules: [ Pagination, FreeMode],
      onSlideChange,
      onDoubleClick,
    };
  },
  methods:{
    showInformation(showInfo){
        this.showInfo = showInfo
    },
    onSlideNoStop(swiper){
        console.log(swiper.realIndex);
        this.activeIndex = swiper.realIndex;
        // swiper.slideTo( индекс , скорость , runCallbacks )
    },
    onChoose(){
        console.log(this.activeIndex);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
