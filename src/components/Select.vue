<template>
  <div class="select">
    
    <select v-on:change="onChange($event)" v-model="$i18n.locale">
        <option value="fr" selected>Français</option>
        <option value="en" >English</option>
    </select>

    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Select',
  computed : {
    ...mapGetters([
        'language',
        'allCityInfos'
    ])
  },
  methods : {
    ...mapActions([
        'changeLanguage',
        'fetchCurrentWeather',
        'fetchNextDaysWeather'
    ]),
    onChange(event) {
      this.changeLanguage(event.target.value)
      this.fetchCurrentWeather(this.allCityInfos.cityName)
        this.fetchNextDaysWeather(this.allCityInfos.cityName)
    }
  }
}
</script>


<style scoped lang="scss">
.select{
    margin: auto 0;
    width:100%;
    
}
select {
   -webkit-appearance: none;
   -moz-appearance: none;
   background-color: var(--colorWhite);
   appearance: none;
   background-image: url('../assets/select.svg');
   background-repeat: no-repeat;
   background-position:  95% center;
   width:100%;
   height:40px;
   border-radius: var(--borderRadiusMedium);
   border: none;
   outline:none;
   box-shadow: var(--boxShadowPurple);
   padding-left: var(--spaceM);
   font-size: 16px;
   &:focus, &:active{
        border: 2px solid var(--colorPurpleLight);
        outline: var(--colorPurple);
    }
}

</style>