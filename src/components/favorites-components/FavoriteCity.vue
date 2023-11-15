<template>
    <router-link to="/" class="favorite-city"  >
            <Star class="favorite" :colorChange="isFavorited" />
            <img class="flag" v-bind:src="'https://www.flagsapi.com/' + favCountryCode + '/shiny/64.png'"/>
             <p class="favorite-city--name">{{ favCityName }}</p>
        
    </router-link>
</template>

<script>
import Star from '../Star.vue';

export default {
    name: 'FavoriteCity',
    components : {
        Star
    },
    props : ['favCityName', 'favCountryCode', 'isFavorited' ]
}
</script>

<style scoped lang="scss">
.favorite-city{
    display: flex;
    flex-direction: column;

    padding:var(--spaceM);
    background-color: var(--colorWhite);
    border-radius: var(--borderRadiusMedium);
    box-shadow: var(--boxShadowPurple);
    &>:first-child{
        margin-left:auto;
    }
  
    .favorite-city--name{
            font-size: 21px;
            font-weight:bold;
            margin: auto;
    }
    
    .flag{
        width: 70px;
        margin: auto;
    }
}
</style>