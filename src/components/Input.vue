<template>
   <form class="input">
                <input v-model="queryCity" v-on:keyup.enter="fetchCurrentWeather"  type="text" id="search-input" name="searching" placeholder="Rechercher..."/>
                <button type="submit" v-on:click="getWeather" alt="submit"/>
                <p v-bind="allCityInfos">{{ allCityInfos.cityName }}</p>
    </form>
  
</template>

<script>

// Import store Vuex
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Input',
  data(){
      return {
          queryCity: "",
          city : "Paris"
      }
  },
  // Getters to use   
  computed : {
    ...mapGetters([
        'allCityInfos'
    ])
  },
  methods : {
    getWeather() {
        console.log(this.apiKey)
        // axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Londres&units=metric&appid=${this.apiKey}&lang=fr`)
        // .then(response => console.log(response.data) );
        // axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Paris&units=metric&appid=${this.apiKey}&lang=fr`)
        // .then(response => console.log(response.data) )
    },
    ...mapActions([
        'fetchCurrentWeather'
    ])
  },
  // Fetch the datas when the vue has already been created  
  mounted(){
      this.fetchCurrentWeather(this.city)
  }
  
}
</script>

<style scoped lang="scss">
.input {
  position: relative;
  height: fit-content;
  margin:auto 0;
    //input
    & input {
        border-radius: var(--borderRadiusMedium);
        box-sizing: border-box;
        border: none;
        box-shadow: var(--boxShadowPurple);
        height: 40px;
        width: 100%;
        padding-left: var(--spaceM);
        font-size: var(--fontSizeMain);
       
    }

    & input:focus {
        border: 2px solid var(--colorPurpleLight);
        outline: var(--colorPurple);
    }
  

    //button
    & button {
        cursor: pointer;
        background-color: transparent;
        background-image: url('../assets/search.svg');
        background-size: cover;
        background-position: center;
        border: none;
        position: absolute;
        right: var(--spaceS);
        top: calc(50% - (var(--iconSize)/2));
        padding:0;
        height:var(--iconSize);
        width:var(--iconSize);
    }

    & button:active,
    & button:focus {
        outline: none;
        border: none;
    }

}


</style>