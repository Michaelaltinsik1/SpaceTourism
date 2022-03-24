<template>
  <header class="site-header">
    <div class="logo-container">
      <img src="../assets/shared/logo.svg" alt="Logo">
    </div> 
    <SiteNav/>
  </header>
</template>

<script>
import SiteNav from './SiteNav.vue'
  export default {
  components: { SiteNav }
  }
</script>

<style>
  
</style>