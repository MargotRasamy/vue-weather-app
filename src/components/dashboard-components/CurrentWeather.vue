<template>
  <div class="current-weather">
    <p class="data-title">{{ $t('currentWeather.currentWeatherTag')}}</p>

    <h2 v-if="!allCityInfos.cityName">{{ $t('loading')}}</h2>
    <div class="current-weather--details" v-if="allCityInfos.cityName">
      <span class="temperature-details">
          <i class="weather-icons wi" :class="weatherIcons(todaysWeatherInfos.iconId)"></i>
          <div class="temperature-text">
            <p>{{ todaysWeatherInfos.temperature }}°</p>
            <p>{{ todaysWeatherInfos.weatherCaption }}</p>
            <p>{{ $t('currentWeather.temperatureMax')}} : {{ todaysWeatherInfos.temperatureMax }}°</p>
            <p>{{ $t('currentWeather.temperatureMin')}} : {{ todaysWeatherInfos.temperatureMin }}°</p>
    
          </div>
      </span>

      <span class="city-details">
          <div class="city-text">
            <span>
              <p class="city-name">{{ allCityInfos.cityName }}, {{ allCityInfos.countryCode }}</p>
              <Star :colorChange="allCityInfos.favoriteCity" v-on:toggleCity="toggleFavoriteCity"/>
            </span>
            <p>{{ todaysWeatherInfos.date }}</p>
          </div>
          <img class="flag" v-bind:src="'https://www.countryflags.io/' + allCityInfos.countryCode + '/shiny/64.png'"/>
      </span>
    </div>
  </div>
</template>

<script>
import weatherIcons from '../../static/weatherIcons.js'
import Star from '../Star.vue';
import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'CurrentWeather',
    data: () => ({
      weatherIcons,
      loading : true
    }),
    components : {
      Star
    },
    computed : {
      ...mapGetters([
          'allCityInfos',
          'todaysWeatherInfos',
          'loadingAPI'
      ])
    },
    methods : {
      ...mapActions([
          'toggleFavoriteCity'
      ])
    }
  }
</script>


<style scoped lang="scss">

  @import "../../assets/scss-variables/medias.scss";
  
 
  .weather-icons {
    font-size: 75px;
    margin: auto var(--spaceM);
  }
  .current-weather--details{
    display: flex;
    justify-content: space-between;
    @include small {
     
      flex-direction: column-reverse;
    }
  }
  .temperature-details{
    display: flex;
    text-align: left;
    justify-content: space-around;

    & img{
      margin-right: var(--spaceM);
      height:120px;
    }
    & p:first-child{
      font-size: 42px;
      font-weight: bold; 
      @include medium {
         font-size: 38px;
      } 
    }
    & p:nth-child(2){
      font-weight: bold;
      
    }
    
    @include small{
      flex-direction: row-reverse;

      text-align: center;
    }
  }
  .temperature-text{
    line-height: 1.6;
  }
  .city-details{
    text-align: right;
    line-height: 1.5;
    & .city-name {
      font-size: 26px;
      font-weight: bold;
      display: inline-block;
      margin-right: var(--spaceS);
      @include medium {
         font-size: 20px;
      }
    }
    & .favorite{
      height: var(--iconSize);
      width: var(--iconSize);
    
    }
    & .country-flag{
     margin: var(--spaceM) 0;
      
    }
    @include small {
      display: flex;
      justify-content: space-around;
      text-align: center;
      margin-bottom: var(--spaceM);

    }
  }
  


</style>