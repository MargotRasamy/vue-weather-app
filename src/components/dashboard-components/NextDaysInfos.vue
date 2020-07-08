<template>
  <div class="next-days-infos" >
    <p>{{ caption }}</p>
    <p class="temp">{{ temperature }} °</p>
    <i class="weather-icons wi" :class="weatherIcons(icon)"></i>
    <span>
        <p class="date">{{ date }} | {{ time }}</p>
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
  props : ['temperature', 'date', 'time', 'caption', 'icon']
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

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