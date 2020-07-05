<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style lang="scss">
  @import "./assets/scss-variables/colors.scss";
  @import "./assets/scss-variables/spaces.scss";
  @import "./assets/scss-variables/medias.scss";
  @import "./assets/scss-variables/misc.scss";

body{
  margin:0;
  background-color: var(--colorPurpleVeryLight);
}
h1,h2,h3,h4,h5,h6 {
    font-weight: bold;
}
a{
  text-decoration: none;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--colorMainBlack);
  margin: 0 var(--marginsLayout);
  min-height: 100vh;
}


</style>
