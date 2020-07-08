<template>
  <div class="nextdays">
    <H2 v-if="allCityInfos.cityName">La météo des prochains jours à {{ allCityInfos.cityName }}</H2>

    <span class="meteo-container" v-if="allCityInfos.cityName">
      <div class="infos-container" v-for="nextDay in nextDaysWeatherInfos" v-bind:key="nextDay.id">
          <NextDaysInfos 
          :temperature="nextDay.temperature"
          :caption="nextDay.weatherCaption"
          :icon="nextDay.iconId"
          :date="nextDay.date"
          :time="nextDay.time"/>
      </div>

    </span>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NextDaysInfos from '../components/dashboard-components/NextDaysInfos.vue'
export default {
  name: 'NextDays',
  components : {
    NextDaysInfos
  },
  computed : {
    ...mapGetters([
        'allCityInfos',
        'nextDaysWeatherInfos'
    ])
  }
  
}
</script>

<style scoped lang="scss">

@import "./../assets/scss-variables/medias.scss";

.nextdays{
  & .meteo-container {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(3,1fr);
    grid-gap: var(--gutterWidth);
  @include small{
    grid-template-columns: repeat(2,1fr);
  }
  
  }
  &>.next-days-infos{
    margin:0;
  }
}

</style>