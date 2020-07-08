<template>
  <div class="wind">
 
    <p class="data-title">Vent</p>
    <p class="data-numbers">{{ todaysWeatherInfos.wind }} m/s</p>
  <img src="../../assets/weather-icons/windy.svg"/>
   
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Wind',
    computed : {
      ...mapGetters([
          'todaysWeatherInfos'
      ])
    }
}
</script>

<style scoped lang="scss">


</style>