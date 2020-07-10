<template>
  <div class="nextdays">
    <H2 v-if="allCityInfos.cityName">La météo des prochains jours à {{ allCityInfos.cityName }}</H2>
    <H3 v-if="!allCityInfos.cityName">Chargement...</H3>

    <div class="range-weather" v-for="i in 5" :key="i">
      <H3 class="day-weather">{{rangeDate(i -1)}}</H3>
          <span class="meteo-container" v-if="allCityInfos.cityName">
            <div class="infos-container" v-for="nextDay in forecastDayRange(i -1)" v-bind:key="nextDay.id" >
                <NextDaysInfos
                :temperature="nextDay.temperature"
                :caption="nextDay.weatherCaption"
                :icon="nextDay.iconId"
                :date="nextDay.date"
                :time="nextDay.time"/>
            </div>
          </span>
    </div>
    


  </div>
</template>

<script>

let moment = require('moment');
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
        'nextDaysWeatherInfos',
        'loadingAPI'
    ])
  },
  methods : {
    rangeDate(day) {
      var rangeDate = moment().add(day, 'days').format('DD/MM/YYYY')
      return rangeDate
    },
    // Show days per range
    forecastDayRange(day) {
      var allDays = this.$store.getters.nextDaysWeatherInfos
      var range = []
      allDays.forEach(
        (element) => {
          if(element.date === moment().add(day, 'days').format('DD/MM/YYYY')) {
            range.push(element)
          }
        }
      )
      return range
    }
  }
  
}
</script>

<style scoped lang="scss">

@import "./../assets/scss-variables/medias.scss";

.nextdays{
  & .meteo-container {
    display: grid;
    grid-template-columns: repeat(4,1fr);

    grid-gap: var(--gutterWidth);
  @include small{
    grid-template-columns: repeat(2,1fr);
  }
  
  }
  &>.next-days-infos{
    margin:0;
  }
}

.day-weather{
  text-align: left;
  background-color: var(--colorPurpleLight);
  padding: var(--spaceS) var(--spaceL);
  color: var(--colorWhite);
  border-radius: var(--borderRadiusMedium);

}
.range-weather{
  margin:0;
}

</style>