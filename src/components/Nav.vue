<template>

    <nav ref="navMenu" >
        <span></span>
        <ul class="nav">
            <li v-on:click="activateNavLink"  class="nav-item">
            <router-link ref="navLink1" class="nav-link nav-active" to="/">Météo du jour</router-link>   
            </li>
            <li v-on:click="activateNavLink" class="nav-item">
            <router-link ref="navLink2" class="nav-link" to="/nextdays">Les prochains jours</router-link>
            </li>
            <li v-on:click="activateNavLink" class="nav-item">
            <router-link ref="navLink3" class="nav-link" to="/favorites">Mes villes favorites</router-link>
            </li>
        </ul>
     </nav>   
    

</template>

<script>
export default {
  name: 'Nav',
  methods: {
    activateNavLink : function (event) {
        const navLinkClassList = event.target
        const navLink1 = this.$refs.navLink1.$el
        const navLink2 = this.$refs.navLink2.$el
        const navLink3 = this.$refs.navLink3.$el
        const navLinks = [navLink1, navLink2, navLink3]
        for (let i = 0; i < navLinks.length ; i++) {
            if (navLinks[i].classList.contains('nav-active')){
                navLinks[i].classList.toggle('nav-active')
            }
            if (navLinks[i] === navLinkClassList) {
                navLinks[i].classList.add('nav-active')
            }
        }    
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
    width:30.5px;
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