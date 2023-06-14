<template>
    <div  class="v-slider">
        <swiper 
        :slidesPerView="1"
        :spaceBetween="30"
        :freeMode="true"
        :pagination="{
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
        <img  src= '../assets/foto/Рисунок1.jpg'>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Pagination } from 'swiper';

import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';

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
        modules: [FreeMode, Pagination],
        };
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
