<template>
  <div id="app">
    <Logo/>
    <a v-on:click="openMenu" class="burger-menu" href="#">&#9776;</a>
    <Input/>
    <Select/>
    <Nav ref="navMenu" class="closed-menu"/>
  
    <!-- router : main content (Show router only if there is any content: city searched) -->
      <router-view  v-if="allCityInfos.cityName"></router-view>

    <!-- If there are no cities looked for, no informations to show -->
      <Welcome v-if="!allCityInfos.cityName"/>
      
  </div>
</template>

<script>
import Logo from './components/Logo.vue';
import Input from './components/Input.vue';
import Select from './components/Select.vue';
import Nav from './components/Nav.vue';
import Welcome from './components/Welcome.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Logo,
    Input,
    Select,
    Nav,
    Welcome
  },
  methods: {
    openMenu : function () {
      const navMenu = this.$refs.navMenu.$el.classList;
      navMenu.contains('closed-menu') ? navMenu.toggle('closed-menu') : navMenu.add('closed-menu')
    }
  },
  computed : {
    ...mapGetters([
        'allCityInfos',
        'loadingAPI'
    ])
  }
}
</script>

<style lang="scss">
  @import "./assets/scss-variables/colors.scss";
  @import "./assets/scss-variables/spaces.scss";
  @import "./assets/scss-variables/medias.scss";
  @import "./assets/scss-variables/misc.scss";
  @import "./assets/weather-addon/css/weather-icons.min.css";

body{
  margin:0;
  background-color: var(--colorPurpleVeryLight);
}
h1,h2,h3,h4,h5,h6 {
    font-weight: bold;
}
p{
  margin:0;
}
a{
  text-decoration: none;
}
// weather icons color
.wi {
    color: var(--colorPurple)
  }

.closed-menu{
  @include small{
    display :none;
  }
}
html::-webkit-scrollbar {
  width: 10px;
  background-color: #d2d2ff; 
}
html::-webkit-scrollbar-thumb {
    background: #706bff; 
}

@font-face {
  font-family: 'Nunito' ;
  src: url("../src/assets/fonts/Nunito/Nunito-Regular.ttf");
}
#app {
  font-family: 'Nunito';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--colorMainBlack);
  margin: 0 var(--marginsLayout);
  min-height: 100vh;
  height:100%;

  // Page Layout with CSS grid for a pixel-perfect customized responsive layout
    display: grid;
    grid-template-columns: var(--gridColumns);
    grid-template-rows: var(--gridRows);
    grid-gap: var(--gutterWidth);
    &>:first-child{
    grid-column: 1 / 3;
     grid-row : 1/ 2;
    }
    &>.input{
    grid-column: 3 / 10;
     grid-row : 1/ 2;
      @include small{
        grid-column: 1 / 3;
         grid-row : 2/ 3;
      }
    }
    &>.select{
    grid-column: 10 / 13;
     grid-row : 1/ 2;
      @include small{
        grid-column: 3 / 5;
         grid-row : 2/ 3;
      }
    }
    &>nav{
    grid-column: 1 / 3;
    grid-row : 2/ 3;
      @include small{
        
        position: absolute;
        z-index:1;
        top: 65px;
        right:var(--marginsLayout);
        width:50%;
       
      }
    }
    .burger-menu{
      display: none;
      font-size: 24px;
      width:fit-content;
      height:fit-content;
      text-decoration: none;
      color: var(--colorPurple);
      @include small{
        display: block;
        grid-column: 3 / 5;
        align-self: center;
        justify-self: flex-end;
      }
    }
    &>:last-child{ 
        grid-gap: var(--gutterWidth); 
        grid-column: 3 / 13;
        margin-bottom: var(--gutterWidth);;
      @include small {
        grid-column: 1 / 5;
      }
    }
}


</style>
