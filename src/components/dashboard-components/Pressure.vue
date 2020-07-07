<template>
  <div class="pressure">

          <p class="data-title">Pression atmosphérique</p>
          <p class="data-numbers">{{ todaysWeatherInfos.pressure }} hPa</p>
   
    <img src="../../assets/weather-icons/tide.svg"/>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Pressure',
    computed : {
      ...mapGetters([
          'todaysWeatherInfos'
      ])
    }
}
</script>

<style scoped lang="scss">


</style>