<template>
    <div  class="v-slider style-slider">
        <v-slider-info
        :showInfo="showInfo"
        :info="fotos[activeIndex]"
        @showInformation="showInformation"/>
        <swiper 
            
            :freeMode= "{
              enabled: true, 
              sticky: true 
            }"
            
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
                <img class=" style-slider" :src= " require('../assets/foto/' + foto.img) " alt="non">
                <div class="info">
                    <h1>{{ foto.title }}</h1>
                    <p> {{ foto.previe }} </p>
                      <svg @click="showInfo=true"
                      viewBox="0 0 1024.00 1024.00"  
                      class="info_more " 
                      xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" 
                       stroke-width="102.4">
                      <path  d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z" />
                      </svg>
                    
                    <!-- <svg  class="info_more" @click="showInfo=true" >"../assets/foto/moreUp.svg" </svg> -->
                    <!-- <object class="info_more" type="svg" data="../assets/foto/moreUp.svg" ></object> -->
                    <!-- <p class="info_more" @click="showInfo=true">more</p> -->
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
      fotos: [{id: 0, img: 'color.png', title: 'Оксана', previe: '12вы', info: 'доп информация'},
              {id: 1, img: 'vershiny_uedinenie.jpg', title: 'Оля', previe: '11', info: 'доп информация 23'},
              {id: 2, img: 'Рисунок1.jpg', title: 'Света', previe: '233', info: 'доп информация 342в'},
              {id: 3, img: 'vershiny_uedinenie.jpg', title: 'Ира', previe: '12', info: 'доп информация 223а3'}],
      showInfo :false,
      activeIndex :0,
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    vSliderInfo,
  },
  props: {
    onChoose: Boolean,
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
    // onChoose(){
    //     console.log(this.activeIndex);
    // },
  },
  watch:{
    onChoose(){
      if (this.onChoose == true){
        console.log(this.activeIndex);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
