<template>
  <div class="favorites">
    <div class="infos-container" v-for="favoriteCity in favoriteCitiesList" v-bind:key="favoriteCity">
          <FavoriteCity
          :favCityName="favoriteCity.cityName"
          :favCountryCode="favoriteCity.countryCode"/>
    </div>

   
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FavoriteCity from '../components/favorites-components/FavoriteCity.vue';

export default {
  name: 'Favorites',
  components : {
    FavoriteCity
  },
  computed : {
    ...mapGetters([
        'favoriteCitiesList'
  ])}
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