<template>
  <div class="temperature-graph">
    <p class="data-title">Courbe de températures des 5 derniers jours</p>
    <p>No graph yet</p>
    <line-chart class="chart"></line-chart>
    
  </div>
</template>

<script>
import LineChart from './LineChart.js'
import { mapGetters } from 'vuex';
export default {
  name: 'TemperatureGraph',
  components : {
     LineChart
  },
  computed : {
    ...mapGetters([
        'nextDaysWeatherInfos'
    ])
  }
}
</script>

<style scoped lang="scss">
  .chart{
    height: 250px;
  }


</style>