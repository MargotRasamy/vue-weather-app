<template>
  <div class="welcome">
    <h1>{{ $t('welcome.title') }}</h1>
    <p>{{ $t('welcome.caption') }}</p>
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
    p {
      font-size: 24px;
    }
</style>