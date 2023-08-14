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
            :loop='true'
            :slidesPerView="1"
            :spaceBetween="30" 
            :pagination="{
                dynamicBullets: true,
                clickable: true,
            }"
            :navigation="true"
            :modules="modules" 
    
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
                    
                    <video v-if="questionnaire.images[0].split('.').pop() == 'mp4'" 
                    tabindex="-1" class="style-slider slider-img" 
                    data-no-fullscreen="true" 
                    controlslist="nodownload" 
                    :src="require('../../pkg/images/' + questionnaire.images[0]) " loop="">
                    </video>
                  <!-- <video v-if="questionnaire.images[0].split('.').pop() == 'mp4'" 
                  class=" style-slider slider-img" 
                  :src= "require('../../pkg/images/' + questionnaire.images[0]) " type="video/webm" 
                  controlslist="nodownload" data-no-fullscreen="true"
                  loop
                  controls></video> -->
                  <img v-else
                  class=" style-slider slider-img" :src= "require('../../pkg/images/' + questionnaire.images[0]) " alt="non">
                  
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
      fotos: [{id: 0, img: 'color.png', title: 'Оксана', previe: '12вы', info: 'доп информация рррррр пропор рролор ллор ррр ы \n пропро uuuuuuuuuuuuuuuuuusdfsdfs wsdsds sd      dsd sdsd   sdsd     sdfsd fsdf   sd fs  sd sd fsa fs fsf uuuuuuuuuuuuuuuuuusdfsdfs wsdsds sd      dsd sdsd   sdsd     sdfsd fsdf   sd fs  sd sd fsa fs fsf uuuuuuuuuuuuuuuuuusdfsdfs wsdsds sd      dsd sdsd   sdsd     sdfsd fsdf   sd fs  sd sd fsa fs fsf uuuuuuuuuhhjhjkh jhjkhjh    hjjkhjk  hghjj jhhhhj hhhhhhh hhhhhj    ghjg  ghj ggjj jjj uiuhh hjhjkjhjh jjjjjjj jjjkkjjj kjj gf gggggg hhhgffb hhhh    ппппррпп', messege: {telegram: "https://t.me/BigCHguS", whathap: "https://t.me/Mi28df"}},
              {id: 1, img: 'photo_2.jpg', title: 'Оля', previe: '11', info: 'доп информация 23', messege: {telegram: "https://t.me/BigCHguS", telegram1: "https://t.me/BigCHguS", telegram2: "https://t.me/BigCHguS"}},
              {id: 2, img: 'Рисунок1.jpg', title: 'Света', previe: '233', info: 'доп информация 342в'},
              {id: 3, img: 'vershiny_uedinenie.jpg', title: 'Ира', previe: '12', info: 'доп информация 223а3', messege: { whathap: "https://t.me/Mi28df"}}],
      showInfo :false,
      activeIndex :0,
      onChoose: false,
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
  beforeCreate(){
    // console.log(this.workers)
  },
  methods:{
    showInformation(showInfo){
        this.showInfo = showInfo
    },
    onSlideNoStop(swiper){
        // console.log(swiper.realIndex);
        if ( !isNaN(swiper.realIndex)){
          this.activeIndex = swiper.realIndex;
        }
        // swiper.slideTo( индекс , скорость , runCallbacks )
    },
  },
  watch:{
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
