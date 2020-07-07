<template>
  <div class="current-weather">
    <p class="data-title">Situation actuelle</p>

    <div class="current-weather--details">
      <span class="temperature-details">
          <img src="../../assets/sky.jpg"/>
          <div class="temperature-text">
            <p>{{ todaysWeatherInfos.temperature }}</p>
            <p>{{ todaysWeatherInfos.weatherCaption }}</p>
            <p>Température max : {{ todaysWeatherInfos.temperatureMax }}</p>
            <p>Température min : {{ todaysWeatherInfos.temperatureMin }}</p>
    
          </div>
      </span>

      <span class="city-details">
          <!-- <img src="../../assets/favorite.svg"/> -->
          <div class="city-text">
            <span>
              <p class="city-name">{{ allCityInfos.cityName }}</p>
              <img class="favorite" src="../../assets/favorite.svg" height="20px"/>
            </span>
            <p>{{ todaysWeatherInfos.date }}</p>
          </div>
          <img class="country-flag" src="../../assets/fr.png"/>
      </span>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'CurrentWeather',
    computed : {
      ...mapGetters([
          'allCityInfos',
          'todaysWeatherInfos'
      ])
    },
    methods : {
      ...mapActions([
          'fetchCurrentWeather'
      ])
    }
  }
</script>


<style scoped lang="scss">
  @import "../../assets/scss-variables/medias.scss";

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

    & img{
      margin-right: var(--spaceM);
      height:120px;
    }
    & p:first-child{
      font-size: 50px;
      font-weight: bold;  
    }
  }

  .city-details{
    text-align: right;
    line-height: 1.5;
    & .city-name {
      font-size: 36px;
      font-weight: bold;
      display: inline-block;
      margin-right: var(--spaceS);
    }
    & .favorite{
      height: var(--iconSize);
      width: var(--iconSize);
    
    }
    & .country-flag{
     margin: var(--spaceM) 0;
      width: 60px;
    }
    @include small {
      display: flex;
      justify-content: space-around;
      text-align: center;
      margin-bottom: var(--spaceM);

    }
  }
  


</style>