<template>
  <div class="dashboard">
    <Logo/>
    <Input/>
    <Select/>
  </div>
</template>

<script>
import Logo from './molecules/Logo.vue';
import Input from './molecules/Input.vue';
import Select from './molecules/Select.vue';

export default {
  name: 'Dashboard',
  components: {
    Logo,
    Input,
    Select
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
    grid-gap: var(--gutterWidth);
    &>:first-child{
    grid-column: 1 / 3;
    }
    &>:nth-child(2){
    grid-column: 3 / 10;
      @include small{
        grid-column: 1 / 3;
      }
    }
    &>:nth-child(3){
    grid-column: 10 / 13;
      @include small{
        grid-column: 3 / 5;
      }
    }
    
}


</style>