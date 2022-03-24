<template>
  <div class="container">
      <profile></profile>
      <education></education>
      <skills></skills>
  </div>
</template>

<script>
  import Profile from './components/Profile.vue';
  import Education from './components/Education.vue';
  import Skills from './components/Skills.vue';

  export default {
    name: 'app',
    components: {
      Profile,
      Education,
      Skills,
    },
    data() {
      return {
        msg: 'The Main Component'
      }
    }
  }
</script>

<style>
  /*BACKGROUND*/
  body {
      position: absolute;
      background-image: linear-gradient(to right, white, rgb(248, 243, 205));
      width: 1366px;
      height: 768px;
  }

  /*IMAGE*/
  .image {
      position: relative;
      height: 200px;
      width: 200px;
      border-radius: 50%;
      background-image: linear-gradient(60deg, rgb(214, 166, 33), rgb(163, 77, 137));
      margin-top: 40px;
      margin-left: 300px;
  }
  .picture {
      position: relative;
      width: 170px;
      height: 170px;
      margin-top: -230px;
      margin-left: 315px;
  }
  .bg {
      position: absolute;
      width: 1920px;
      height: 1080px;
      opacity: 10%;
  }

  /*DIVISIONS*/
  .bot-left {
      position: relative;
      margin-top: -200px;
      margin-left: -100px;
  }
  .bot-mid {
      position: relative;
      margin-left: 240px;
      margin-top: -560px;
  }
  .bot-right {
      position: relative;
      margin-top: -563px;
      margin-left: 675px;
  }

  #about {
      text-indent: 50px;
      text-align: justify;
  }

  #skills {
      line-height: 15px;
  }
  /*HEADINGS*/
  .heading1 {
      position: absolute;
      font-family: Playfair Display;
      font-size: 60px;
      line-height: 50px;
      margin-top: -180px;
      margin-left: 520px;
      color: rgb(31, 31, 31);
  }

  /*SUBTITLE*/
  .subtitle {
      position: relative;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      margin-top: -60px;
      margin-left: 520px;
      line-height: 20px;
      color: rgb(133, 133, 133);
  }

  /*SUBHEADINGS*/
  .subheading1 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      margin-top: 300px;
      margin-left: 100px;
      color: rgb(214, 166, 33);
  }

  /*CONTENTS*/
  .content1 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      margin-left: 100px;
      line-height: 20px;
      color: rgb(65, 65, 65);
  }

  #creativity2 {
      width: 60px;
      margin-left: 420px;
      margin-top: -169px;
  }
  #attention2 {
      width: 40px;
      margin-left: 440px;
      margin-top: -160px;
  }
  #interpersonal2 {
      width: 40px;
      margin-left: 440px;
      margin-top: -151px;
  }
  #html2 {
      width: 70px;
      margin-left: 410px;
      margin-top: -142px;
  }
  #css2 {
      width: 70px;
      margin-left: 410px;
      margin-top: -133px;
  }
  #javascript2 {
      width: 90px;
      margin-left: 390px;
      margin-top: -124px;
  }

  /*LEVELS*/
  .level {
      position: absolute;
      height: 5px;
      margin-top: -24px;
      margin-left: 250px;
      border-radius: 10px;
      background-image: linear-gradient(60deg, rgb(163, 77, 137), rgb(214, 33, 160));
  }
  #creativity {
      width: 160px;
  }
  #attention {
      width: 180px
  }
  #interpersonal {
      width: 180px;
  }
  #html {
      width: 150px;
  }
  #css {
      width: 150px;
  }
  #javascript {
      width: 130px;
  }

  /*SOCIALS*/
  .notch {
      position: absolute;
      width: 450px;
      height: 150px;
      border-radius: 25px;
      margin-top: -110px;
      margin-left: 810px;
      background-image: linear-gradient(60deg, rgb(163, 77, 137), rgb(214, 33, 160));;
  }
  .socials {
      position: absolute;
      margin-top: -65px;
      margin-left: 820px;
  }
</style>