<template>
   <form class="input">
                <input v-model="queryCity"  type="text" id="search-input" placeholder="Rechercher..."/>
                <button v-on:click.prevent="submit" alt="submit"/>
    </form>
  
</template>

<script>

// Import store Vuex
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Input',
  data(){
      return {
          queryCity: ""
      }
  },
//   Getters to use   
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