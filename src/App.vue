<template>
  <div id="app">
    <Logo/>
    <a class="burger-menu" href="#">&#9776;</a>
    <Input/>
    <Select/>
    <Nav/>
  </div>
</template>

<script>
// import Dashboard from './views/Dashboard.vue'
import Logo from './components/Logo.vue';
import Input from './components/Input.vue';
import Select from './components/Select.vue';
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    Logo,
    Input,
    Select,
    Nav
  }
}
</script>

<style lang="scss">
  @import "./assets/scss-variables/colors.scss";
  @import "./assets/scss-variables/spaces.scss";
  @import "./assets/scss-variables/medias.scss";
  @import "./assets/scss-variables/misc.scss";

body{
  margin:0;
  background-color: var(--colorPurpleVeryLight);
}
h1,h2,h3,h4,h5,h6 {
    font-weight: bold;
}
a{
  text-decoration: none;
}


#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--colorMainBlack);
  margin: 0 var(--marginsLayout);
  min-height: 100vh;
  height:100%;

  // Page Layout with CSS grid for a perfectly customized layout
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
        grid-column: 3 / 5;
        grid-row : 2/ 3;
        display: none;
       
      }
    }
    .burger-menu{
      display: none;
      width:fit-content;
      height:fit-content;
      text-decoration: none;
      @include small{
        display: block;
        grid-column: 3 / 5;
        align-self: center;
        justify-self: flex-end;
      }
    }
}


</style>
