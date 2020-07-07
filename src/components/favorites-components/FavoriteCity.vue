<template>
    <div class="favorite-city">
        <span>
            <p class="favorite-city--name">London, GB</p>
            <img class="favorite" src="../../assets/favorite.svg" height="20px"/>
        </span>
        <span>
            <img class="flag" src="https://www.countryflags.io/gb/shiny/64.png"/>
        </span>
        

    </div>
</template>

<script>
export default {
    name: 'FavoriteCity'
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
    & span {
        display: float;
        & .favorite-city--name{
            float:left;
            font-size: 21px;
        }
        & .favorite {
            float: right;
        }
    }
}
</style>