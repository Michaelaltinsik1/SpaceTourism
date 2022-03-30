<template>
  <header class="site-header" :class="$mq">
    <div class="logo-container">
      <img class="logo" :class="$mq" src="../assets/shared/logo.svg" alt="Logo" width="45" height="45">
    </div> 
    <SiteNav class="nav"/>
  </header>
</template>

<script>
import SiteNav from './SiteNav.vue'
  export default {
    components: { SiteNav }
  }
</script>

<style lang="scss" scoped>
  .site-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.8rem;
      padding-right: 0rem;
      .logo-container{
          display: flex;
      }

      .logo.mobile{
        width: 40px;
        height: 40px;
      }
      .nav{
        min-height: 70px;
      }
  }
  .site-header.mobile{
    padding: 0rem 1.5rem;
  }
</style>