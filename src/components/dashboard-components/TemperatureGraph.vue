<template>
  <div class="temperature-graph">
    <p class="data-title">Courbe de températures des 5 derniers jours</p>

    <span class="chart-container"><line-chart class="chart"></line-chart></span>
    
    
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

.chart-container{
  display: grid;
  grid-template-columns: repeat(6,1fr);
}
  .chart{
    height: 250px;
    width: auto;
  grid-column: 1 / 7;
  }
  .hello{
    width: 1fr;
    overflow: hidden;
  }

</style>