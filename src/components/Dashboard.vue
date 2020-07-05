<template>
  <div class="dashboard">
    <Logo/>
    <a class="burger-menu" href="#">&#9776;</a>
    <Input/>
    <Select/>
    <Nav/>
  </div>
</template>

<script>
import Logo from './molecules/Logo.vue';
import Input from './molecules/Input.vue';
import Select from './molecules/Select.vue';
import Nav from './molecules/Nav.vue';

export default {
  name: 'Dashboard',
  components: {
    Logo,
    Input,
    Select,
    Nav
  }
}
</script>

<style scoped lang="scss">
 @import "../assets/scss-variables/colors.scss";
  @import "../assets/scss-variables/spaces.scss";
  @import "../assets/scss-variables/medias.scss";
  @import "../assets/scss-variables/misc.scss";

.dashboard {
    display: grid;
    grid-template-columns: var(--gridColumns);
    grid-template-rows: var(--gridRows);
    grid-gap: var(--gutterWidth);
    height:100%;
    min-height:100vh;
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