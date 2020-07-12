<template>

    <nav ref="navMenu" >
        <span></span>
        <ul class="nav">
            <li   class="nav-item">
            <router-link ref="navLink1" :class="[!currentRoute.includes('nextdays') && !currentRoute.includes('favorites') ? 'nav-active' : '' ]" class="nav-link" to="/">{{ $t('nav.currentWeather') }}</router-link>   
            </li>
            <li  class="nav-item">
            <router-link ref="navLink2" :class="[currentRoute.includes('nextdays') ? 'nav-active' : '' ]" class="nav-link" to="/nextdays">{{ $t('nav.nextDaysInfos') }}</router-link>
            </li>
            <li  class="nav-item">
            <router-link ref="navLink3" :class="[currentRoute.includes('favorites') ? 'nav-active' : '' ]" class="nav-link" to="/favorites">{{ $t('nav.favorites') }}</router-link>
            </li>
        </ul>
     </nav>   
    

</template>

<script>
export default {
  name: 'Nav',
  computed : {
      currentRoute(){ return this.$route.path
      }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss-variables/medias.scss";
nav {
    background-color: var(--colorPurpleLight);
    position: relative;
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
    left: - 30px;
    bottom:0;
    width:32px;
    z-index: -1;
    height: 100%;
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
    color: var(--colorWhite);
}
.nav-active{
    background-color: var(--colorPurpleVeryLight);
    border-radius: var(--borderRadiusLarge) 0 0 var(--borderRadiusLarge) ;
    color: var(--colorPurple);
    
    @include small{
        background-color: var(--colorPurpleVeryLight);
        border-radius: 0;
       
    }
}

  
    


</style>