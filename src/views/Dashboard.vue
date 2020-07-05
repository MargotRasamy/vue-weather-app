<template>
  <div class="dashboard">
    <!-- 1st column datas -->
    <div class="dashboard-primary dashboard-container-grid">
      <div class="current-weather dashboard-data">
        <p class="data-title">Situation actuelle</p>
      </div>
      <div class="current-weather dashboard-data">
        <p class="data-title">Météo des prochains jours</p>
      </div>
      <div class="current-weather dashboard-data">
        <p class="data-title">Courbe de températures</p>
      </div>
      
    
    </div>
    

    <!-- 2nd column datas -->
    <div class="dashboard-secondary dashboard-container-grid">
      <div class="current-weather dashboard-data">
        <span>
          <p class="data-title">Humidité</p>
        <p class="data-numbers">78%</p>
        </span>
        
        <img src="../assets/weather-icons/humidity.svg"/>
      </div>
      <div class="current-weather dashboard-data">
        <span>
          <p class="data-title">Vent</p>
          <p class="data-numbers">78%</p>
        </span>
        <img src="../assets/weather-icons/windy.svg"/>
        
      </div>
      <div class="current-weather dashboard-data">
        <span>
          <p class="data-title">Pression atmosphérique</p>
          <p class="data-numbers">78%</p>
        </span>
        <img src="../assets/weather-icons/tide.svg"/>
        
      </div>
      <div class="current-weather dashboard-data">
        <p class="data-title">Lever et coucher du soleil</p>
        <div class="data-sun">
          <img src="../assets/weather-icons/sunrise-1.svg"/>
          <p>Lever du soleil</p>
          <p class="data-hours">06:03</p>
        </div>
        <div class="data-sun">
          <img src="../assets/weather-icons/sunset-1.svg"/>
          <p>Coucher du soleil</p>
          <p class="data-hours">18:06</p>
        </div>
        
      </div>
    </div>
  
  </div>
</template>

<script>

export default {
  name: 'Dashboard'
}
</script>

<style scoped lang="scss">
  @import "../assets/scss-variables/medias.scss";


.dashboard{
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  
  .data-numbers{
    font-weight: bold;
    font-size: 36px;
    padding:var(--spaceM);
  
  }
  .data-hours{
    font-weight: bold;
    font-size: 28px;
    padding:0;
  
  }
  @include small{
    grid-template-columns: var(--gridColumns);
  }
  & .data-title{

    
    margin: 0;
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

  & .dashboard-data{
    display: flex;
    
    padding: var(--spaceS) var(--spaceM);
    border-radius: var(--borderRadiusLarge);
 
    word-break: break-all;
    white-space: break-spaces;
  }
  & .dashboard-primary{
    grid-template-rows: auto;
    grid-column: 1 / 8;
    color: var(--colorPurple);
    &> *{
      background-color: var(--colorWhite);
      box-shadow: var(--boxShadow);
    }
    @include small {
       grid-column: 1 / 5;
    }
  }
  & .dashboard-secondary{
    grid-template-rows: auto auto auto 215px;
    grid-column: 8 / 11;
    
    &>:last-child{
      flex-direction: column;
      align-items: flex-start;

      background-color: var(--colorYellow);
      box-shadow: var(--boxShadowYellow);
      color: var(--colorMainBlack); 
    }
    &>:not(:last-child){
      background-color: var(--colorPurple);
      box-shadow: var(--boxShadowPurple);
      color: var(--colorWhite);
      justify-content: space-between;
      
    }
    & span {
      display:flex;
      flex-direction: column;
      align-items: flex-start;
    
    }
    @include small {
       grid-column: 1 / 5;
    }
    & img {
      height: 45px;
      margin: auto var(--spaceM);
    }
    .data-sun{
      display: float;
      width: 100%;
      text-align: left;
      margin: var(--spaceM);
      & img {
        float:left
      }
    }
    
  }
}

</style>