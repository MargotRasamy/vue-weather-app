<template>
  <div class="current-weather">
    <p class="data-title">Situation actuelle</p>

    <div class="current-weather--details">
      <span class="temperature-details">
          <img src="../../assets/sky.jpg"/>
          <div class="temperature-text">
            <p>26°</p>
            <p>Ciel éclairé, ensoleillé</p>
            <p>Température max : 27°</p>
            <p>Température min : 15°</p>
    
          </div>
      </span>

      <span class="city-details">
          <!-- <img src="../../assets/favorite.svg"/> -->
          <div class="city-text">
            
            <span>
              <p class="city-name">Paris</p>
              <img class="favorite" src="../../assets/favorite.svg" height="20px"/>
            </span>
            <p>06 Septembre 2020</p>
            

          </div>
          <img class="country-flag" src="../../assets/fr.png"/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentWeather'
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss-variables/medias.scss";

  .current-weather--details{
    display: flex;
    justify-content: space-between;
    @include small {
     
      flex-direction: column-reverse;
    }
  }
  .temperature-details{
    display: flex;
    text-align: left;

    & img{
      margin-right: var(--spaceM);
      height:120px;
    }
    // & .temperature-text{
      
    // }
    & p:first-child{
      font-size: 50px;
      font-weight: bold;
     
      
    }
  }

  .city-details{
    text-align: right;
    line-height: 1.5;
    & .city-name {
      font-size: 36px;
      font-weight: bold;
      display: inline-block;
      margin-right: var(--spaceS);
    }
    & .favorite{
      height: var(--iconSize);
      width: var(--iconSize);
    
    }
    & .country-flag{
     margin: var(--spaceM) 0;
      width: 60px;
    }
    @include small {
      display: flex;
      justify-content: space-around;
      text-align: center;
      margin-bottom: var(--spaceM);
      & .country-flag{
      }
    }
  }
  


</style>