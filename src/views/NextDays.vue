<template>
  <div class="nextdays">
    <NextDaysInfos/>
    <NextDaysInfos/>
    <NextDaysInfos/>
    <NextDaysInfos/>
    <NextDaysInfos/>
    <NextDaysInfos/>
    <NextDaysInfos/>
    <NextDaysInfos/>
    <NextDaysInfos/>
    <NextDaysInfos/>
    <NextDaysInfos/>
    <NextDaysInfos/>
    



  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NextDaysInfos from '../components/dashboard-components/NextDaysInfos.vue'
export default {
  name: 'NextDays',
  components : {
    NextDaysInfos
  },
  computed : {
    ...mapGetters([
        'allCityInfos'
    ])
  },
  methods : {
    ...mapActions([
        'fetchCurrentWeather',
        'fetchNextDaysWeather'
    ]),
    submit(){
        
        this.fetchCurrentWeather(this.queryCity)
        this.fetchNextDaysWeather(this.queryCity)
        // Reset input field to empty after submission
        this.queryCity = ""
    }
  }
  
}
</script>

<style scoped lang="scss">

@import "./../assets/scss-variables/medias.scss";

.nextdays{
 
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(3,1fr);
  grid-gap: var(--gutterWidth);
  @include small{
    grid-template-columns: repeat(2,1fr);
  }
  &>.next-days-infos{
    margin:0;
  }
}

</style>