<template>
  <div class="v-telegram-admin"  >
    <!-- , filter: 'blur(10px)'  -->
    
    <main>
      <!-- <ul v-if="Check(tg.initData) and "> -->
      
      <ul v-if="true && true">
      <li 
      v-for="(questionnaire, index) in quests"
      v-bind:key="index"
      class="questionnaire-wrapper">
        <p> {{ questionnaire.id }} </p>
        <div class="questionnaire-photo">
            <img   v-if="questionnaire.images[0].name.split('.').pop() == 'webm'"
            :src= "require('../../pkg/images/vigeoOff.jpg')" alt="non">
            <img  v-else
            :src= questionnaire.images[0].url  alt="non">
        </div> 
        <div class="information">
          <h1> {{ questionnaire.title}} </h1>
        <!-- вот тут в теше p нужно будет потов вставить телеграм юзернейм -->
        <p> {{ questionnaire.previe}} </p>
        </div>                
        <div class="change" >
            <a class="button shine getContacts" 
            @click="Edit(questionnaire)" > Изменить </a>
          </div>
      </li >
      
      <br>
      </ul>
    </main>
    
  </div>
</template>

<script>

import '../assets/styles/styleAdmin.css';

export default {
  name: 'vTelegramAdmin',
  data () {
    return {
      quests: null,
      tg: window.Telegram.WebApp,
    }
  },
  
  components: {
  },
  created() {
        // window.addEventListener('resize', this.handleResize);
        // this.handleResize();
        this.tg.expand();
        // this.tg.MainButton.text  = "Changed Text"; //изменяем текст кнопки 
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
    this.$store.dispatch('getQuestionnaires').then(() => {
      this.quests = JSON.parse(localStorage.getItem  ("questionnaires"));
      this.loading = false;
        })
  },
  methods:{
    Edit(questionnaire){
      console.log(questionnaire);
      let data = JSON.stringify(questionnaire);
      console.log(data);
      this.tg.sendData(data);
    },
    Check(initData){
      let data = Object.fromEntries(new URLSearchParams(initData));
      const botToken = "5097177562:AAF9HSpDw_TZsn_RkeflrkcV0BQ_12tciN0"
      const checkString = Object.keys(data)
              .filter((key) => key !== "hash")
              .map((key) => `${key}=${data[key]}`)
              .sort()
              .join("\n")
      const CryptoJS = require("crypto-js");
      const secret = CryptoJS.HmacSHA256(botToken, 'WebAppData');
      const signature  = CryptoJS.HmacSHA256(checkString, secret);

      const hex = signature.toString(CryptoJS.enc.Hex);

      return data.hash === hex
      // this.initDataCheck = data.hash === hex
    }
    // choose(){
    //   this.onChoose = true
    // }
  }
}
</script>
<style scoped>

</style>
