<template>
  <a href="#" class="favorite" v-on:click="toggleFavoritingCity">
      <svg  id="color" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path :class="[ colorChange ? 'starYellow' : 'starGrey']" class="star" d="m23.363 8.584-7.378-1.127-3.307-7.044c-.247-.526-1.11-.526-1.357 0l-3.306 7.044-7.378 1.127c-.606.093-.848.83-.423 1.265l5.36 5.494-1.267 7.767c-.101.617.558 1.08 1.103.777l6.59-3.642 6.59 3.643c.54.3 1.205-.154 1.103-.777l-1.267-7.767 5.36-5.494c.425-.436.182-1.173-.423-1.266z" /></svg>
  </a>
</template>

<script>
export default {
    name : 'Star',
    // Passing a method to the parent to toggle favorite cities : update list
    methods : {
        toggleFavoritingCity : function() {
            this.$emit('toggleCity')
        }
    },
    // Datas
    props : ['colorChange']
}
</script>

<style scoped lang="scss">
    .favorite{
        text-decoration: none;
        width:fit-content;
        height:fit-content
    }
    .favorite:hover .star{
        fill: var(--colorYellowLight);
    }
  
    .starYellow {
        fill: var(--colorYellowLight);
    }
    .starGrey {
        fill: var(--colorLightGrey);
    }
</style>