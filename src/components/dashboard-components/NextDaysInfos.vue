<template>
  <div class="next-days-infos">
    <p>05/07/2020 à 05:56</p>
    <img src="../../assets/sky.jpg"/>
    <span>
        <p>31°</p>
    </span>

  </div>
</template>

<script>
export default {
  name: 'NextDaysInfos'
}
</script>

<style scoped lang="scss">

    .next-days-infos{
        width: min-content;
        margin: auto;
        & p:first-child {
          font-weight: bold;
          color: var(--colorYellow);
        }
        & p:last-child {
            font-weight: bold;
            color: var(--colorPurple);
        }
            
        
    }

</style>