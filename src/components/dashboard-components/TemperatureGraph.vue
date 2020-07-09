<template>
  <div class="temperature-graph">
    <p class="data-title">Courbe de températures des prochaines heures</p>

    <span class="chart-container">
      <line-chart class="chart" :chart-data="generateData"></line-chart>
      </span>
    
    
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
    ]),
    
    generateData(){
      var temperaturesDatas = []
      var hoursDatas = []

      this.nextDaysWeatherInfos.forEach(
        (forecast) => {
          temperaturesDatas.push(forecast.temperature)
          hoursDatas.push(forecast.time)
        }
      )
      
      return {
      labels: hoursDatas,
      datasets: [
          {
          label: "Température réelle",
          borderColor: "#f39e00",
          pointBackgroundColor: "#f39e00",
          pointBorderColor: "#f39e00",
          borderWidth: 3,
          backgroundColor: "#f39e005f",
          data: temperaturesDatas
        }

        // ,{
        //   label: "Température ressentie",
        //   borderColor: "#706bff",
        //   pointBackgroundColor: "#706bff",
        //   borderWidth: 3,
        //   pointBorderColor: "#706bff",
        //   backgroundColor: "#706bff6a",
        //   data: [23.90, 20, 25.56, 31, 20, 22, 23]
        // }
        
      ]}
    }   
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


