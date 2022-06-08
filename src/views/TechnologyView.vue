<template>
  <main :class="$mq">
      <h5 class="upper-case quinary-heading">
          <span class="quinary-heading darker">03</span>
          SPACE LAUNCH 101
      </h5>
      <img v-if="$mq === 'desktop'" class="tech-image" :src="require(`../assets/technology/image-${getQuery}-portrait.jpg`)" :alt=getQuery width="" height="">
      <img v-else class="tech-image" :src="require(`../assets/technology/image-${getQuery}-landscape.jpg`)" :alt=getQuery width="" height="">
      <ul class="tech-nav">
        <li class="circle upper-case nav-text" @click="setTechnology('launch-vehicle')" :class="{ 'active' : currentRouteName === 'launch-vehicle'}">1</li>
        <li class="circle upper-case nav-text" @click="setTechnology('spaceport')" :class="{ 'active' : currentRouteName === 'spaceport'}">2</li>
        <li class="circle upper-case nav-text" @click="setTechnology('space-capsule')" :class="{ 'active' : currentRouteName === 'space-capsule'}">3</li>
      </ul>
      <div class="container">
        <h4 class="quaternary-heading upper-case">The technology...</h4>
        <h3 class="tertiary-heading upper-case">{{techInfo.name}}</h3>
        <p class="text">{{techInfo.description}}</p>
      </div>   
  </main>
</template>

<script>
export default {
  data(){
      return{
        techInfo : {

        }
      }
    },
  computed:{
    getQuery(){
      let tech = this.$route.query.tech;
      this.getTechData(tech);
      return tech;
      },
    currentRouteName() {
      return this.$route.query.tech;
    },
  },
  methods:{
    setTechnology(techName){
      if(this.$route.query.tech != techName){
          this.$router.replace({query: {tech : techName}})
        }
    },
    getTechData(tech){
      if(tech === 'launch-vehicle'){
        tech = 'launch vehicle';
      }
      if(tech === 'space-capsule'){
        tech = 'space capsule';
      }
        this.$store.dispatch("getData", 
          {
            name : tech, 
            page: "technology"
          }
        );
        this.techInfo = this.$store.state.currData;
      }
  },
  created(){
      if(this.$route.query.tech != "launch-vehicle"){
        this.$router.replace({query: {tech: "launch-vehicle"}})
      }
  }
}
</script>

<style lang="scss" scoped>
  main{
    .text, .quaternary-heading,.tertiary-heading,.quinary-heading{
      text-align: center;
    }
    .tertiary-heading{
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
    .quinary-heading{
      margin-bottom: 1rem;
    }
    .container{
      display:flex;
      flex-direction:column;
      align-items: center;
    }
    .text{
      padding:1rem 2rem;
      line-height: 1.7rem;
    }
    .tech-image{
      width:100vw;
    }
    .tech-nav{
      margin: 1rem 0rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .circle{
        box-sizing: border-box;
        padding-left: 3px;
        border-radius: 999rem;
        border:1px solid rgb(117, 117, 117);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        min-width: 45px;
        min-height: 45px;
        margin: 0.5rem;
        &:hover{
          background-color:rgb(32, 31, 31)
        }
        &.active{
        background-color: white;
        color: black;
        
      }
      }

    } 
    &.tablet{
      display:flex;
      flex-direction:column;
      .quinary-heading{
        text-align: start;
        padding: 1rem 1rem;
      }
      .tech-nav{
        margin:2rem;
      }
      .text{
        max-width: 60%;   
        align-self: center;   
        padding-bottom: 3rem;  
      }
    }  
     &.desktop{
       display:grid;
       grid-template-columns: 250px repeat(4, 2fr);
       grid-template-rows: 1fr 6fr;
       grid-template-areas:
       "name name . . ."
       "nav container container img img";

       .quinary-heading{
         padding-left: 3rem;
         text-align: start;
         align-self:center;
         grid-area: name;
       }
       .tech-nav{
         display: flex;
         flex-direction: column;
         grid-area: nav;
         .circle{
          min-width: 70px;
          min-height: 70px;
         }
       }
       .container{
         align-self: center;
         grid-area: container;
       }
       .tech-image{
         grid-area: img;
         width: 80%;
         justify-self: flex-end;
         margin-bottom: 4rem;
       }
     }

  }
</style>