<template>
    <article class="planet-data-container" :class="$mq">
        <ul class="planet-nav-container" :class="$mq"> 
          <li @click="setPlanetName('moon')" class="upper-case nav-text" :class="{ 'active' : currentRouteName === 'moon'}">Moon</li>
          <li @click="setPlanetName('mars')" class="upper-case nav-text" :class="{ 'active' : currentRouteName === 'mars'}">Mars</li>
          <li @click="setPlanetName('europa')" class="upper-case nav-text" :class="{ 'active' : currentRouteName === 'europa'}">Europa</li>
          <li @click="setPlanetName('titan')" class="upper-case nav-text" :class="{ 'active' : currentRouteName === 'titan'}">Titan</li>
        </ul>
        <h2 class="center-text upper-case secondary-heading" :class="$mq">Moon</h2>
        <p class="center-text text" :class="$mq">
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. 
          While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <div class="planet-info-container" :class="$mq">
          <h5 class="center-text sub-heading-two upper-case">Avg. distance</h5>
          <h4 class="center-text sub-heading-one upper-case">384,400 km</h4>
          <h5 class="center-text sub-heading-two upper-case">Est. travel time</h5>
          <h4 class="center-text sub-heading-one upper-case">3 Days</h4>
        </div>
    </article>
</template>

<script>
export default {
    computed:{
        currentRouteName() {
            return this.$route.query.planet;
        }
    },
    methods:{
      setPlanetName(planet){
        this.$emit('getPlanetData', planet);
      }
    }
}
</script>

<style lang="scss" scoped>
    .planet-data-container{
      .planet-nav-container{
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-evenly;
        .nav-text{
          font-size:14px;
          cursor: pointer;
          &:hover{
              border-bottom: 2px solid rgba(#fff, 0.5);
          }
        }
        .active{
          border-bottom: 2.5px solid rgba(#fff, 1);
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
      .planet-info-container.tablet, .planet-info-container.desktop{
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 0rem 3rem;
          grid-template-areas:
          "dist-heading est-travel-heading"
          "dist-value est-travel-value";
          h5:nth-of-type(1){
              grid-area: dist-heading;
          }
          h4:nth-of-type(1){
              grid-area: dist-value;
          }
          h5:nth-of-type(2){
              grid-area: est-travel-heading;
          }
          h4:nth-of-type(2){
              grid-area: est-travel-value;
          }
          h5{
              margin-top: 2rem;
              margin-bottom: 0.8rem;
          }
          h4{
              margin-bottom: 2rem;
          }
      }
      &.mobile{
         display: flex;
          flex-direction: column;
        .planet-info-container,.planet-nav-container{
          align-self: center;
        }
      }
      .center-text{
        text-align: center;
      }
      &.tablet{
            max-width: 80%;
            display: flex;
            flex-direction: column;
            .planet-nav-container{
                display: flex;
                .nav-text{
                    margin: 1rem;
                }
            }
            .planet-info-container,.planet-nav-container{
              align-self: center;
            }

        }
      &.desktop{
        align-self: center;
        justify-self: center;
        max-width: 420px;
        .planet-nav-container{
          justify-content: space-between;
        }
      }
      
    }
</style>>