<template>
  <div class="next-days-preview" >
    <span>
      <p class="data-title">{{ $t('nextDaysPreview.nextDaysPreviewTag')}}</p>
      <router-link class="button button--purple" to="/nextdays">
        {{ $t('nextDaysPreview.seeMore')}}
      </router-link>
    </span>

    <h2 v-if="!nextDaysWeatherInfos[0].temperature">{{ $t('loading')}}</h2>

    <span class="next-preview" v-if="nextDaysWeatherInfos[0].temperature">
      <div class="container" v-for="i in 4" v-bind:key="i">
        <NextDaysInfos 
          :date="nextDaysWeatherInfos[i].date"
          :time="nextDaysWeatherInfos[i].time"
          :temperature="nextDaysWeatherInfos[i].temperature"
          :icon="nextDaysWeatherInfos[i].iconId"/>
      </div>
      
    </span>
    

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NextDaysInfos from './NextDaysInfos.vue'
export default {
  name: 'NextDaysPreview',
  components : {
    NextDaysInfos
  },
  computed : {
    ...mapGetters([
        'allCityInfos',
        'nextDaysWeatherInfos',
        'loadingAPI'
    ])
  }
  
}
</script>

<style scoped lang="scss">
@import "../../assets/scss-variables/medias.scss";
// button
.next-days-preview span:first-child {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}


.button {
    display: inline-block;
    border-radius: var(--borderRadiusSmall);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: fit-content;
    padding: var(--spaceXS) var(--spaceS);
    height:fit-content;
    box-shadow: var(--boxShadow);
    font-size: 14px;

}

.button--purple {
    background-color: var(--colorPurple);
    color: var(--colorWhite);
    box-shadow: var(--boxShadowPurple);
    &:hover{
        background-color: var(--colorPurpleLight);
        color: var(--colorWhite);
    }
}
.container > * {
  margin: auto;
}
.next-preview {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: var(--gutterWidth);
  @include large {
    grid-template-columns: repeat(3, 1fr);
  }
  @include  medium {
    grid-template-columns: repeat(2, 1fr);
  }
  @include  small {
    grid-template-columns: repeat(2, 1fr);
  }
}


</style>