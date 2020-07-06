<template>
  <div class="next-days-infos">
    <p>05/07/2020</p>
    <img src="../../assets/sky.jpg"/>
    <span>
        <p>31°</p>
        <p>18°</p>
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
        & span {
            display: flex;
            justify-content: space-around;
            font-weight: bold;
            & p:first-child {
                color: var(--colorPurple);
            }
            & p:last-child {
                color: var(--colorYellow);
            }
        }
    }

</style>