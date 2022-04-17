<template>
    <article :class="$mq">
        <h4 class="quaternary-heading upper-case">{{crewInformation.role}}</h4>
        <h3 class="tertiary-heading upper-case">{{crewInformation.name}}</h3>
        <p class="text">{{crewInformation.bio}}</p>
        <ul class="crew-nav">
            <li @click="setMemberName('douglas hurley')" :class="{ 'active' : currentRouteName === 'douglas hurley'}"></li>
            <li @click="setMemberName('mark shuttleworth')" :class="{ 'active' : currentRouteName === 'mark shuttleworth'}"></li>
            <li @click="setMemberName('victor glover')" :class="{ 'active' : currentRouteName === 'victor glover'}"></li>
            <li @click="setMemberName('anousheh ansari')" :class="{ 'active' : currentRouteName === 'anousheh ansari'}"></li>
        </ul>

  </article>
</template>

<script>
export default {
    props:['crewInformation'],
    computed:{
        currentRouteName() {
            return this.$route.query.member;
    
        },
    },
    methods:{
      setMemberName(member){
        this.$emit('updateQuery', member);
      }
    }
}
</script>

<style lang="scss" scoped>
    article{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
        "nav"
        "ranking"
        "name"
        "text";
        max-width: 450px;
        .quaternary-heading{
            grid-area: ranking;
        }
        .tertiary-heading{
            margin: 0.7rem 0rem;
            grid-area: name;

        }
        .tertiary-heading, .quaternary-heading, .text{
            text-align: center;
        }
        .text{
            grid-area: text;
            margin-top: 0.5rem;
            line-height: 1.4rem;
        }
        .crew-nav{
            grid-area: nav;
            justify-self: center;
            display: flex;
            min-width: 8rem;
            align-items: center;
            justify-content: space-around;
            margin: 3rem 0rem;
            li{
                min-width: 10px;
                min-height: 10px;
                background-color: #979797;
                border-radius: 999rem;
                background-color: rgba($color: #979797, $alpha: 0.6);
                &:hover{
                    background-color:rgb(203, 200, 200);
                }
                &.active{
                    background-color:#fff;
                }
            }
        }
        &.tablet, &.desktop{
            margin-top: 4rem;
            grid-template-areas:
                "ranking"
                "name"
                "text"
                "nav";
            .tertiary-heading{
                padding-top: 0.5rem;
                padding-bottom: 0.4rem;
            }
            .text{
                 line-height: 1.6rem;
            }
        }
        &.desktop{
            margin-top: 0rem;
            max-width: 500px;
            //min-width: 500px;
            .tertiary-heading, .quaternary-heading, .text{
                text-align:unset;
            }
            li{
                min-width: 15px;
                min-height: 15px;
            }
        }
        
    }
</style>