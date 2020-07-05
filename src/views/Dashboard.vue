<template>
  <div class="dashboard">
    <!-- 1st column datas -->
    <div class="dashboard-primary dashboard-container-grid">
      <div class="current-weather dashboard-data">
        <p class="data-title">Situation actuelle</p>
      </div>
      <div class="current-weather dashboard-data">
        <p class="data-title">Situation actuelle</p>
      </div>
      <div class="current-weather dashboard-data">
        <p class="data-title">Situation actuelle</p>
      </div>
      
    
    </div>
    

    <!-- 2nd column datas -->
    <div class="dashboard-secondary dashboard-container-grid">
      <div class="current-weather dashboard-data">
        <p class="data-title">Situation actuelle</p>
      </div>
      <div class="current-weather dashboard-data">
        <p class="data-title">Situation actuelle</p>
      </div>
      <div class="current-weather dashboard-data">
        <p class="data-title">Situation actuelle</p>
      </div>
      <div class="current-weather dashboard-data">
        <p class="data-title">Situation actuelle</p>
      </div>
    </div>
  
  </div>
</template>

<script>

export default {
  name: 'Dashboard'
}
</script>

<style scoped lang="scss">
  @import "../assets/scss-variables/medias.scss";


.dashboard{
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  
  @include small{
    grid-template-columns: var(--gridColumns);
  }
  & .data-title{
    display:inline-block;
    color: var(--colorPurple);
    margin: 0;
  }
  & .dashboard-container-grid{
    display: grid;
    grid-template-rows: auto;
    grid-gap: var(--gutterWidth);

  }

  & .dashboard-data{
    display: flex;
    padding: var(--spaceS) var(--spaceM);
    border-radius: var(--borderRadiusLarge);
    
  }
  & .dashboard-primary{
    grid-column: 1 / 8;
    
    &> *{background-color: var(--colorWhite);
      box-shadow: var(--boxShadow);
    }
    @include small {
       grid-column: 1 / 5;
    }
  }
  & .dashboard-secondary{
    grid-column: 8 / 11;
    
    &> *{background-color: var(--colorPurpleLight);
      box-shadow: var(--boxShadowPurple);
    }
    @include small {
       grid-column: 1 / 5;
    }
    & .data-title{
    color: var(--colorWhite);
  }
  }
}

</style>