<template>
  <main :class="$mq">
    <h5 class="upper-case quinary-heading" :class="$mq"><span class="quinary-heading darker" :class="$mq">01
      </span>Pick your destination
    </h5>
    <img class="planet-image" :src="require(`../assets/destination/image-${getQuery}.webp`)" :alt=getQuery width="400" height="400">
    <planetData class="planetData" @getPlanetData="changeImage" :planetInformation="planetInfo"/>
  </main>
</template>

<script>
  import planetData from '../components/PlanetDataDestination.vue'
  export default {
    components:{planetData},
    data(){
      return{
        planetInfo : {
          description: "",
          distance: "",
          images: {},
          name: "",
          travel: ""
        }
      }
    },
    computed:{
      getQuery(){
        let planet = this.$route.query.planet
        this.getPlanetData(planet);
        return planet;
      }
    },
    methods:{
      changeImage(planet){
        if(this.$route.query.planet != planet){
          this.$router.replace({query: {planet}})
        }
      },
      getPlanetData(planet){
        this.$store.dispatch("getData", 
          {
            name : planet, 
            page: "destinations"
          }
        );
        this.planetInfo = this.$store.state.currData;
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
    .quinary-heading .darker{
      color: rgb(144, 130, 130);
      font-weight: 800;
    }
    .planet-image{
      max-width: 170px;
      max-height: 170px;
      padding: 2.2rem 1rem;
    }
    &.tablet{
      .quinary-heading{
        align-self: flex-start;
      }
      .planet-image{
        max-width: 300px;
        max-height: 300px;
      }
    }
    &.desktop{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      grid-template-rows: 1fr 4fr;
      grid-template-areas:
      "destination ."
      "planet planetData";
      .planet-image{
        max-width: 445px;
        max-height: 445px;
      }
      .planetData{
        grid-area: planetData;
      }
      .planet-image{
        align-self: center;
        justify-self: center;
        grid-area: planet;
      }
      h5{
        text-align: center;
        grid-area: destination;
      }
    }
  }

</style>