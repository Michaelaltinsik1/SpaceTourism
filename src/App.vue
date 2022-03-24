<template>
  <div class="wrapper" :class="[currentRouteName, $mq]">
    <SiteHeader/>
    <p :class="$mq">{{currentRouteName}}</p>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/Destination">Destination</router-link>
      <router-link to="/Crew">Crew</router-link>
      <router-link to="/Technology">Technology</router-link>
    </nav> -->
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
  import SiteHeader from './components/SiteHeader.vue'
  export default {
    components:{SiteHeader},
    computed:{ 
      currentRouteName() {
        return this.$route.name;
      }
  
  }}
</script>

<style lang="scss">
  @import "./assets/styles/_colors";
  @import "./assets/styles/_reset";
  @import "./assets/styles/_typography";
  
  .wrapper{
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
  }
  .wrapper.home{
    background-image:url('./assets/home/background-home-desktop.jpg');
    &.tablet{
      background-image:url('./assets/home/background-home-tablet.jpg');
    }
    &.mobile{
      background-image:url('./assets/home/background-home-mobile.jpg');
    }
  }
  .destination{
    background-image:url('./assets/destination/background-destination-desktop.jpg');
    &.tablet{
      background-image:url('./assets/destination/background-destination-tablet.jpg');
    }
    &.mobile{
      background-image:url('./assets/destination/background-destination-mobile.jpg');
    }
  }
  .crew{
    background-image:url('./assets/crew/background-crew-desktop.jpg');
    &.tablet{
      background-image:url('./assets/crew/background-crew-tablet.jpg');
    }
    &.mobile{
      background-image:url('./assets/crew/background-crew-mobile.jpg');
    }
  }
  .technology{
    background-image:url('./assets/technology/background-technology-desktop.jpg');
    &.tablet{
      background-image:url('./assets/technology/background-technology-tablet.jpg');
    }
    &.mobile{
      background-image:url('./assets/technology/background-technology-mobile.jpg');
    }
  }
</style>