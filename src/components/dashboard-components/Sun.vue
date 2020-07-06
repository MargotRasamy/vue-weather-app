<template>
  <div class="sun">
     <p class="data-title">Lever et coucher du soleil</p>
    <span>         
        <div class="data-sun">
            <img src="../../assets/weather-icons/sunrise-1.svg"/>
            <span>
            <p>Lever du soleil</p>
            <p class="data-hours">06:03</p>
            </span>
        </div>

        <div class="data-sun">
            <img src="../../assets/weather-icons/sunset-1.svg"/>
            <span>
            <p>Coucher du soleil</p>
            <p class="data-hours">18:06</p>
            </span>
        </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Sun'
}
</script>

<style scoped lang="scss"> 
    .sun {
      display: flex;
      flex-direction: column;
    }
    .sun > span {
      display: flex;
      flex-direction: column;
      margin: auto;
      
    }
    .data-sun{
      display: flex;
      width:fit-content;
      padding: var(--spaceS) 0;
      p{
        text-align: left;
        margin-left: var(--spaceS);
      }
    } 

</style>