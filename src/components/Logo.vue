<template>
  <router-link to="/" class="logo">
    
    <img alt="logo" src="../assets/logo.svg"/>
    <h3>Meteor <span>Garden</span></h3>
    
  </router-link>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped lang="scss">
.logo{
  display: flex;
  align-items: center;
  text-align: left;
}
h3 {
  font-weight: bold;
  color: var(--colorMainBlack);
}

h3 span{
    color:var(--colorPurple);
}
.logo img {
    height: 32px;
    width: 32px;
    margin-right: 8px;
}

</style>