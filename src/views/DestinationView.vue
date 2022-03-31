<template>
  <main :class="$mq">
    <h5 class="upper-case quinary-heading" :class="$mq"><span class="quinary-heading darker" :class="$mq">01
      </span>Pick your destination
    </h5>
      <img class="planet-image" :src="require(`../assets/destination/image-${getQuery}.webp`)" :class="$mq" :alt=getQuery width="400" height="400">
      
    <!-- 
      ****

      Make an own conponent for this article

      ****
    -->
      <article class="planet-data-container">
        <ul class="planet-nav-container"> 
          <li @click="changeImage('moon')" class="upper-case nav-text" :class="$mq">Moon</li>
          <li @click="changeImage('mars')" class="upper-case nav-text" :class="$mq">Mars</li>
          <li @click="changeImage('europa')" class="upper-case nav-text" :class="$mq">Europa</li>
          <li @click="changeImage('titan')" class="upper-case nav-text" :class="$mq">Titan</li>
        </ul>
        <h2 class="center-text upper-case secondary-heading" :class="$mq">Moon</h2>
        <p class="center-text text" :class="$mq">
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. 
          While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <div class="planet-info-container" :class="$mq">
          <h5 class="center-text sub-heading-two upper-case" :class="$mq">Avg. distance</h5>
          <h4 class="center-text sub-heading-one upper-case" :class="$mq">384,400 km</h4>
          <h5 class="center-text sub-heading-two upper-case" :class="$mq">Est. travel time</h5>
          <h4 class="center-text sub-heading-one upper-case" :class="$mq">3 Days</h4>
        </div>
      </article>
      <!-- 
          *****
          *****
          *****
       -->
  </main>
</template>

<script>
export default {
  computed:{
    getQuery(){
      return this.$route.query.planet;
    }
  },
  methods:{
    changeImage(planet){
      if(this.$route.query.planet != planet){
        this.$router.replace({query: {planet}})
      }
    }
  },
  created(){
    if(this.$route.query.planet != "moon"){
      this.$router.replace({query: {planet: "moon"}})
    }
  }
}
</script>

<style lang="scss" scoped>
  main{
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .planet-image{
      max-width: 170px;
      max-height: 170px;
      padding: 2.2rem 1rem;
    }
    .planet-data-container{
      .planet-nav-container{
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-evenly;
        .nav-text{
          font-size:14px;
        }
      }
      .center-text.mobile,.center-text.tablet {
        text-align: center;
      }
      .text{
        line-height: 1.4rem;
        margin-top: 0.8rem;
        margin-bottom: 2rem;
      }
      .planet-info-container.mobile{
        padding: 2rem;
        .sub-heading-one{
          margin-bottom: 1rem;
        }
        .sub-heading-two{
          margin-bottom: 0.5rem;
        }
      }
    }
  }

</style>