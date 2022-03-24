<template>
  <div class="wrapper">
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Destination">Destination</router-link>
    <router-link to="/Crew">Crew</router-link>
    <router-link to="/Technology">Technology</router-link>
  </nav>
    <router-view></router-view>
  </div>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Destination">Destination</router-link>
    <router-link to="/Crew">Crew</router-link>
    <router-link to="/Technology">Technology</router-link>
  </nav> -->
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import "./assets/styles/_colors";
  @import "./assets/styles/_reset";
  @import "./assets/styles/_typography";
</style>