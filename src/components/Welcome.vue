<template>
  <div class="welcome">
    <h1>{{ $t('welcome.title') }}</h1>
    <h2>{{ $t('welcome.caption') }}</h2>
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