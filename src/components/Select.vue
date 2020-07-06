<template>
  <div class="select">
    
    <select>
        <option selected>Français</option>
        <option >English</option>
    </select>
    
  </div>
</template>

<script>
export default {
  name: 'Select'
}
</script>

<style scoped lang="scss">
.select{
    margin: auto 0;
    width:100%;
}
select {
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;       /* Remove default arrow */
   background-image: url('../assets/select.svg');   /* Add custom arrow */
   background-repeat: no-repeat;
   background-position:  95% center;
   width:100%;
   height:40px;
   border-radius: var(--borderRadiusSmall);
   border: none;
   outline:none;
   box-shadow: var(--boxShadowPurple);
   padding-left: var(--spaceM);
   font-size: 16px;
   &:focus, &:active{
        border: 2px solid var(--colorPurpleLight);
        outline: var(--colorPurple);
    }
}

</style>