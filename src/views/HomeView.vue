<template>
  <main class="home" :class="$mq">
    <!-- <p class="text">{{$mq}}</p>
    <h1 class="primary-heading">Home</h1> -->
    <article class="container" :class="$mq">
      <h5 class="upper-case quinary-heading" :class="$mq">So, you want to travel to</h5>
      <h1 class="upper-case primary-heading" :class="$mq">Space</h1>
      <p class="text" :class="$mq">Let’s face it; if you want to go to space, you might as well genuinely go to outer 
        space and not hover kind of on the edge of it. Well sit back, 
        and relax because we’ll give you a truly out of this world experience!
      </p>
    </article>
    <button class="upper-case explore" :class="$mq">Explore</button>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .home{
    padding: 1.2rem 1.5rem;
    // display: flex;
    // flex-direction: column;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    min-height: 100%;
    &.tablet{
      padding: 1.5rem 6rem;
      // padding-left:(clamp(6rem, 20%, 35%));
      // padding-right:(clamp(6rem, 20%, 35%));
      grid-template-rows: 1.5fr 1fr;
      @media only screen and (max-width: 600px) and (min-width: 448px)  {
        grid-template-rows: 1.75fr 1fr;
        padding: 1.2rem 2rem;
        padding-bottom: 3.5rem;
      } 
      padding-bottom: 4rem;
    }
    &.desktop{
      grid-template-columns: 1.2fr 1fr;
      grid-template-rows: 1fr;
      padding: 0rem 2rem;
      padding-bottom: 5rem;    
    }
    .container{
      justify-self: center;
      max-width: 24rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .primary-heading{
        margin: 1.2rem 0rem;
      }
      .text, .quinary-heading{
        text-align: center;
      }
      &.desktop{
        max-width: 35rem;
        padding: 2rem 4rem;
        align-self: end;
        .text, .quinary-heading{
          text-align:left
        }
      }
  
    }
    .container.desktop{
      align-items: flex-start;
    }
    .explore{
      // justify-self: center;
      // min-width: 274px;
      // min-height: 274px;
      // min-width: 150px;
        // min-height: 150px;
      width: 150px;
      height: 150px;
      border-radius: 999rem;
      &:hover,&:focus{
        outline: 1.5rem solid rgba(#fff, 0.1);
      }
      &.tablet{
        // min-width: 242px;
        // min-height: 242px;
        width: 220px;
        height: 220px;
        
        @media only screen and (max-width: 600px) and (min-width: 448px)  {
          width: 180px;
          height: 180px; 
          // min-width: 180px;
          // min-height: 180px; 
        }
        &:hover,&:focus{
          outline: 2rem solid rgba(#fff, 0.1);
        }     
      }
      &.desktop{
        // min-width: 274px;
        // min-height: 274px;
        align-self: end;
        width: 274px;
        height: 274px;
        &:hover,&:focus{
          outline: 3rem solid rgba(#fff, 0.1);
        }
      }
    }
  }

  
</style>
