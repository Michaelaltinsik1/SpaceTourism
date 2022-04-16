<template>
    <article :class="$mq">
        <h4 class="quaternary-heading upper-case">Commander</h4>
        <h3 class="tertiary-heading upper-case">Douglas Hurley</h3>
        <p class="text">
            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. 
            He launched into space for the third time as commander of Crew Dragon Demo-2.
        </p>
        <ul class="crew-nav">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

  </article>
</template>

<script>
export default {

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
        .tertiary-heading, .quaternary-heading, .text{
            text-align: center;
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
               
            }
        }
        &.tablet{
            margin-top: 4rem;
            grid-template-areas:
                "ranking"
                "name"
                "text"
                "nav";
            }
            .tertiary-heading{
                padding-top: 0.5rem;
                padding-bottom: 0.4rem;
            }
            .text{
                 line-height: 1.6rem;
            }
    }
</style>