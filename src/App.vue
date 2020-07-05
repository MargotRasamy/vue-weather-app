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
body{
  margin:0;
  background-color: var(--colorPurpleVeryLight);
}
h1,h2,h3,h4,h5,h6 {
    font-weight: bold;
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


:root {

  /* Shades of grey */
  --colorMainBlack: #292929;
  --colorDarkGrey: #707070;
  --colorLightGrey: #C2C2C2;
  --colorVeryLightGrey: #EDEDED;
  --colorWhite: #FAFAFA;

  /* Main color */
  --colorPurple: #6E68FF;
  --colorPurpleLight: #aeacff;
  --colorPurpleVeryLight: #f1f1ff;
  
  /* Secondary color */
  --colorYellow: #FFBF0D;
  --colorYellowLight: #FFD767;
  --colorYellowVeryLight: #FFFAEC;

  /* Small buttons */
  --borderRadiusSmall: 8px;
  /* Large buttons */
  --borderRadiusMedium: 10px;
  /* Big areas */
  --borderRadiusLarge: 16px;
  /* main box shadow */
  --boxShadow: 1px 3px 6px rgba(0, 0, 0, 0.4);
  /* Box shadow primary color */
  --boxShadowPurple: 1px 3px 8px #b5b4ff;
  /* Box shadow secondary color */
  --boxShadowYellow: 1px 3px 6px #ffbe0d7d;
  
  --marginsLayout: 30px;
  --gutterWidth: 16px;
  --gridColumns: repeat(12, 1fr);

  --spaceXS: 4px;
  --spaceS: 8px;
  --spaceM: 16px;
  --spaceML: 24px;
  --spaceL: 30px;
  --spaceXL: 64px;

/* medias */
  @mixin small {
    @media (max-width: 767px) {
      @content;
    }
  }

  @mixin medium {
    @media (min-width: 768px) and (max-width: 959px) {
      @content;
    }
  }

  @mixin large {
    @media (min-width: 960px) and (max-width: 1079px) {
      @content;
    }
  }

  @mixin extralarge {
    @media (min-width: 1080px) {
      @content;
    }
  }

  @include small {
    --marginsLayout: 16px;
    --gutterWidth: 10px;
    --gridColumns: repeat(4, 1fr);
  }
  

}
</style>
