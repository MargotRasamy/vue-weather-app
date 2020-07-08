<template>
  <div class="favorites">
    <FavoriteCity/>
    <FavoriteCity/>
    <FavoriteCity/>
    <FavoriteCity/>
    <FavoriteCity/>
    <FavoriteCity/>
    <FavoriteCity/>
    <FavoriteCity/>
    <FavoriteCity/>
    


   
  </div>
</template>

<script>

import FavoriteCity from '../components/favorites-components/FavoriteCity.vue';

export default {
  name: 'Favorites',
  components : {
    FavoriteCity
  }
}

</script>

<style scoped lang="scss">
  @import "./../assets/scss-variables/medias.scss";

.favorites{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(3,1fr);
  grid-gap: var(--gutterWidth);
  @include small{
    grid-template-columns: repeat(2,1fr);
  }
}

</style>