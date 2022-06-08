<template>
    <main :class="$mq">   
        <h5 class="upper-case quinary-heading">
            <span class="quinary-heading darker">02</span>
            Meet your crew
        </h5>
        <img class="crew-image" :src="require(`@/assets/crew/image-${getMemberImage}.webp`)" :alt="getMemberImage">
        <crew-info class="crew-info-component" @updateQuery="updateMemberQuery" :crewInformation="crewInfo"/>
    </main>
</template>

<script>
import CrewInfo from '@/components/CrewInfo.vue'   
export default {
    components:{CrewInfo},
    data(){
      return{
        crewInfo : {

        }
      }
    },
    computed:{
      getQuery(){
        let member = this.$route.query.member;
        this.getPlanetData(member);
        return member;
      },
      getMemberImage(){
          let memberName = this.$route.query.member.split(" ");
          return memberName[0] + "-" + memberName[1]
      }
    },
    methods:{
      updateMemberQuery(member){
        if(this.$route.query.member != member){
          this.$router.replace({query: {member}})
        }
        this.getMemberData(member);
      },
      getMemberData(member){
        this.$store.dispatch("getData", 
          {
            name : member, 
            page: "crew"
          }
        );
        this.crewInfo = this.$store.state.currData;
      },
        getImgUrl(pic) {
            return require(pic)
        }
    },
    created(){
        if(this.$route.query.member != "douglas hurley"){
            this.$router.replace({query: {member: "douglas hurley"}});
        }
        this.getMemberData('douglas hurley');
    }
}
</script>

<style lang="scss" scoped>
    main{
        padding: 1.5rem;
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-areas: 
            "heading"
            "image"
            "crew-info-component";     
        .darker{
            color: rgb(144, 130, 130);
            font-weight: 800;
        }
        h5{
            grid-area: heading;
        }
        .crew-image{
            grid-area: image;
            margin-top: 2rem;
            margin-left: 2.5rem;
            max-width: 177px;
            max-height: 222px;
        }
        .crew-info-component{
            grid-area: crew-info-component;
        }
        &.tablet{
            padding: 0.8rem 3rem;
            padding-bottom: 0rem;
            grid-template-areas: 
            "heading"
            "crew-info-component"
            "image";
            
            .crew-image{
                margin-top:0rem;
                max-width: 456px;
                min-height: 500px;
            }
            .quinary-heading{
               justify-self: start;
            }
        }
        &.desktop{
            padding: 1rem 5rem;
            padding-bottom: 0rem;
            justify-items: start;
            align-items: flex-start;
            grid-template-columns: repeat(2,1fr);
            grid-template-rows: 1fr 3fr;
            grid-template-areas: 
            "heading image"
            "crew-info-component image";  
            
            .crew-image{
                max-width: 568px;
                min-height: 560px;
            }
            .quinary-heading{
                justify-self: start;
            }
        }
    }

</style>