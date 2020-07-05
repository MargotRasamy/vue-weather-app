<template>
  <div class="dashboard">
    <Logo/>
    <Input/>
    
  </div>
</template>

<script>
import Logo from './molecules/Logo.vue';
import Input from './molecules/Input.vue';

export default {
  name: 'Dashboard',
  components: {
    Logo,
    Input
  }
}
</script>

<style scoped lang="scss">
.dashboard {
    display: grid;
    grid-template-columns: var(--gridColumns);
    grid-gap: var(--gutterWidth);
    &>:first-child{
    grid-column: 1 / 3;
    }
    &>:nth-child(2){
    grid-column: 3 / 10;
    }
}


</style>