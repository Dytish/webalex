<template>
  
  <div  class="v-slider-info">
    <Transition name="info_img" mode="out-in">
    <div class="slider" :key="showInfo">
      <swiper 
            :initialSlide = activeIndex
            :loop='true'
            :slidesPerView="1"
            :spaceBetween="30" 
            :pagination="{
                dynamicBullets: true,
                clickable: true,
            }"
            :modules="modules" 

            class="mySwiper style-slider">
            <swiper-slide  v-for="(foto, index) in info.images"
                v-bind:key="index">
                <div class="slider">
                  <!-- <video v-if="foto.split('.').pop() == 'mp4'" 
                   tabindex="-1" class="style-slider slider-img" controlslist="nodownload" :src= "require('../../pkg/images/' + foto) " style="width: 446px; height: 251px; left: 0px; top: 0px;">
                  </video> -->
                  <!-- :poster="require('../../pkg/images/vigeoOff.jpg') " -->
                  <video v-if="foto.split('.').pop() == 'mp4'" 
                  class=" style-slider slider-img" 
                  :src= "require('../../pkg/images/' + foto) " type="video/webm" 
                  controlslist="nodownload"
                  loop
                  controls></video>
                  <img v-else
                  class=" style-slider slider-img" :src= "require('../../pkg/images/' + foto) " alt="non">
                  <div class="info">
                    <h1>{{ info.title }}</h1>
                    <svg @click="showInformation(!showInfo)"
                    viewBox="0 0 1024.00 1024.00"  
                    class="info_more " 
                    xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"
                      stroke-width="102.4">
                    <path  d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z" />
                    </svg>
                    <p v-html="info.previe"></p>
                </div>
                </div>
            </swiper-slide>
        </swiper>
        </div>
      </Transition>
      
        <Transition name="info">
        <div class="dop-info"
        v-if="showDopInfo">
          <!-- <hr class="hr-shelf"> -->
          <p v-html="info.info" ></p>
          <div class="messege" 
          v-if="info.sub!=0">
              <div class="infoMob"> 
                <p v-html="info.infoMob"></p> 
              </div>
              <a class="button shine infoSocial" v-for="(value, key) in info.infoSocial" 
              :key="key"
              :href="value"> {{ key }} </a>
          </div>
          <div class="messege getContactsMessege"  
          v-else>
            <a class="button shine getContacts" 
              href="https://t.me/Belov_Aleksey" > Узнать контакты </a>
          </div>
        </div>
      </Transition>
        

  </div>

</template>

<script>



import '../assets/styles/style.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { Pagination, FreeMode } from 'swiper';

export default {
name: 'vSliderInfo',
data () {
  return {
    showDopInfo: false,
    img: "color.png",
    activeIndex :0,
  }
},
components: {
  Swiper,
  SwiperSlide,
},
props: {
  info: Object,
  showInfo: Boolean
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
      modules: [ Pagination, FreeMode],
      onSlideChange,
      onDoubleClick,
    };
},
methods:{
  showInformation(showInfo){
    this.showDopInfo = showInfo;
    setTimeout(() => {
      this.$emit('showInformation', showInfo);
    }, 300);
    
  },
  Video(foto){
    console.log(foto);
    console.log(foto.split('.').pop());
    const str = foto.split('.').pop()
    return str
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
