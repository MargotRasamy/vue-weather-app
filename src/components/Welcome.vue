<template>
  <div class="welcome">
    <h1>Bienvenue sur Meteor Garden !</h1>
    <h2>Pour voir la météo d'aujourd'hui et des prochains jours, recherchez votre ville ci-dessus.</h2>
  </div>
</template>

<script>
export default {
    name: 'Welcome'
}
</script>

<style scoped lang="scss">
    .welcome{
        text-align: center;
    }
    h1{
        color: var(--colorPurple);
    }
</style>