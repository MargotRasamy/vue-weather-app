<template>
  <div class="humidity">
    <span>
        <p class="data-title">Humidité</p>
        <p class="data-numbers">{{ todaysWeatherInfos.humidity }} %</p>
    </span>     
    <img src="../../assets/weather-icons/humidity.svg"/>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Humidity',
    computed : {
      ...mapGetters([
          'todaysWeatherInfos'
      ])
    }
}
</script>

<style scoped lang="scss">

</style>