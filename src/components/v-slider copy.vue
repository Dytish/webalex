<template>
    <div  class="v-slider">
        <swiper 
        :rewind="true" 
        :navigation="true"
        :slidesPerView="1"
        :spaceBetween="30"
        :freeMode="true"
        :pagination="{
            dynamicBullets: true,
            clickable: true,
        }"
        :modules="modules"
        class="mySwiper">
            <swiper-slide  v-for="(foto, index) in fotos"
                v-bind:key="index">
                <!-- <p>{{ foto }}</p> -->
                <img  :src= " require('../assets/foto/' + foto) " alt="non">
            </swiper-slide>
            <!-- <swiper-slide><img alt="Vue logo" src="./t1.jpg"></swiper-slide><swiper-slide><img alt="Vue logo" src="./logo.png"></swiper-slide>
            <swiper-slide><img alt="Vue logo" src="./logo.png"></swiper-slide><swiper-slide><img alt="Vue logo" src="./logo.png"></swiper-slide> -->

        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Pagination } from 'swiper';
import { Navigation } from 'swiper';

import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../assets/styles/style.css';

export default {
  name: 'vSlider',
  data () {
    return {
      fotos: ['color.png', 'vershiny_uedinenie.jpg', 'Рисунок1.jpg'] 
    }
  },
  components: {
      Swiper,
      SwiperSlide,
    },
  setup() {
      return {
        modules: [FreeMode, Pagination, Navigation],
        };
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
