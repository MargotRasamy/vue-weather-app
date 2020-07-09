<template>
  <div >
    <h2 v-if="favoriteCitiesList.length === 0">Pas encore de villes en favoris pour le moment.</h2>
    <span class="favorites" >
      <div class="favorites-container" v-for="favoritedCity in favoriteCitiesList" v-bind:key="favoritedCity.cityName">
          <FavoriteCity 
          v-on:click.native="fetchCity(favoritedCity.cityName)"
          :isFavorited="true"
          :favCityName="favoritedCity.cityName"
          :favCountryCode="favoritedCity.countryCode"/>
    </div>
    </span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FavoriteCity from '../components/favorites-components/FavoriteCity.vue';

export default {
  name: 'Favorites',
  components : {
    FavoriteCity
  },
  computed : {
    ...mapGetters([
        'favoriteCitiesList'
  ])},
  methods : {
    ...mapActions([
        'fetchCurrentWeather',
        'fetchNextDaysWeather'
    ]),
    fetchCity(cityToFetch){   
        this.fetchCurrentWeather(cityToFetch)
        this.fetchNextDaysWeather(cityToFetch)
    }
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