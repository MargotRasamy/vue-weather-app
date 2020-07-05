<template>

    <nav>
        <span></span>
        <ul class="nav">
            <li class="nav-item nav-active">
            <router-link class="nav-link " to="/">Météo du jour</router-link>   
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/nextdays">Les prochains jours</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/favorites">Mes villes favorites</router-link>
            </li>
        </ul>
     </nav>   
    

</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped lang="scss">
@import "../../assets/scss-variables/medias.scss";
nav {
    background-color: var(--colorPurpleLight);
    color: var(--colorWhite);
    height:100%;
    width:100%;
    border-radius: 0 var(--borderRadiusLarge) 0 0;
    text-align: left;
    @include small {
         height: max-content;
         box-shadow: var(--boxShadow);
        border-radius: var(--borderRadiusLarge);
    }
}
span {
    background-color: var(--colorPurpleLight);
    position: absolute;
    left:0;
    bottom:0;
    width:31px;
    height:calc(100% - 89px);
    @include small{
        display: none;
    }
}
.nav{
    list-style: none;
    width:100%;
    padding:0;
   margin: var(--spaceL) 0;
}
.nav-link{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding:var(--spaceXS) var(--spaceM);
    min-height:40px;
    
}
.nav-active{
    color: var(--colorPurple);
    background-color: var(--colorPurpleVeryLight);

    border-radius: var(--borderRadiusMedium) 0 0 var(--borderRadiusMedium) ;
    @include small{
        background-color: var(--colorPurpleVeryLight);
        border-radius: 0;
       
    }
}

  
    


</style>