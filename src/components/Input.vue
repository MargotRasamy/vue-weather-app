<template>
   <form class="input">
                <input v-model="queryCity" v-on:click="getWeather" type="text" id="search-input" name="searching" placeholder="Rechercher..."/>
                <button type="submit" alt="submit"/>
                
    </form>
  
</template>

<script>
// Import axios for calls
const axios = require('axios');

// Import store
import store from '../store/store.js'

export default {
  name: 'Input',
  data(){
      return {
          apiKey : "5931f623ca1fae44f02bc1bf35cb9c7a",
          queryCity: "",
          weather : {}
      }
  },
  methods : {
    getWeather() {
        console.log(store.apiKey)
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Londres&units=metric&appid=${store.apiKey}`)
        .then(response => console.log(response.data) );
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Paris&appid=${store.apiKey}&lang=fr`)
        .then(response => console.log(response.data) )
    }
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
        border-radius: var(--borderRadiusSmall);
        box-sizing: border-box;
        border: none;
        box-shadow: var(--boxShadowPurple);
        height: 40px;
        width: 100%;
        padding-left: var(--spaceS);
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