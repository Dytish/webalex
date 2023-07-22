<template>
  <div class="v-telegram">
    <main>
      <v-slider
      :workers="workers"
      :Tg="tg" />
    </main>
    
    <!-- <img :src="img" alt="non"> -->
    <!-- <footer >
      <button class="choose" @click="choose">choose</button>
    </footer> -->
  </div>
</template>

<script>
import vSlider from './v-slider.vue'

import '../assets/styles/style.css';

export default {
  name: 'vTelegram',
  data () {
    return {
      img: null,
      workers: null,
      tg: window.Telegram.WebApp,
    }
  },
  components: {
    vSlider
  },
  props: {
    msg: String
  },
  created() {
        // window.addEventListener('resize', this.handleResize);
        // this.handleResize();
        // this.tg.expand();
        // this.tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
        // this.tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
        // this.tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
        // this.tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
        // this.tg.MainButton.setParams({"color": "#143F6B"});
        // this.tg.MainButton.show();
        // this.tg.MainButton.offClick(function(){
        //   this.tg.MainButton.textColor = "#F55353";
        //   this.tg.sendData("some string that we need to send");
        // });
  },
  beforeCreate(){
    // this.$store.dispatch('getWorkers').then(() => {
    //   this.workers = JSON.parse(localStorage.getItem  ("workers"));
    //   this.loading = false;
    //     })
  },
  methods:{
    // choose(){
    //   this.onChoose = true
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
