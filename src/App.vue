<template>
  <div class="wrapper" :class="[currentRouteName, $mq]">
    <SiteHeader class="site-h" :class="$mq"/>
    <router-view class="main-content" ></router-view>
  </div>
</template>

<script>
  import SiteHeader from './components/SiteHeader.vue'
  export default {
    components:{SiteHeader},
    computed:{ 
      currentRouteName() {
        return this.$route.name;
      }
    }
  }
</script>

<style lang="scss">
  @import "@/assets/styles/_colors";
  @import "./assets/styles/_reset";
  @import "./assets/styles/_typography";
  body,html{
    min-height: 100vh;
  }
  .wrapper{
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    &.desktop{
      display: flex;
      flex-direction: column;
      .main-content{
        margin: auto 0rem;
        &.destination{
          //margin: 0rem;
        }
      }
      
    }
    .site-h{
      min-height: 100px;
    }
    .site-h.mobile{
      min-height: 80px;
    }

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
    .main-content.desktop{
      margin: 0rem;
    }
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