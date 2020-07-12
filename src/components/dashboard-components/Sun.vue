<template>
  <div class="sun">
     <p class="data-title">{{ $t('sun.sunTag')}}</p>
      <div class="data-sun-container">
        <div class="data-sun">
            <img src="../../assets/weather-icons/sunrise-1.svg"/>
            <span>
            <p>{{ $t('sun.sunrise')}}</p>
            <p class="data-hours">{{ todaysWeatherInfos.sunrise }}</p>
            </span>
        </div>

        <div class="data-sun">
            <img src="../../assets/weather-icons/sunset-1.svg"/>
            <span>
            <p>{{ $t('sun.sunset')}}</p>
            <p class="data-hours">{{ todaysWeatherInfos.sunset }}</p>
            </span>
        </div>
      </div>
        
   
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Sun',
    computed : {
      ...mapGetters([
          'todaysWeatherInfos'
      ])
    }
}
</script>

<style scoped lang="scss"> 

    .sun > .data-sun-container {

      margin: auto;
     
    }
    .data-sun{
      display: flex;
    margin-left: var(--spaceL);
    padding: var(--spaceS) 0;
    
     
      p{
        text-align: left;
        margin-left: var(--spaceS);
      }
    } 

</style>