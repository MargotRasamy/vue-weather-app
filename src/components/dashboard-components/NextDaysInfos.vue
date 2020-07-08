<template>
  <div class="next-days-infos">
    <p class="temp">31°</p>
    <i class="weather-icons wi wi-sleet"></i>
    <span>
        <p class="date">05/07/2020 | 05:56</p>
    </span>

  </div>
</template>

<script>
import weatherIcons from '../../staticContent/weatherIcons.js'
export default {
  name: 'NextDaysInfos',
  data: () => ({
      weatherIcons
  }),
}
</script>

<style scoped lang="scss">
    .weather-icons {
      font-size: 60px;
      margin: var(--spaceM) auto;
    }

    .next-days-infos{
        background-color: var(--colorWhite);
        margin: auto;
        padding:5px;
        border: 5px solid var(--colorPurpleVeryLight);
        box-shadow: var(--boxShadowPurple);
        border-radius: 20px;
      
        .temp {
          font-weight: bold;
          color: var(--colorYellow);
          font-size: 21px;
        }
        .date {
       
            color: var(--colorPurple);
        }
            
        
    }

</style>