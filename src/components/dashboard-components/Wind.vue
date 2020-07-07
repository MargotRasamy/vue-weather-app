<template>
  <div class="wind">
    <span>
          <p class="data-title">Vent</p>
          <p class="data-numbers">{{ todaysWeatherInfos.wind }} mph</p>
        </span>
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