<template>
  <div class="wind">
 
    <p class="data-title">{{ $t('wind') }}</p> 
    <div class="data-container">
      <p class="data-numbers">{{ todaysWeatherInfos.wind }} m/s</p>
      <img src="../../assets/weather-icons/windy.svg"/>
    </div>
    

   
    
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