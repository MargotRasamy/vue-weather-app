<template>
  <div class="dashboard">
    <!-- 1st column datas -->
    <div class="dashboard-primary dashboard-container-grid">
      <div class="dashboard-data">

        <CurrentWeather/>
        
      </div>
      <div class="dashboard-data">

        <NextDaysPreview/>
      </div>
      <div class="dashboard-data">

        <TemperatureGraph />
        
      </div>
      
    
    </div>
    

    <!-- 2nd column datas -->
    <div class="dashboard-secondary dashboard-container-grid">
      <div class="dashboard-data">
        
        <Humidity/>

      </div>

       <div class="dashboard-data">
        <Wind/>
        
      </div>
      
      <div class="dashboard-data">
        <Pressure/>
        
      </div>
      
      <div class="dashboard-data">
  
           
        <Sun/>
        
        
      </div>
    </div>
  
  </div>
</template>

<script>
import CurrentWeather from '../components/dashboard-components/CurrentWeather.vue'
import NextDaysPreview from '../components/dashboard-components/NextDaysPreview.vue'
import TemperatureGraph from '../components/dashboard-components/TemperatureGraph.vue'
import Humidity from '../components/dashboard-components/Humidity.vue'
import Wind from '../components/dashboard-components/Wind.vue'
import Pressure from '../components/dashboard-components/Pressure.vue'
import Sun from '../components/dashboard-components/Sun.vue'


export default {
  name: 'Dashboard',
  components : {
    CurrentWeather,
    NextDaysPreview,
    TemperatureGraph,
    Humidity,
    Wind,
    Pressure,
    Sun
  }
}
</script>

<style lang="scss">
  @import "../assets/scss-variables/medias.scss";


.dashboard{
  // Grid layout
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  @include small{
    grid-template-columns: var(--gridColumns);
  }
  & .dashboard-container-grid{
      display: grid;
      grid-gap: var(--gutterWidth);
    &> * {
      @include small {
        grid-column: 1 / 5;
      }
    }
  }

  // Common style for all boxes of weather datas
  & .dashboard-data{
    border-radius: var(--borderRadiusLarge);
    padding: var(--spaceS) var(--spaceM);
  }
  .data-title{  
    text-align: left;
    align-self: flex-start;
    padding-bottom: var(--spaceM);
  }
  
  .data-hours{
    font-weight: bold;
    font-size: 28px;
  }

  // 1st columns
  & .dashboard-primary{
    grid-template-rows: auto;
    grid-column: 1 / 8;
    &> *{
      background-color: var(--colorWhite);
      box-shadow: var(--boxShadow);
    }
    @include small {
       grid-column: 1 / 5;
    }
    .data-title{
      color: var(--colorPurple);
    }
  }

  // 2nd columns datas
  & .dashboard-secondary{
    grid-template-rows: auto;
    grid-column: 8 / 11;
    @include small {
       grid-column: 1 / 5;
    }

    // Purple boxes
    &>:not(:last-child){
      background-color: var(--colorPurple);
      box-shadow: var(--boxShadowPurple);
      color: var(--colorWhite);
      .data-numbers{
        font-weight: bold;
        font-size: 36px;
        
        display: inline-block;
      }
      &>:only-child {
      display: float;
      img {
            float: right;
      }
      }
    }

  // Yellow box
    &>:last-child {
      background-color: var(--colorYellowLight);
      box-shadow: var(--boxShadowYellow);
      color: var(--colorMainBlack);
    }
    

    //All boxes of 2nd columns datas
    & > * > :only-child {
      width: 100%;
      height:100%;
      & img {
        height: 45px;
        
      }
    }
  }
}

</style>