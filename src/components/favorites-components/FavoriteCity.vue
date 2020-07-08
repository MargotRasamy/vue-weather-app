<template>
    <div class="favorite-city">
            <Star class="favorite"/>
            <img class="flag" src="https://www.countryflags.io/gb/shiny/64.png"/>
            <!-- <img class="flag" v-bind:src="'https://www.countryflags.io/' + allCityInfos.countryCode + '/shiny/64.png'"/> -->
             <p class="favorite-city--name">London, GB</p>
        
    </div>
</template>

<script>
import Star from '../Star.vue';

export default {
    name: 'FavoriteCity',
    components : {
        Star
    }
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